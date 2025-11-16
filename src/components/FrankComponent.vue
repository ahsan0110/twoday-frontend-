<template>
  <div id="expert-section" class="frank-section">

    <!-- Career / Impact Section -->
    <div class="last-impact">
      <div class="last-impact-left">
        <p id="lasting-impact">Tomorrow is built by the people who engineer it </p>
      </div>
      <div class="last-impact-right right-side-div">
        <p id="lasting-impact-para">
          At Twoday, growth isn’t a perk. It’s the point. Join us and build a career that keeps moving forward.
        </p>
        <a class="dream-job-a" href="/career">Find your dream job</a>
      </div>
    </div>

    <!-- Frank / Expert Section -->
    <div class="frank-div">
      <div class="frank-info">
        <p class="small-text">{{ currentExpert.expertTag }}</p>
        
        <!-- Transition for text -->
        <transition name="fade" mode="out-in">
          <h1 
            :key="currentExpert.expertNameRole" 
            :class="['video-text-large', frankTextClass]" 
            v-html="currentExpert.expertNameRole">
          </h1>
        </transition>
        
        <a  :href="currentExpert.expertLink" class="staff-link">{{ currentExpert.expertCTA }}</a>

        <div class="arrow-links">
          <button  class="black-link" @click="prevExpert">←</button>
          <button  class="black-link" @click="nextExpert">→</button>
        </div>
      </div>

      <span class="vertical-line"></span>

      <!-- Transition for quote and image -->
      <transition name="fade" mode="out-in">
        <div class="frank-shakal" :key="currentExpert.expertNameAlt">
          <q class="quoto">{{ currentExpert.quote }}</q>
          <img class="uncle" :src="currentExpert.imageSrc" :alt="currentExpert.expertNameAlt">
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  name: "FrankComponent",
  props: {
    frankTextClass: { type: String, default: "text-large" }
  },
  data() {
    return {
      currentIndex: 0,
      experts: [
        {
          expertTag: "Meet our experts",
          expertNameRole: "Meet Khubaib,<br>Smart Guy ",
          expertCTA: "Meet Khubaib",
          expertLink: "#",
          quote: "Asal Zindagi Aakhrat ki Zindagi ha, Dunya ki Dhoke yahi reh jane hain...",
          imageSrc: "Khubaib.png",
          expertNameAlt: "Khubaib"
        },
        {
          expertTag: "Meet our experts",
          expertNameRole: "Meet Frank,<br>AI & Architect",
          expertCTA: "Meet Frank",
          expertLink: "#",
          quote: "I wanted to make technology matter — not just for systems, but for people",
          imageSrc: "uncle.png",
          expertNameAlt: "frank"
        },
        {
          expertTag: "Meet our experts",
          expertNameRole: "Meet Auntie,<br>Product Designer",
          expertCTA: "Meet Auntie",
          expertLink: "#",
          quote: "Design is not just what it looks like, but how it works",
          imageSrc: "auntie.png",
          expertNameAlt: "Auntie"
        },
      ]
    };
  },
  computed: {
    currentExpert() {
      return this.experts[this.currentIndex];
    }
  },
  methods: {
    nextExpert() {
      this.currentIndex = (this.currentIndex + 1) % this.experts.length;
    },
    prevExpert() {
      this.currentIndex =
        (this.currentIndex - 1 + this.experts.length) % this.experts.length;
    }
  }
};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px); 
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}


.arrow-links button {
  background-color: #000;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.2s;
  padding: 18px;
}
.arrow-links button:hover {
  background-color: orange;
  color: #000;
  transform: scale(1.1);
}
.frank-shakal q{
    margin-bottom: 50px;
}
</style>
