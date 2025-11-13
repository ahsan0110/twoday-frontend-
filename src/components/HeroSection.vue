<template>
    <section class="hero-section">
       
        <video autoplay muted loop playsinline class="hero-video">
            <source src="Hero-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        
        <div class="hero-content">
            <span class="video-text-small">WHAT WE DO</span>
            <h1 class="video-text-large">
                Applied AI.
                <br>
                Advanced engineering.
                <br>
                Lasting impact.
            </h1>
            <a class="staff-link" href="">Talk to an expert <img src="right-up.png" width="20px"> </a>
        </div>
    </section>
</template>

<script>
export default {
    name: "HeroSection",
};
</script>
