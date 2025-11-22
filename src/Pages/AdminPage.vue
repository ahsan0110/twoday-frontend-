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

  
</template>


<script>
import apiClient from "../apiClient";


export default {
  name: "AdminPages",

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

