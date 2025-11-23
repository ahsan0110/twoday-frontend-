<template>
  <div class="admin-container">
    <AdminSidebar />
    <AdminHeader />

    <div class="welcome-box">
      <h2>Welcome Back, Admin</h2>
      <p>Manage your website content and performance from here.</p>
    </div>

    <div class="dashboard-section">

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
import AdminHeader from "@/components/AdminHeader.vue";

export default {
  name: "AdminPage",
  components: { AdminSidebar, AdminHeader },
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
        const pagesRes = await apiClient.get("/pages", {
          params: { per_page: 1 } // smallest load
        });
        this.totalPages = pagesRes.data.total;

        const metaRes = await apiClient.get("/pages-with-meta", {
          params: { per_page: 1 }
        });
        this.totalMetaTags = metaRes.data.total;
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
  margin-left: 280px;
  padding: 30px;
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
  background: #000000;

}

.card i {
  font-size: 36px;
  margin-bottom: 10px;
}

.card h2 {
  font-size: 28px;
  margin-top: 5px;
  color: #01ff01;
}


.welcome-box {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 280px;
  padding: 20px 35px;
  background: #ffffff;
}

.welcome-box h2 {
  font-size: 32px;
  margin: 0 0 20px;
  color: #333;
}

.welcome-box p {
  font-size: 20px;
  color: #666;
}

/* RESPONSIVE */
@media (max-width: 900px) {

  .admin-header,
  .welcome-box {
    margin-left: 0;
    text-align: center;
  }

  .admin-header {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
