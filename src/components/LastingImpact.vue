<template>
    <div class="last-impact">
        <div class="last-impact-left">
            <p id="lasting-impact">Lasting impact</p>
        </div>
        <div class="last-impact-right">
            <p id="lasting-impact-para">
                Every day, we apply AI and advanced engineering to solve what matters. Building solutions that improve
                lives
                across both public and private sectors.</p>
        </div>
    </div>

    <section class="last-impact-section">
        <div class="blur-impact">
            <img src="ultrasound.png" alt="" width="33%">
        </div>
        <div class="blur-impact">
            <img src="blurImage1.png" alt="" width="33%">
        </div>
        <div class="blur-impact">
            <video autoplay muted loop playsinline class="blur-video" width="33%">
                <source src="water.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

    </section>
</template>

<script>
export default {
    name: "LastingImpact",
};
</script>