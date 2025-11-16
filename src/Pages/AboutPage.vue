<script>
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import HeroSection from '@/components/HeroSection.vue'; 
    import FormComponent from '@/components/FormComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';

    export default{
        name:'AboutPage',
        components:{
            NavbarComponent,
            FooterComponent,
            HeroSection,
            FormComponent,
        }
    }
</script>

<template>
    
    <NavbarComponent/>
    <HeroSection
        heroClass="about-hero-content"
        smallText="ABOUT US"
        largeText="We create a better tomorrow<br>through AI and technology"
        videoSrc="women.mp4"
        ctaText="Get in Touch"
        ctaLink="#form-section-id"
    />

    <FormComponent
        mainText="Get to know us"
    />
    <FooterComponent/>

</template>