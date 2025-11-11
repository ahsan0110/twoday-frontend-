<template>
  <NavbarComponent />
  <HeroSection />
  <LeveraGing />
</template>

<script>

import NavbarComponent from './components/NavbarComponent.vue';
import HeroSection from './components/HeroSection.vue';
import LeveraGing from './components/LeveraGing.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    HeroSection,
    LeveraGing
  }
}
</script>

<style></style>
