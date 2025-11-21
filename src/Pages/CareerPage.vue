<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import LeveraGing from '@/components/LeveraGing.vue';
import FrankComponent from '@/components/FrankComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import OpenPositions from '@/components/OpenPositions.vue';

import { useHead } from '@vueuse/head';
import apiClient from '@/apiClient';


export default {

    data() {
        return {
            careerCard: [
                {
                    number: "01",
                    title: "Data",
                    description: "We welcome people from every background and value the unique perspectives they bring. Every day, we work to create an environment where colleagues feel safe, respected, and confident to be their authentic selves.",
                    ctaText: "Explore Culture",
                    ctaLink: "#culture"
                },
                {
                    number: "02",
                    title: "Growth",
                    description: "Growth at Twoday is based on skills, potential, and performance – never on bias or discrimination. From hiring to promotions, we’re committed to fairness and transparency in every decision.",
                    ctaText: "Explore Growth",
                    ctaLink: "#growth"
                },
                {
                    number: "03",
                    title: "Belonging",
                    description: "Belonging isn’t a benefit – it’s a shared responsibility. We celebrate differences, make sure everyone feels seen and heard, and create spaces where everyone is welcome.",
                    ctaText: "Explore Culture",
                    ctaLink: "#belonging"
                },
                {
                    number: "04",
                    title: "Healthcare & Life Science",
                    description: "Trust shapes how we work – not control. Here, you have the freedom to make decisions, take ownership, and define how you deliver results.",
                    ctaText: "Explore Health",
                    ctaLink: "#health"
                }
            ],

            page: null
        };
    },
    name: 'ServicePage',
    components: {
        NavbarComponent,
        HeroSection,
        LeveraGing,
        FrankComponent,
        OpenPositions,
        // LatestNews,
        FormComponent,
        FooterComponent,

    },
    async mounted() {
        try {
            const page_ID = 5;
            const res = await apiClient.get(`/pages/${page_ID}/meta-tags`);

            this.page = res.data;
            console.log(this.page);

            useHead({
                title:'Career'
            })
        } catch (err) {
            console.error('Error fetching tags:', err)
        }

    }

}
</script>

<template>
    <NavbarComponent />

    <HeroSection smallText="CAREERS" largeText="Tomorrow is built by the<br>people who engineer it"
        ctaText="Talk to an expert" ctaLink="#form-section-id" videoSrc="Industries-Hero.mp4" heroClass="career-hero" />
    <LeveraGing class="career-lev" heading="" subHeading="We build a workplace where people grow and    belong:"
        :cards="careerCard" />
    <OpenPositions />

    <FrankComponent expertTag="Meet Our People" expertNameRole="Meet Frank<br>AI & Engineering " expertCTA="Read More"
        quote="To meet increasing demands for greater data compliance, speed, and quality, Danish bank Spar Nord made a strategic decision: to build its own data platform."
        imageSrc="uncle.png" frankTextClass="text-large-service" />



    <FormComponent formTextClass="mainText-services" formParaClass="form-para-services" mainText="Say Something BIG..."
        formSectionClass="form-section-services"
        mainPara="Twoday is the defining force in applied AI and advanced engineering. With 3,000 experts in data, software, and cloud engineering, we cut through complexity, remove uncertainty, and prove the value of technology.

        We strengthen private and public organizations across industries like energy and utilities, industrials and manufacturing, health and life sciences, and government and more.

        From offices in Sweden, Denmark, Norway, Finland, and Lithuania, we combine local presence with scale that matters to deliver clarity and results that last." />

    <FooterComponent />



</template>