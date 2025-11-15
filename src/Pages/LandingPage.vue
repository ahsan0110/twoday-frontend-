<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import LeveraGing from '@/components/LeveraGing.vue'
import LastingImpact from '@/components/LastingImpact.vue'
import FrankComponent from '@/components/FrankComponent.vue'
import LatestNews from '@/components/LatestNews.vue'
import FormComponent from '@/components/FormComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
    name: 'ServicePage',
    components: {
        NavbarComponent,
        HeroSection,
        LeveraGing,
        LastingImpact,
        FrankComponent,
        LatestNews,
        FormComponent,
        FooterComponent,
    }
}
</script>

<template>
    <h1>Landing Page</h1>
    <NavbarComponent />
    <HeroSection />
    <LeveraGing />
    <LastingImpact />
    <FrankComponent />
    <LatestNews />
    <FormComponent />
    <FooterComponent />
</template>