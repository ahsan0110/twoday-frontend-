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

const page = ref(null);

// Dummy data for LastingImpact section
const data = [
  { type: "image", src: "government.png", text: "Together with Päijät-Häme Welfare Region, we’re using AI to make everyday life simpler.", cta: "Read More", link: "/extra" },
  { type: "image", src: "walking.png", text: "ISS saves hundreds of hours of working time by modernizing its data platform and customer reporting.", cta: "Read More", link: "/extra" },
  { type: "image", src: "cat.jpeg", text: "A future-proof platform that brings systems together, simplifies daily work, and helps our client move faster.", cta: "Read More", link: "/extra" },
];

onMounted(async () => {
  try {
    const pageId = 3; // About page
    const res = await apiClient.get(`/pages/${pageId}/meta-tags`);
    page.value = res.data;

    if (!page.value || page.value.length === 0) {
      console.warn("No meta tags found for this page");
      return;
    }

    // Separate title from other meta tags
    let titleTag = "About Us";
    const metaTags = [];

    page.value.forEach(tag => {
      if (tag.meta_name.toLowerCase() === 'title') {
        titleTag = tag.meta_value;
      } else {
        metaTags.push({
          name: tag.meta_name,
          content: tag.meta_value
        });
      }
    });

    // Inject title + all meta tags into head
    useHead({
      title: titleTag,
      meta: metaTags
    });

    console.log("Meta tags loaded:", metaTags);

  } catch (err) {
    console.error("Error fetching page meta tags:", err);
  }
});
</script>
