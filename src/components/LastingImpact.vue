<script>
export default {
    name: "LastingImpact",
    props: {
        mainText: { type: String, default: "Lasting impact" },
        subText: { type: String, default: "Every day, we apply AI and advanced engineering to solve what matters. Building solutions that improve lives across both public and private sectors." },
        items: {
            type: Array,
            default: () => [
                {
                    type: "image",
                    src: "ultrasound.png",
                    text: "Together with Päijät-Häme Welfare Region, we’re using AI to make everyday life simpler for both residents and professionals — easing workloads, improving access to care, and shaping a smarter, more human welfare service.",
                    cta: "Read More",
                    link: "/extra"
                },
                {
                    type: "image",
                    src: "blurImage1.png",
                    text: "ISS saves hundreds of hours of working time by modernizing its data platform and customer reporting.",
                    cta: "Read More",
                    link: "/extra"
                },
                {
                    type: "video",
                    src: "water.mp4",
                    text: "A future-proof platform that brings systems together, simplifies daily work, and helps our client move faster. Because real progress starts with a solid digital foundation.",
                    cta: "Read More",
                    link: "/extra"
                }
            ]
        }
    }
};
</script>

<template>
    <div class="last-impact">
        <div class="last-impact-left">
            <p id="lasting-impact">{{ mainText }}</p>
        </div>
        <div class="last-impact-right">
            <p id="lasting-impact-para">{{ subText }}</p>
        </div>
    </div>

    <section class="last-impact-section">
        <div class="blur-impact" v-for="(item, index) in items" :key="index">
            <img v-if="item.type === 'image'" :src="item.src" :alt="item.alt || 'impact image'" />
            <video v-if="item.type === 'video'" autoplay muted loop playsinline class="blur-video">
                <source :src="item.src" type="video/mp4" />
            </video>

            <div class="impact-text">
                <p>{{ item.text }}</p>
                <a class="staff-link read-more" :href="item.link || '/extra'">
                    {{ item.cta || 'Read More' }}
                </a>
            </div>
        </div>
    </section>

</template>
