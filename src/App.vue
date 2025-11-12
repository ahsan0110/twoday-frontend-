<template>
  <NavbarComponent />
  <HeroSection />
  <LeveraGing />
  <LastingImpact />
</template>

<script>

import NavbarComponent from './components/NavbarComponent.vue';
import HeroSection from './components/HeroSection.vue';
import LeveraGing from './components/LeveraGing.vue';
import LastingImpact from './components/LastingImpact.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    HeroSection,
    LeveraGing,
    LastingImpact
  }
}
</script>

<style></style>
