<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroSection from '@/components/HeroSection.vue';

export default {
    name: 'ServicePage',
    components: {
        NavbarComponent,
        HeroSection,
    }
}
</script>

<template>
    <NavbarComponent />
    <HeroSection 
    smallText="OUR SERVICES" 
    largeText="Anyone can talk about the future.<br>We engineer it." 
    ctaText="Get in Touch"
    videoSrc=""
    heroClass="service-hero"
    />


</template>