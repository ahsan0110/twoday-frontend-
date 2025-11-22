<template>
  <div class="admin-login-page">
    <div class="login-container">
      <h1>Admin Login</h1>
      <form @submit.prevent="login">
        <div>
          <label>Email</label>
          <input type="email" v-model="form.email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" v-model="form.password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import apiClient from "@/apiClient";

export default {
  name: "AdminLogin",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
  async login() {
    this.error = null;
    try {
      const res = await apiClient.post("/admin/login", this.form);
      const token = res.data.token;

      // Save token in localStorage
      localStorage.setItem("admin_token", token);

      // Redirect to admin dashboard (correct route name)
      this.$router.push({ name: "AdminPage" });
    } catch (err) {
      console.error(err);
      this.error = err.response?.data?.message || "Login failed!";
    }
  }
}

};
</script>

<style scoped>
.admin-login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-container {
  width: 350px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  background: #fff;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 10px;
  background: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
