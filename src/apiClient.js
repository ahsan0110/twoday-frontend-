import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api"; // Laravel API

class ApiClient {
  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
  }

  get(url) { return this.client.get(url); }
  post(url, data) { return this.client.post(url, data); }
  put(url, data) { return this.client.put(url, data); }
  delete(url) { return this.client.delete(url); }
}

export default new ApiClient();
