<template>
    <div class="admin-side-bar">
        <AdminSidebar />
    </div>
    <div class="meta-admin-container">
        <h1 class="title">All Pages & Meta Tags</h1>

        <table>
            <thead>
                <tr>
                    <th>Page Name</th>
                    <th>Meta Name</th>
                    <th>Meta Value</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <template v-for="page in pageMetaList" :key="page.id">
                    <tr v-for="tag in page.metaTags" :key="tag.id">
                        <td>{{ page.title }}</td>
                        <td>{{ tag.meta_name }}</td>
                        <td>{{ tag.meta_value }}</td>

                        <td>
                            <button class="view-btn" @click="goToPageTags(page.id)">
                                Edit Meta Tags
                            </button>
                        </td>
                    </tr>

                    <!-- If page has no meta tags -->
                    <tr v-if="page.metaTags.length === 0">
                        <td>{{ page.title }}</td>
                        <td colspan="2" style="color:#bbb;">No Meta Tags</td>
                        <td>
                            <button class="view-btn" @click="goToPageTags(page.id)">
                                Add Meta Tags
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>

    </div>
</template>

<script>
import apiClient from "@/apiClient";
import AdminSidebar from "@/components/AdminSidebar.vue";


export default {
    name: "AdminMetaTags",
    components:{
        AdminSidebar,
    },

    data() {
        return {
            pages: [],
            pageMetaList: []
        };
    },

    async mounted() {
        await this.fetchPagesAndMeta();
    },

    methods: {
        async fetchPagesAndMeta() {
            try {
                // 1) Load all pages
                const response = await apiClient.get("/pages");
                this.pages = response.data;

                // 2) For each page, load its meta-tags
                const result = await Promise.all(
                    this.pages.map(async (page) => {
                        const res = await apiClient.get(`/pages/${page.id}/meta-tags`);

                        return {
                            ...page,
                            metaTags: res.data
                        };
                    })
                );

                this.pageMetaList = result;

            } catch (err) {
                console.error("Error loading pages and meta tags:", err);
            }
        },

        goToPageTags(pageId) {
            this.$router.push({
                name: "MetaTags",
                params: { pageId }
            });
        }
    }
};
</script>

<style>
.meta-admin-container {
    margin-left: 260px;
    padding: 30px;
}

.title {
    font-size: 32px;
    margin-bottom: 20px;
    color: #ff6600;
    font-weight: 700;
}

table {
    width: 100%;
    border-collapse: collapse;
    background: #1f1f1f;
    color: #fff;
    border-radius: 14px;
    overflow: hidden;
}

thead {
    background: #000;
}

th,
td {
    padding: 14px;
    border-bottom: 1px solid #333;
    text-align: left;
}

.view-btn {
    padding: 8px 14px;
    border-radius: 8px;
    border: none;
    background: #ff6600;
    color: #111;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

.view-btn:hover {
    background: #ffaa00;
}
</style>
