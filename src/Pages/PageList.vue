<template>
  <AdminSidebar />
  <AdminHeader />

  <div class="page-list-container">
    <div class="admin-section">
      <h1 class="admin-title">Pages Listing</h1>

      <!-- SEARCH -->
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
            <tr v-for="page in filteredPages" :key="page.id">
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
      searchQuery: "",
      showModal: false,
      isEditing: false,
      formData: { id: null, title: "" }
    };
  },

  mounted() {
    this.fetchPages();
  },

  computed: {
    filteredPages() {
      if (!this.searchQuery.trim()) return this.pages;
      const q = this.searchQuery.toLowerCase();
      return this.pages.filter(p => p.title.toLowerCase().includes(q));
    }
  },

  methods: {
    async fetchPages() {
      try {
        const res = await apiClient.get("/pages");
        this.pages = res.data.pages || res.data;
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
        const res = await apiClient.post("/pages", this.formData);
        this.pages.push(res.data.page || res.data);
        this.closeModal();
      } catch (err) {
        console.error(err);
      }
    },

    async updatePage() {
      try {
        await apiClient.put(`/pages/${this.formData.id}`, this.formData);
        const index = this.pages.findIndex(p => p.id === this.formData.id);
        this.pages[index].title = this.formData.title;
        this.closeModal();
      } catch (err) {
        console.error(err);
      }
    },

    async deletePage(id) {
      if (!confirm("Delete page?")) return;

      try {
        await apiClient.delete(`/pages/${id}`);
        this.pages = this.pages.filter(p => p.id !== id);
      } catch (err) {
        console.error(err);
      }
    },

    goToMetaTags(id) {
      this.$router.push({ name: "MetaTags", params: { pageId: id } });
    },

    searchPages() { },
    cancelSearch() { this.searchQuery = ""; }
  }
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
</style>
