<template>
  <div class="admin-meta-container">
    <AdminSidebar @logout="logout" />

    <div class="meta-admin-container">
      <h1 class="title">All Pages & Meta Tags</h1>

      <!-- Search Bar -->
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by page title"
          @input="searchPages"
        />
        <button @click="cancelSearch">Cancel</button>
      </div>

      <!-- Pages Table -->
      <table>
        <thead>
          <tr>
            <th>Page Name</th>
            <th>Meta Name</th>
            <th>Meta Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.uniqueKey">
            <td>{{ row.pageTitle }}</td>
            <td>{{ row.metaName || '-' }}</td>
            <td>{{ row.metaValue || '-' }}</td>
            <td>
              <button
                class="edit-btn"
                @click="editTag(row)"
                :disabled="!row.metaId"
              >
                <i class="fa-solid fa-pen"></i>
              </button>
              <button
                class="delete-btn"
                @click="deleteTag(row)"
                :disabled="!row.metaId"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination Controls -->
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
        <span>Page {{ currentPage }} of {{ lastPage }}</span>
        <button @click="nextPage" :disabled="currentPage === lastPage">Next</button>
      </div>

      <!-- Edit Form -->
      <div v-if="editingRow" class="edit-form">
        <h3>Edit Meta Tag</h3>
        <input v-model="editingRow.metaName" placeholder="Meta Name" />
        <input v-model="editingRow.metaValue" placeholder="Meta Value" />
        <div class="edit-buttons">
          <button @click="updateTag">Update</button>
          <button @click="editingRow = null">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "@/apiClient";
import AdminSidebar from "@/components/AdminSidebar.vue";

export default {
  name: "PagesMetaCombined",
  components: { AdminSidebar },

  data() {
    return {
      rows: [],
      currentPage: 1,
      lastPage: 1,
      pageSize: 5,
      searchQuery: "",
      editingRow: null,
    };
  },

  mounted() {
    // Check for admin token
    const token = localStorage.getItem("admin_token");
    if (!token) {
      alert("Unauthorized! Please login as admin.");
      this.$router.push({ name: "AdminLogin" });
      return;
    }

    // Attach token to apiClient headers
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    this.loadRows();
  },

  methods: {
    // Load rows from API with pagination & search
    async loadRows(page = 1) {
      try {
        const res = await apiClient.get("/pages-with-meta", {
          params: {
            page,
            per_page: this.pageSize,
            search: this.searchQuery.trim(),
          },
        });

        this.rows = res.data.data;
        this.currentPage = res.data.current_page;
        this.lastPage = res.data.last_page;
      } catch (err) {
        if (err.response && err.response.status === 403) {
          alert("Unauthorized! Admin access only.");
          this.$router.push({ name: "AdminLogin" });
        } else {
          console.error("Error loading rows:", err);
        }
      }
    },

    // Pagination
    nextPage() {
      if (this.currentPage < this.lastPage) this.loadRows(this.currentPage + 1);
    },
    prevPage() {
      if (this.currentPage > 1) this.loadRows(this.currentPage - 1);
    },

    // Search
    searchPages() {
      this.loadRows(1);
    },
    cancelSearch() {
      this.searchQuery = "";
      this.loadRows(1);
    },

    // Edit a meta tag
    editTag(row) {
      if (!row.metaId) return alert("No meta tag to edit.");
      this.editingRow = { ...row };
    },

    async updateTag() {
      if (!this.editingRow) return;
      await apiClient.put(`/meta-tags/${this.editingRow.metaId}`, {
        meta_name: this.editingRow.metaName,
        meta_value: this.editingRow.metaValue,
      });
      this.editingRow = null;
      this.loadRows(this.currentPage);
    },

    async deleteTag(row) {
      if (!row.metaId) return alert("No meta tag to delete.");
      if (!confirm("Delete this meta tag?")) return;

      await apiClient.delete(`/meta-tags/${row.metaId}`);
      this.loadRows(this.currentPage);
    },

    // Logout admin
    logout() {
      localStorage.removeItem("admin_token");
      apiClient.defaults.headers.common["Authorization"] = null;
      this.$router.push({ name: "AdminLogin" });
    },
  },
};
</script>


<style scoped>

.meta-admin-container {
  margin-left: 260px;
  padding: 30px;
}
.title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #ff6600;
  font-weight: 700;
}
.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.search-bar input {
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #555;
  background: #333;
  color: #fff;
}
.search-bar button {
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  background: #ff6600;
  color: #111;
}
table {
  width: 100%;
  border-collapse: collapse;
  background: #1f1f1f;
  color: #fff;
  border-radius: 14px;
  overflow: hidden;
}
thead {
  background: #000;
}
th,
td {
  padding: 14px;
  border-bottom: 1px solid #333;
  text-align: left;
}
.edit-btn {
  background-color: #ffaa00;
  color: #111;
  margin-right: 6px;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
}
.delete-btn {
  background-color: #ff3300;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
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
.edit-form {
  margin-top: 20px;
  background: #222;
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  color: #fff;
}
.edit-form input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #555;
  background: #333;
  color: #fff;
}
.edit-buttons button {
  margin-right: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.edit-buttons button:first-child {
  background-color: #ffaa00;
  color: #111;
}
.edit-buttons button:last-child {
  background-color: #555;
  color: #fff;
}
</style>
