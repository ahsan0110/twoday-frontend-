<template>
    <section class="hero-section">

        <video v-if="videoSrc" autoplay muted loop playsinline class="hero-video">
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support the video tag.
        </video>


        <div :class="heroClass">
            <span class="video-text-small">{{ smallText }}</span>
            <h1 :style="{ color: bgcolor }" class="video-text-large" v-html="largeText"></h1>
            <a v-if="ctaText" class="staff-link" :href="ctaLink"> {{ ctaText }} </a>
        </div>
    </section>
</template>

<script>
export default {
    name: "HeroSection",

    props: {
        heroClass: { type: String, default: "hero-content" },
        smallText: { type: String, default: "WHAT WE DO" },
        largeText: { type: String, default: 'Applied AI.<br>Advanced engineering.<br>Lasting impact.' },
        videoSrc: { type: String, default: "Hero-Video.mp4" },
        ctaText: { type: String, default: "Talk to an expert" },
        ctaLink: { type: String, default: "#" },
        bgcolor:{ type: String, default: "#ffffff" }
    }
};
</script>
