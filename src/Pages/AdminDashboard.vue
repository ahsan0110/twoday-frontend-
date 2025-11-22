<template>
  <div class="admin-dashboard">
    <h1>Welcome Admin!</h1>
    <button @click="logout">Logout</button>

    <!-- Example: Fetch pages -->
    <div>
      <h2>Pages</h2>
      <ul>
        <li v-for="page in pages" :key="page.id">{{ page.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import apiClient from "@/apiClient";

export default {
  name: "AdminDashboard",
  data() {
    return {
      pages: []
    };
  },
  async mounted() {
    try {
      const res = await apiClient.get("/admin/pages");
      this.pages = res.data;
    } catch (err) {
      if (err.response?.status === 403 || err.response?.status === 401) {
        alert("Unauthorized! Login as admin.");
        this.$router.push({ name: "AdminLogin" });
      }
    }
  },
  methods: {
    async logout() {
      try {
        await apiClient.post("/admin/logout");
        localStorage.removeItem("admin_token");
        this.$router.push({ name: "AdminLogin" });
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>
