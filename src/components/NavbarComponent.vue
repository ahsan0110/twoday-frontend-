<template>
  <nav class="navbar" :class="{ 'menu-open': isOpen }">
    <img class="logo" src="twoday.svg" alt="Logo" />

    <!-- Navigation Links -->
    <div class="nav-links" :class="{ open: isOpen }">
      <a href="/services">Services</a>
      <a href="/career">Career</a>
      <a href="/about">About</a>

      <!-- Contact link (only visible in mobile menu) -->
      <a v-if="isMobile" href="/contact" id="contact-mobile">Contact us</a>
    </div>

    <!-- Desktop contact link -->
    <a v-if="!isMobile" id="contact" href="/contact">Contact us</a>

    <!-- Burger Icon -->
    <div class="burger" @click="toggleMenu">
      <div :class="{ active: isOpen }" class="burger-icon">
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isMobile = ref(window.innerWidth < 1200)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const updateScreenSize = () => {
  isMobile.value = window.innerWidth < 1200
  if (!isMobile.value) isOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>
