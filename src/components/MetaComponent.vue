<template>
  <div>
    <h2>Pages List</h2>
    <ul>
      <li v-for="page in pages" :key="page.id">
        {{ page.title }} - Meta: {{ page.meta_tags }}
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from "../apiClient";

export default {
  data() {
    return { pages: [] };
  },
  mounted() {
    this.fetchPages();
  },
  methods: {
    async fetchPages() {
      try {
        const res = await apiClient.get("/pages");
        this.pages = res.data;
        console.log("Pages:", res.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
