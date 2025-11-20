<template>
    <div class="meta-container">
        <h1>Meta Tags</h1>

        <button class="add-btn" @click="showAddForm = true">+ Add Meta Tag</button>

        <!-- ADD FORM -->
        <div v-if="showAddForm" class="form-box">
            <input v-model="newTag.meta_name" placeholder="Meta Name" />
            <input v-model="newTag.meta_content" placeholder="Meta Content" />
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
                    <td>{{ tag.meta_content }}</td>
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
            <input v-model="editingTag.meta_content" />
            <button class="save-btn" @click="updateTag">Update</button>
            <button class="cancel-btn" @click="editingTag = null">Cancel</button>
        </div>

        <button class="add-btn back-btn" @click="goBack">Back To Pages List</button>

    </div>
</template>

<script>
import apiClient from "../apiClient";

export default {
    name: "MetaTags",

    data() {
        return {
            tags: [],
            showAddForm: false,
            newTag: { meta_name: "", meta_content: "", page_id: null },
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
            this.newTag.meta_content = "";
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
            this.$router.push({ name: "admin" });
        }
    },
};
</script>

<style>
.meta-container {
    width: 90%;
    max-width: 1000px;
    margin: 40px auto;
    padding: 25px;
    background: #111;
    color: #fff;
    border-radius: 12px;
    border-top: 4px solid #ff9900;
}

.meta-container h1 {
    margin-bottom: 32px;
}

.add-btn {
    background: #ff9900;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 20px;
}

.back-btn {
    margin-top: 32px;
}

.form-box {
    background: #1b1b1b;
    padding: 20px;
    border: 1px solid #ff9900;
    border-radius: 10px;
    margin-bottom: 20px;
}

.save-btn {
    background: #ff9900;
    padding: 8px 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.cancel-btn {
    background: #333;
    padding: 8px 14px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
}

.edit-btn {
    background: #111;
    color: #00c3ff ;
    padding: 8px;
    border-radius: 5px;
    margin-right: 5px;
    border: 1px solid;
}

.delete-btn {
    background: #111;
    color: #ff3300;
    border: 1px solid;
    padding: 8px;
    border-radius: 5px;
}
</style>
