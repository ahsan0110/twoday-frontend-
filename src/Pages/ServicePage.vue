<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import LeveraGing from '@/components/LeveraGing.vue';
import LastingImpact from '@/components/LastingImpact.vue'
import FrankComponent from '@/components/FrankComponent.vue'
// import LatestNews from '@/components/LatestNews.vue'
import FormComponent from '@/components/FormComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    data() {
        return {
            impactData: [
                {
                    type: "image",
                    src: "hands.png",
                    text: "From digital health solutions to research data platforms, we connect innovation with care. We help healthcare providers, pharma, and life science organizations improve patient outcomes and accelerate discovery - securely and responsibly.",
                    cta: "Discover More",
                    link: "#"
                },
                {
                    type: "image",
                    src: "industrials.png",
                    text: "We bring intelligence to production, operations, and supply chains. From predictive maintenance to smart factories, we help manufacturers boost efficiency, reduce downtime, and turn complexity into clarity.",
                    cta: "Discover More",
                    link: "#"
                },
                {
                    type: "image",
                    src: "energy.png",
                    text: "We enable smarter, more sustainable systems - from energy optimization to reliable grid operations. Our solutions support utilities in balancing demand, improving resilience, and driving the green transition.",
                    cta: "Discover More",
                    link: "#"
                }
            ]
        }
    },
    name: 'ServicePage',
    components: {
        NavbarComponent,
        HeroSection,
        LeveraGing,
        LastingImpact,
        FrankComponent,
        // LatestNews,
        FormComponent,
        FooterComponent,

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
        expertTag="Customer Story" expertNameRole="Become Expert<br>with Spar Nord " expertCTA="Read More"
        quote="To meet increasing demands for greater data compliance, speed, and quality, Danish bank Spar Nord made a strategic decision: to build its own data platform."
        imageSrc="Spar-Nord-Sign.png" frankTextClass="text-large-service" />

    <LastingImpact :items="impactData" />

    <FormComponent formTextClass="mainText-services" formParaClass="form-para-services" mainText="Unlock the power of data. Turn decisions into growth."
    formSectionClass="form-section-services"
        mainPara="Twoday is the defining force in applied AI and advanced engineering. With 3,000 experts in data, software, and cloud engineering, we cut through complexity, remove uncertainty, and prove the value of technology.

        We strengthen private and public organizations across industries like energy and utilities, industrials and manufacturing, health and life sciences, and government and more.

        From offices in Sweden, Denmark, Norway, Finland, and Lithuania, we combine local presence with scale that matters to deliver clarity and results that last." />
    <FooterComponent />


    <!-- 
        <LatestNews />
    -->


</template>