<template>


    <div class="update-section">
        <div class="update-container">
            <h1 class="update-title">Update Page</h1>

            <div v-if="loading" class="loading">Loading...</div>

            <form v-else @submit.prevent="updatePage">
                <div >
                    <label>Title</label>
                    <input type="text" v-model="form.title" required />
                </div>
                <button type="submit" class="update-btn">Update Page</button>
            </form>
        </div>
    </div>

</template>

<script>
import apiClient from "../apiClient";


export default {
    name: "EditPage",



    data() {
        return {
            loading: true,
            form: {
                title: "",
            },
        };
    },

    async mounted() {
        this.loadPage();
    },

    methods: {
        async loadPage() {
            try {
                const id = this.$route.params.id;
                const response = await apiClient.get(`pages/${id}`);

                const page = response.data;

                this.form.title = page.title;
            } catch (error) {
                console.error("Failed to load page:", error);
            } finally {
                this.loading = false;
            }
        },

        async updatePage() {
            try {
                const id = this.$route.params.id;

                await apiClient.put(`pages/${id}`, this.form);

                alert("Page updated!");
                this.$router.push({ name: "admin" });
            } catch (error) {
                console.error("Update failed:", error);
                alert("Failed to update the page");
            }
        },
    },
};
</script>

<style>
.update-section {
    display: flex;
    justify-content: center;
    margin: 50px 0;
}

.update-container {
    width: 90%;
    max-width: 700px;
    padding: 30px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
    border-top: 5px solid #ff6600;
    border-bottom: 5px solid #ff6600;
}

.update-title {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #ff6600;
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: 600;
    margin: 10px 0 5px;
}

input,
textarea {
    width: 100%;      
    border-radius: 8px;
    border: 1px solid #ccc; 
    font-size: 15px;
    padding: 10px;     
    box-sizing: border-box; 
}


.update-btn {
    width: 100%;
    padding: 14px;
    background: #ff6600;
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease;
}

.update-btn:hover {
    background: #ff8800;
}

.loading {
    font-size: 18px;
    text-align: center;
    color: #777;
    padding: 30px 0;
}
</style>
