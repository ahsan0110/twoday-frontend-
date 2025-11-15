<template>
    <div class="open-positions-section">
        <div class="open-position-title">
            <h1>Open Positions</h1>
        </div>
        <div v-for="(detail, index) in details" :key="index" class="position-links">
            <router-link class="position-router-links" :to="{name:'ExtraInfo'}">
                <hr>

                <div class="single-position-link">
                    <div class="left-div">
                        <h1 class="detail-name">{{ detail.name }}</h1>
                        <p class="detail-country">{{ detail.country }}</p>
                    </div>
                    <div class="mid-div">
                        <h1 class="detail-description">{{ detail.description }}</h1>
                    </div>
                    <div class="right-div">
                        <p class="detail-major">{{ detail.major }}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OpenPositions',
    props: {
        details: {
            type: Array,
            default: () => [
                {
                    name: "Ahsan",
                    country: "Pakistan",
                    description: "Azure & Power Platform / Developer",
                    major: "Web Dev"
                },
                {
                    name: "Khubaib",
                    country: "Pakistan",
                    description: "Backend Developer",
                    major: "Web Dev"
                },
                {
                    name: "Aaniq",
                    country: "Pakistan",
                    description: "Frontend Developer",
                    major: "Web Dev"
                },
                {
                    name: "Ali",
                    country: "Pakistan",
                    description: "Solution Analyst",
                    major: "Data & AI"
                },
                {
                    name: "Shultan",
                    country: "Uganda",
                    description: "Body Builder",
                    major: "GYM"
                },
                {
                    name: "Amir",
                    country: "Nigeria",
                    description: "Gappe Marna",
                    major: "Melon Musk"
                },
            ],

        }
    },
}
</script>