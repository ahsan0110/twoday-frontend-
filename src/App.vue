<template>
  <NavbarComponent />
  <HeroSection />
  <LeveraGing />
  <LastingImpact />
  <FrankComponent />
  <LatestNews />
</template>

<script>

import NavbarComponent from './components/NavbarComponent.vue';
import HeroSection from './components/HeroSection.vue';
import LeveraGing from './components/LeveraGing.vue';
import LastingImpact from './components/LastingImpact.vue';
import FrankComponent from './components/FrankComponent.vue';
import LatestNews from './components/LatestNews.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    HeroSection,
    LeveraGing,
    LastingImpact,
    FrankComponent,
    LatestNews,
  }
}
</script>

<style></style>
