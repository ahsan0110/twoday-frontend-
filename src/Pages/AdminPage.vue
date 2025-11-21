<template>
  <NavbarComponent />
  <div class="admin-section">

    <div class="admin-container">
      <h1 class="admin-title">Pages Listing</h1>
      <div class="search-div">
        <input type="text" v-model="searchQuery" placeholder="Search pages..." class="search-input" />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
        <button><i class="fa-solid fa-xmark"></i></button>
      </div>


      <div v-if="loading" class="loading">Loading...</div>

      <table v-else>
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
                <button class="edit-btn" @click="editPage(page.id)"><i class="fa-solid fa-pen"></i></button>
                <button class="delete-btn" @click="deletePage(page.id)"><i class="fa-solid fa-trash "></i></button>
                <button class="tags-btn" @click="goToMetaTags(page.id)"><i class="fa-solid fa-eye"></i></button>

              </div>
            </td>
          </tr>
        </tbody>

      </table>
      <div class="table-footer">
        <button @click="goToAddPage" class="add-page">Add Pages</button>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>


<script>
import apiClient from "../apiClient";
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: "AdminPages",

  data() {
    return {
      pages: [],
      loading: true,
      searchQuery: "",
    };
  },
  components: {
    NavbarComponent,
    FooterComponent,
  },

  mounted() {
    this.fetchPages();
  },
  computed: {
    filteredPages() {
      if (!this.searchQuery.trim()) return this.pages;

      const q = this.searchQuery.toLowerCase();

      return this.pages.filter(page =>
        page.title.toLowerCase().includes(q)
      );
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
    }
  }

};
</script>

<style>
.table-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.add-page {
  border: none;
  border-radius: 12px;
  font-size: 15px;
  padding: 14px 20px;
  background-color: #ff6600;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-page:hover {
  background-color: #ff9900;
  color: #111;
}

.admin-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.admin-container {
  width: 50%;
  max-width: 1200px;
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
  border-top: 5px solid #ff6600;
  border-bottom: 5px solid #ff6600;
}

.admin-title {
  font-size: 32px;
  margin-bottom: 25px;
  font-weight: 700;
  color: #ff6600;
  text-align: center;
}
.table-icons{
  display: flex;
  gap: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
  background: #1f1f1f;
  color: #f5f5f5;
}

table:hover {
  cursor: pointer;
}

thead {
  background: #111111;
}

thead th {
  padding: 14px 10px;
  text-align: left;
  font-size: 15px;
  color: #ff9900;
  text-transform: uppercase;
  letter-spacing: 1px;
}

tbody tr {
  border-bottom: 1px solid #333333;
  transition: background 0.25s ease;
}

tbody tr:hover {
  background-color: #000000;

}

tbody td {
  padding: 14px 10px;
  font-size: 15px;
  color: #f5f5f5;
}

.loading {
  font-size: 18px;
  color: #999999;
  padding: 20px 0;
  text-align: center;
}

.edit-btn,
.delete-btn,
.tags-btn {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;
  transition: 0.3s ease;
}

.edit-btn {
  background: #ff9900;
  color: #111;
}

.edit-btn:hover {
  color: #000000;
  background: #00c3ff;
}

.delete-btn {
  background-color: #000000;
  color: #ff3300;
  margin-right: 2px;
}

.delete-btn:hover {
  background: #ff3300;
  color: #000000;
}

.tags-btn {
  background: #111;
  color: #ff9900;
  border: 1px solid #ff9900;
}

.tags-btn:hover {
  background: #ff9900;
  color: #111;
}

.search-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-div button{
  padding: 10px;
}
.search-input {
  width: 50%;
  padding: 2px 18px;
  border-radius: 50px;
  border: 2px solid #000000;
  font-size: 16px;
  outline: none;
  background-color: #282828;
  transition: 0.3s ease;
  color: #fff;
  box-shadow: 0 0 8px #3a3a3a;
}

.search-input::placeholder {
  color: #d8d8d8;
}

.search-input:focus {
  border-color: #ffa600;
  box-shadow: 0 0 8px #ff9900;
}


::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #888888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555555;
}

@media (max-width: 768px) {
  table {
    font-size: 14px;
  }

  thead {
    display: none;
  }

  tbody tr {
    display: block;
    margin-bottom: 12px;
  }

  tbody td {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px dashed #444444;
  }

  tbody td::before {
    content: attr(data-label);
    font-weight: bold;
    color: #ff6600;
  }
}
</style>