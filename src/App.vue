<template>
  <div>
    <div v-if="loadingState.loading" class="loading-overlay">
      <div class="loader"></div>
    </div>

    <router-view />
  </div>
</template>

<script>
import { loadingState } from "./loading";

import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
export default {
  setup() {
    const siteData = reactive({
      title: "My App",
      description: "Twoday Clone Website",
    });

    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: "description",
          content: computed(() => siteData.description),
        },
      ],
    }); 
    return {
      loadingState, 
      siteData,
    };
  },
};
</script>

<style>
.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(3, 3, 3, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader {
  width: 60px;
  height: 60px;
  border: 5px solid #838383;
  border-top-color: #e90000;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
