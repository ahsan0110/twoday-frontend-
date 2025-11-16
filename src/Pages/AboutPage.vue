<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import FormComponent from '@/components/FormComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CounterNumber from '@/components/CounterNumber.vue';
import LatestNews from '@/components/LatestNews.vue';
import LastingImpact from '@/components/LastingImpact.vue';

export default {

    name: 'AboutPage',

    data() {
        return {
            data: [
                {
                    type: "image",
                    src: "government.png",
                    text: "Together with Päijät-Häme Welfare Region, we’re using AI to make everyday life simpler.",
                    cta: "Read More",
                    link: "/extra"
                },
                {
                    type: "image",
                    src: "walking.png",
                    text: "ISS saves hundreds of hours of working time by modernizing its data platform and customer reporting.",
                    cta: "Read More",
                    link: "/extra"
                },
                {
                    type: "image",
                    src: "cat.jpeg",
                    text: "A future-proof platform that brings systems together, simplifies daily work, and helps our client move faster. Because real progress starts with a solid digital foundation.",
                    cta: "Read More",
                    link: "/extra"
                }
            ]
        }
    },
    components: {
        NavbarComponent,
        FooterComponent,
        HeroSection,
        FormComponent,
        CounterNumber,
        LatestNews,
        LastingImpact,
    }
}
</script>

<template>

    <NavbarComponent />
    <HeroSection heroClass="about-hero-content" smallText="ABOUT US"
        largeText="We create a better tomorrow<br>through AI and technology" videoSrc="women.mp4" ctaText="Get in Touch"
        ctaLink="#form-section-id" />
    <CounterNumber />
    <LatestNews
        newsSectionClass="about-news-section"
    />

    <LastingImpact
        mainText="Our values show in everything we do"
        :items="data"
    />

    <FormComponent mainText="Get to know us" />
    <FooterComponent />

</template>