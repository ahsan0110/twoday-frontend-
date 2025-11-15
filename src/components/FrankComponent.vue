<template>
  <div class="frank-section">

    <!-- Career / Impact Section -->
    <div class="last-impact">
      <div class="last-impact-left">
        <p id="lasting-impact">Tomorrow is built by the people who engineer it </p>
      </div>
      <div class="last-impact-right right-side-div">
        <p id="lasting-impact-para">At Twoday, growth isn’t a perk. It’s the point. Join us and build a career that keeps moving forward.</p>
        <a class="dream-job-a" href="/career">Find your dream job</a>
      </div>
    </div>

    <!-- Frank / Expert Section -->
    <div class="frank-div">
      <div class="frank-info">
        <p class="small-text">{{ expertTag }}</p>
        <h1 :class="['video-text-large', frankTextClass]" v-html="expertNameRole"></h1>
        <a :href="expertLink" class="staff-link">{{ expertCTA }}</a>

        <div class="arrow-links">
          <a class="black-link" href="prevLink">◀</a>
          <a class="black-link" href="nextLink">▶</a>
        </div>
      </div>

      <span class="vertical-line"></span>

      <div class="frank-shakal">
        <q class="quoto">{{ quote }}</q>
        <img class="uncle" :src="imageSrc" :alt="expertNameAlt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrankComponent",
  props: {
      
    frankTextClass: { type: String, default: "text-large" },
    expertTag: { type: String, default: "Meet our experts" },
    expertNameRole: { type: String, default: "Meet Frank,<br>Enterprise <br>Architect" }, 
    expertCTA: { type: String, default: "Meet Frank" },
    expertLink: { type: String, default: "#" },
    quote: { type: String, default: "I wanted to make technology matter — not just for systems, but for people" },
    imageSrc: { type: String, default: "uncle.png" },
    expertNameAlt: { type: String, default: "frank" },
  }
};
</script>
