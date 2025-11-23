<template>
  <AdminSidebar />
  <AdminHeader />

  <div class="page-list-container">
    <div class="admin-section">
      <h1 class="admin-title">Pages Listing</h1>

      <div class="search-div">
        <input type="text" v-model="searchQuery" placeholder="Search pages..." class="search-input" />
        <button @click="searchPages"><i class="fa-solid fa-magnifying-glass"></i></button>
        <button @click="cancelSearch"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <div v-if="loading" class="loading">Loading...</div>

      <!-- TABLE -->
      <div class="table-wrapper" v-else>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="page in pages" :key="page.id">
              <td>{{ page.title }}</td>
              <td>
                <div class="table-icons">
                  <button class="edit-btn" @click="openEditModal(page)">
                    <i class="fa-solid fa-pen"></i>
                  </button>
                  <button class="delete-btn" @click="deletePage(page.id)">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button class="tags-btn" @click="goToMetaTags(page.id)">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- API pagination -->
        <div class="pagination">
          <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>
          <span>Page {{ currentPage }} of {{ lastPage }}</span>
          <button @click="goToPage(currentPage + 1)" :disabled="currentPage === lastPage">Next</button>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="table-footer">
        <button @click="openAddModal" class="add-page">Add Page</button>
      </div>
    </div>
  </div>

  <!-- ADD / EDIT MODAL -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-box">
      <h2>{{ isEditing ? "Edit Page" : "Add New Page" }}</h2>

      <input v-model="formData.title" placeholder="Enter page title" class="modal-input" />

      <div class="modal-actions">
        <button class="save-btn" @click="isEditing ? updatePage() : createPage()">
          {{ isEditing ? "Update" : "Create" }}
        </button>
        <button class="cancel-btn" @click="closeModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import AdminHeader from "@/components/AdminHeader.vue";
import apiClient from "@/apiClient";

export default {
  name: "PageList",
  components: { AdminSidebar, AdminHeader },

  data() {
    return {
      pages: [],
      loading: true,
      searchQuery: "", // leave input for future API search
      showModal: false,
      isEditing: false,
      formData: { id: null, title: "" },
      currentPage: 1,
      lastPage: 1,
      perPage: 5,
    };
  },

  mounted() {
    this.fetchPages();
  },

  methods: {
    async fetchPages(page = 1) {
      this.loading = true;
      try {
        const res = await apiClient.get(`/pages?page=${page}&per_page=${this.perPage}`);
        this.pages = res.data.data;
        this.currentPage = res.data.current_page;
        this.lastPage = res.data.last_page;
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    openAddModal() {
      this.isEditing = false;
      this.formData = { id: null, title: "" };
      this.showModal = true;
    },

    openEditModal(page) {
      this.isEditing = true;
      this.formData = { id: page.id, title: page.title };
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    async createPage() {
      if (!this.formData.title) return alert("Title required");

      try {
        await apiClient.post("/pages", this.formData);
        this.closeModal();
        this.fetchPages(this.currentPage); // refresh current page
      } catch (err) {
        console.error(err);
      }
    },

    async updatePage() {
      try {
        await apiClient.put(`/pages/${this.formData.id}`, this.formData);
        this.closeModal();
        this.fetchPages(this.currentPage); // refresh current page
      } catch (err) {
        console.error(err);
      }
    },

    async deletePage(id) {
      if (!confirm("Delete page?")) return;

      try {
        await apiClient.delete(`/pages/${id}`);
        this.fetchPages(this.currentPage); // refresh current page
      } catch (err) {
        console.error(err);
      }
    },

    goToMetaTags(id) {
      this.$router.push({ name: "MetaTags", params: { pageId: id } });
    },

    goToPage(page) {
      if (page < 1 || page > this.lastPage) return;
      this.fetchPages(page);
    },

    // placeholder for future API search
    searchPages() {},
    cancelSearch() {
      this.searchQuery = "";
      this.fetchPages(1);
    },
  },
};
</script>

<style scoped>
.page-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.admin-section {
  margin-left: 280px;
  padding: 20px;
  width: 50%;
  box-sizing: border-box;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
}

.modal-box {
  background: #222;
  color: white;
  padding: 25px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
}

.modal-input {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border-radius: 6px;
  border: 1px solid #555;
  background: #333;
  color: white;
}

.modal-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.save-btn {
  background: #ff6600;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.cancel-btn {
  background: #444;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
}

.pagination button {
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background-color: #ff6600;
  color: #111;
  cursor: pointer;
  font-weight: bold;
}

.pagination button:disabled {
  background-color: #555;
  cursor: not-allowed;
}
</style>
