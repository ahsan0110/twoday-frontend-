<template>
  <nav class="navbar" :class="{ 'menu-open': isOpen }">
    <img v-on:click="landingpage" class="logo" src="twoday.svg" alt="Logo" />

    <!-- Navigation Links -->
    <div class="nav-links" :class="{ open: isOpen }">
      <a href="/services"><span class="nav-span" >• </span>Services</a>
      <a href="/career"><span class="nav-span" >• </span>Career</a>
      <a href="/about"><span class="nav-span" >• </span>About</a>
      <a href="/admin"><span class="nav-span" >• </span>Admin</a>

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
import { useRouter } from 'vue-router'

const isOpen = ref(false) 
const isMobile = ref(window.innerWidth < 1200)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const router = useRouter()

const landingpage = () => {
  router.push({ name: "LandingPage" })
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

