<template>
  <NavbarComponent/>
  <div class="admin-section">

    <div class="admin-container">
      <h1 class="admin-title">Pages Listing</h1>
      
      <div v-if="loading" class="loading">Loading...</div>
      
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Slug</th>
          <th>Title</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="page in pages" :key="page.id">
          <td data-label="Name">{{ page.name }}</td>
          <td data-label="Slug">{{ page.slug }}</td>
          <td data-label="Title">{{ page.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<FooterComponent/>
</template>


<script>
import apiClient from "../apiClient";
import NavbarComponent from "./NavbarComponent.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
  name: "AdminPages",

  data() {
    return {
      pages: [],
      loading: true,
    };
  },
  components:{
    NavbarComponent,
    FooterComponent,
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

.admin-section{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.admin-container {
  width: 90%;
  max-width: 1200px;
  padding: 30px;
  background: #ffffff; 
  border-radius: 16px;
  box-shadow: 0 6px 30px rgba(0,0,0,0.2); 
  border-top: 5px solid #ff6600; 
  border-bottom: 5px solid #ff6600; 
}

/* Title */
.admin-title {
  font-size: 32px;
  margin-bottom: 25px;
  font-weight: 700;
  color: #ff6600; /* Orange title */
  text-align: center;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
  background: #1f1f1f; /* Dark table background */
  color: #f5f5f5; /* Light text */
}
table:hover{
  cursor: pointer;
}
thead {
  background: #111111; /* Black table header */
}

thead th {
  padding: 14px 10px;
  text-align: left;
  font-size: 15px;
  color: #ff9900; /* Orange header text */
  text-transform: uppercase;
  letter-spacing: 1px;
}

tbody tr {
  border-bottom: 1px solid #333333;
  transition: background 0.25s ease;
}

tbody tr:hover {
  background-color: #ff9900; 
  color: #111111;
  
}

tbody td {
  padding: 14px 10px;
  font-size: 15px;
  color: #f5f5f5; /* Light text */
}
tbody td:hover{
  color: #111111;

}

/* Loading text */
.loading {
  font-size: 18px;
  color: #999999;
  padding: 20px 0;
  text-align: center;
}

/* Scrollbar */
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

/* Responsive */
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
    color: #ff6600; /* Orange labels */
  }
}



</style>