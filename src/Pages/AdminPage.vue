<template>
  <div class="admin-container">
    <AdminSidebar />

    <div class="dashboard-section">
      <h1 class="dashboard-title">Admin Dashboard</h1>

      <div class="dashboard-cards">
        <div class="card" @click="goToPages">
          <i class="fa-solid fa-file-lines"></i>
          <span>Total Pages</span>
          <h2>{{ totalPages }}</h2>
        </div>

        <div class="card" @click="goToMetaTags">
          <i class="fa-solid fa-tags"></i>
          <span>Total Meta Tags</span>
          <h2>{{ totalMetaTags }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import apiClient from "@/apiClient";

export default {
  name: "AdminPage",
  components: { AdminSidebar },
  data() {
    return {
      totalPages: 0,
      totalMetaTags: 0,
    };
  },
  mounted() {
    this.fetchCounts();
  },
  methods: {
    async fetchCounts() {
      try {
        const pagesRes = await apiClient.get("/pages");
        this.totalPages = pagesRes.data.pages ? pagesRes.data.pages.length : pagesRes.data.length;

        const metaRes = await apiClient.get("/pages-with-meta");
        this.totalMetaTags = metaRes.data.data ? metaRes.data.data.length : 0;
      } catch (err) {
        console.error("Error fetching dashboard counts:", err);
      }
    },

    goToPages() {
      this.$router.push({ name: "PageList" });
    },

    goToMetaTags() {
      this.$router.push({ name: "AdminMetaTags" });
    },
  },
};
</script>

<style scoped>
.dashboard-section {
  margin-left: 260px;
  padding: 30px;
}
.dashboard-title {
  font-size: 32px;
  font-weight: bold;
  color: #ff6600;
  margin-bottom: 20px;
}
.dashboard-cards {
  display: flex;
  gap: 20px;
}
.card {
  flex: 1;
  background: #222;
  color: #fff;
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}
.card:hover {
  background: #ff6600;
  color: #111;
}
.card i {
  font-size: 36px;
  margin-bottom: 10px;
}
.card h2 {
  font-size: 28px;
  margin-top: 5px;
}
</style>
