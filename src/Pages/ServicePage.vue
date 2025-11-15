<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import LeveraGing from '@/components/LeveraGing.vue';
// import LastingImpact from '@/components/LastingImpact.vue'
import FrankComponent from '@/components/FrankComponent.vue'
// import LatestNews from '@/components/LatestNews.vue'
// import FormComponent from '@/components/FormComponent.vue'
// import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name: 'ServicePage',
    components: {
        NavbarComponent,
        HeroSection,
        LeveraGing,
        // LastingImpact,
        FrankComponent,
        // LatestNews,
        // FormComponent,
        // FooterComponent,

    }
}
</script>

<template>
    <NavbarComponent />
    <HeroSection smallText="OUR SERVICES" largeText="Anyone can talk about the future.<br>We engineer it."
        ctaText="Get in Touch" videoSrc="" heroClass="service-hero" />
    <LeveraGing class="service-lev" heading="" subHeading="We apply AI to create impactful solutions in:" />
    <FrankComponent 
        rightPara="Every day, we apply AI and engineering to solve what matters. Building solutions that improve lives across both public and private sectors."
        expertTag="Customer Story"
        expertNameRole="Become Expert<br>with Spar Nord "
        expertCTA="Read More"
        quote="To meet increasing demands for greater data compliance, speed, and quality, Danish bank Spar Nord made a strategic decision: to build its own data platform."
        imageSrc="Spar-Nord-Sign.png"
        frankTextClass="text-large-service"
        />
    

        <!-- 
        <LatestNews />
    <FormComponent />
    <FooterComponent /> -->


</template>