<template>
    <NavbarComponent />
    <FormComponent 
        formSectionClass="contact-form" 
        formTextClass="contact-text" 
        mainText="Get in Touch"
        mainPara="Want to get in touch? Fill out the form and we'll contact you" 
    />
    <FooterComponent />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useHead } from '@vueuse/head';
import apiClient from '@/apiClient';

import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FormComponent from '@/components/FormComponent.vue';


const titleTag = ref("Contact - Us");
const metaTagsRaw = ref([]);


const metaTags = computed(() =>
  metaTagsRaw.value.map(tag => ({
    name: tag.name,
    content: tag.content
  }))
);

useHead({
  title: titleTag,
  meta: metaTags
});

onMounted(async () => {
  try {
    const pageId = 1; 
    const res = await apiClient.get(`/pages/${pageId}/meta-tags`);
    const pageMeta = res.data;

    if (!pageMeta || pageMeta.length === 0) return;

    const otherMeta = [];
    pageMeta.forEach(tag => {
      if (tag.meta_name.toLowerCase() === 'title') {
        titleTag.value = tag.meta_value;
      } else {
        otherMeta.push({ name: tag.meta_name, content: tag.meta_value });
      }
    });

    metaTagsRaw.value = otherMeta;
  } catch (err) {
    console.error("Error fetching page meta tags:", err);
  }
});
</script>
