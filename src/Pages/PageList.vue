<template>
  <div class="page-list-container">
    <AdminSidebar />

    <div class="admin-section">
      <h1 class="admin-title">Pages Listing</h1>

      <div class="search-div">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search pages..."
          class="search-input"
        />
        <button @click="searchPages"><i class="fa-solid fa-magnifying-glass"></i></button>
        <button @click="cancelSearch"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <div v-if="loading" class="loading">Loading...</div>

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
                  <button class="edit-btn" @click="editPage(page.id)">
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

      <div class="table-footer">
        <button @click="goToAddPage" class="add-page">Add Pages</button>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import apiClient from "@/apiClient";

export default {
  name: "PageList",
  components: { AdminSidebar },
  data() {
    return {
      pages: [],
      loading: true,
      searchQuery: "",
    };
  },
  mounted() {
    this.fetchPages();
  },
  computed: {
    filteredPages() {
      if (!this.searchQuery.trim()) return this.pages;
      const q = this.searchQuery.toLowerCase();
      return this.pages.filter(page => page.title.toLowerCase().includes(q));
    }
  },
  methods: {
    async fetchPages() {
      try {
        const response = await apiClient.get("/pages");
        this.pages = response.data.pages || response.data;
      } catch (error) {
        console.error("Failed to load pages:", error);
      } finally {
        this.loading = false;
      }
    },
    editPage(id) {
      this.$router.push({ name: "EditPage", params: { id } });
    },
    deletePage(id) {
      if (!confirm("Are you sure you want to delete this page?")) return;
      apiClient.delete(`/pages/${id}`)
        .then(() => {
          this.pages = this.pages.filter(p => p.id !== id);
        })
        .catch(err => console.error("Delete failed", err));
    },
    goToMetaTags(id) {
      this.$router.push({ name: "MetaTags", params: { pageId: id } });
    },
    goToAddPage() {
      this.$router.push({ name: "AddPage" });
    },
    searchPages() {
      // no extra logic needed as filteredPages is reactive
    },
    cancelSearch() {
      this.searchQuery = "";
    }
  }
};
</script>

<style scoped>
.page-list-container {
  display: flex;
}

/* Sidebar offset */
.admin-section {
  margin-left: 280px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

.admin-title {
  font-size: 28px;
  color: #ff6600;
  margin-bottom: 20px;
}

.search-div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  min-width: 180px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

/* Table scroll on small screens */
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #222;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #333;
  text-align: left;
}

.table-icons button {
  margin-right: 6px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.edit-btn { background: #ffaa00; color: #111; }
.delete-btn { background: #ff3300; color: #fff; }
.tags-btn { background: #00aaff; color: #fff; }

.table-footer {
  margin-top: 20px;
}

.add-page {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #ff6600;
  color: #111;
  cursor: pointer;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .admin-section {
    margin-left: 0;
    padding: 10px;
  }

  .search-div {
    flex-direction: column;
  }

  .table-icons button {
    margin-bottom: 6px;
  }

  table th, table td {
    padding: 8px;
  }
}
</style>
