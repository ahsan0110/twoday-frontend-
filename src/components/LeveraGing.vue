<template>
    <div :class="levClass">
        <h1 class="leverage-heading">{{ heading }}</h1>
        <h2>{{ subHeading }}</h2>
        <div class="lev-component">
            <div class="card" v-for="(item, index) in cards" :key="index">
                <span class="small-info">{{ item.number }}</span>
                <h1 class="card-label">{{ item.title }}</h1>
                <p class="card-para">{{ item.description }}</p>
                <a :href="item.ctaLink" >{{ item.ctaText }}</a>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "LeveraGing",
    props: {
        levClass:{ type:String,default:"lev-section"},
        heading: { type: String, default: "We help organizations apply and scale AI - grounded in strong data, cloud, and engineering" },
        subHeading: { type: String, default: "Learn how we create impactful solutions leveraging:" },
        cards: {
            type: Array,
            default: () => [
                {
                    number: "01",
                    title: "Data",
                    description: "We specialize in harnessing the power of data and artificial intelligence (AI) to drive businesses forward. Our data and AI services are designed to empower organizations with solutions that enhance decision-making and fuel business outcomes.",
                    ctaText: "Become data driven",
                    ctaLink: "/extra",
                },
                {
                    number: "02",
                    title: "Cloud",
                    description: "Our Cloud Platforms and Security experts help enterprises maximize return on their investments in Microsoft Systems Management and Cloud Platform Solutions.",
                    ctaText: "Explore cloud solutions",
                    ctaLink: "/extra",
                },
                {
                    number: "03",
                    title: "Engineering",
                    description: "At Twoday we drive digital transformation through custom software development, leveraging cloud services and application expertise. We utilize the latest technologies, to develop high-quality and scalable software solutions following industry best practices.",
                    ctaText: "Start building",
                    ctaLink: "/extra",
                },
                {
                    number: "04",
                    title: "Applications",
                    description: "Looking to elevate your business operations? Partner with us to implement business applications that not only reduce costs but also increase efficiency. With our solutions for sales, marketing, customer service, and more, we're dedicated to your success.",
                    ctaText: "Explore Applications",
                    ctaLink: "/extra",
                }
            ]
        }

    }
};
</script>