<template>
    <AdminSidebar />
    <AdminHeader />
    <div class="meta-main-section">

        <div class="meta-container">
            <h1>Meta Tags</h1>

            <button class="add-btn" @click="showAddForm = true">+ Add Meta Tag</button>

            <!-- ADD FORM -->
            <div v-if="showAddForm" class="form-box">
                <input v-model="newTag.meta_name" placeholder="Meta Name" />
                <input v-model="newTag.meta_value" placeholder="Meta Value" />
                <button class="save-btn" @click="addMetaTag">Save</button>
                <button class="cancel-btn" @click="showAddForm = false">Cancel</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="tag in tags" :key="tag.id">
                        <td>{{ tag.meta_name }}</td>
                        <td>{{ tag.meta_value }}</td>
                        <td>
                            <button class="edit-btn" @click="editTag(tag)">Edit</button>
                            <button class="delete-btn" @click="deleteTag(tag.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- EDIT FORM -->
            <div v-if="editingTag" class="form-box">
                <input v-model="editingTag.meta_name" />
                <input v-model="editingTag.meta_value" />
                <button class="save-btn" @click="updateTag">Update</button>
                <button class="cancel-btn" @click="editingTag = null">Cancel</button>
            </div>

            <button class="add-btn back-btn" @click="goBack">Back To Pages List</button>

        </div>
    </div>

</template>

<script>
import AdminHeader from "@/components/AdminHeader.vue";
import apiClient from "../apiClient";
import AdminSidebar from "@/components/AdminSidebar.vue";

export default {
    name: "MetaTags",
    components: {
        AdminHeader,
        AdminSidebar,
    },

    data() {
        return {
            tags: [],
            showAddForm: false,
            newTag: { meta_name: "", meta_value: "", page_id: null },
            editingTag: null,
        };
    },


    mounted() {
        this.newTag.page_id = this.$route.params.pageId;
        this.fetchTags();
    },

    methods: {
        async fetchTags() {
            const res = await apiClient.get(`/pages/${this.$route.params.pageId}/meta-tags`);
            this.tags = res.data;
        },

        async addMetaTag() {
            await apiClient.post("/meta-tags", this.newTag);
            this.fetchTags();
            this.showAddForm = false;
            this.newTag.meta_name = "";
            this.newTag.meta_value = "";
        },

        editTag(tag) {
            this.editingTag = { ...tag };
        },

        async updateTag() {
            await apiClient.put(`/meta-tags/${this.editingTag.id}`, this.editingTag);
            this.editingTag = null;
            this.fetchTags();
        },

        async deleteTag(id) {
            if (!confirm("Delete this meta tag?")) return;

            await apiClient.delete(`/meta-tags/${id}`);
            this.fetchTags();
        },

        goBack() {
            this.$router.push({ name: "PageList" });
        }
    },
};
</script>
