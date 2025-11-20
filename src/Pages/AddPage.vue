<template>
  <div class="add-page-section">
    <div class="form-container">

      <h1 class="form-title">Add New Page</h1>
      <form @submit.prevent="submitForm">

        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="form.title" required />
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? "Saving..." : "Add Page" }}
        </button>
      </form>
    </div>


  </div>
</template>

<script>

import apiClient from "../apiClient";

export default {
  name: "AddPage",
  data() {
    return {
      form: {
        title: "",
      },
      loading: false,
    };
  },

  methods: {
    async submitForm() {
      this.loading = true;

      try {
        
        const payload = {
          title: this.form.title,
        };

        await apiClient.post("/pages", payload);

        alert("Page added successfully!");
        this.$router.push({ name: "admin" }); 
      } catch (error) {
        console.error("Failed to add page:", error);
        alert("Error adding page. Check console for details.");
      } finally {
        this.loading = false;
      }
    }

  },
};
</script>

<style scoped>
.add-page-section {
  background: #111111;
  /* dark background */
  min-height: 100vh;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container {
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
  padding: 30px;
  background: #1f1f1f;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  border-top: 5px solid #ff6600;
}

.form-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 25px;
  color: #ff6600;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 6px;
  color: #ff9900;
}

.form-group input,
.form-group textarea {
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  background: #2a2a2a;
  color: #f5f5f5;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background-color: #ff6600;
  color: #111;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  background-color: #ff9900;
}
</style>
