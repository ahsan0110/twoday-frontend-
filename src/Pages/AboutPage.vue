<template>
  <NavbarComponent />
  <HeroSection
    heroClass="about-hero-content"
    smallText="ABOUT US"
    largeText="We create a better tomorrow<br>through AI and technology"
    videoSrc="women.mp4"
    ctaText="Get in Touch"
    ctaLink="#form-section-id"
  />

  <CounterNumber />
  <LatestNews newsSectionClass="about-news-section" />

  <LastingImpact mainText="Our values show in everything we do" :items="data" />

  <FormComponent mainText="Get to know us" />
  <FooterComponent />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import apiClient from '@/apiClient';

import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import FormComponent from '@/components/FormComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CounterNumber from '@/components/CounterNumber.vue';
import LatestNews from '@/components/LatestNews.vue';
import LastingImpact from '@/components/LastingImpact.vue';

const titleTag = ref("About - Us");
const metaTagsRaw = ref([]);

// Immediately set head with empty/default values
useHead({
  title: titleTag.value,
  meta: []  // empty at first
});

const data = [
  { type: "image", src: "government.png", text: "Together with Päijät-Häme Welfare Region, we’re using AI to make everyday life simpler.", cta: "Read More", link: "/extra" },
  { type: "image", src: "walking.png", text: "ISS saves hundreds of hours of working time by modernizing its data platform and customer reporting.", cta: "Read More", link: "/extra" },
  { type: "image", src: "cat.jpeg", text: "A future-proof platform that brings systems together, simplifies daily work, and helps our client move faster.", cta: "Read More", link: "/extra" },
];

onMounted(async () => {
  try {
    const pageId = 3;
    const res = await apiClient.get(`/pages/${pageId}/meta-tags`);
    const pageMeta = res.data;
    console.log(pageMeta);
    if (!pageMeta || pageMeta.length === 0) return;

    const otherMeta = [];

    pageMeta.forEach(tag => {
      if (tag.meta_name.toLowerCase() === "title") {
        titleTag.value = tag.meta_value;
      } else {
        otherMeta.push({
          name: tag.meta_name,
          content: tag.meta_value
        });
      }
    });

    metaTagsRaw.value = otherMeta;

    // **Manually unwrap array for useHead**
    useHead({
      title: titleTag.value,
      meta: metaTagsRaw.value.map(tag => ({
        name: tag.name,
        content: tag.content
      }))
    });

  } catch (err) {
    console.error("Error fetching page meta tags:", err);
  }
});
</script>
