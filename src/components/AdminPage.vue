<template>
  <div>
    <h1>Pages Listing</h1>

    <div v-if="loading">Loading...</div>

    <table v-else border="1" cellpadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Slug</th>
          <th>Title</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="page in pages" :key="page.id">
          <td>{{ page.name }}</td>
          <td>{{ page.slug }}</td>
          <td>{{ page.title }}</td>
        </tr>
      </tbody>
    </table>
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
    };
  },

  mounted() {
    this.fetchPages();
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
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

</style>