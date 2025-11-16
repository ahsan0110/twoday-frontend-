<template>
    <div ref="counterSection" class="stats-container">
        <div class="stat">
            <hr>
            <p class="label">PROFESSIONALS</p>
            <h1>{{ professionals }}</h1>
        </div>
        
        <div class="stat">
            <hr>
            <p class="label">DATA & AI EXPERTS</p>
            <h1>{{ aiExperts }}</h1>
        </div>
        
        <div class="stat">
            <hr>
            <p class="label">LOCATIONS</p>
            <h1>{{ locations }}</h1>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      professionals: 0,
      aiExperts: 0,
      locations: 0,
      animated: false,
    };
  },

  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.animated) {
        this.animated = true;
        this.startCounter("professionals", 3000);
        this.startCounter("aiExperts", 750);
        this.startCounter("locations", 25);
      }
    });

    observer.observe(this.$refs.counterSection);
  },

  methods: {
    startCounter(key, target) {
      let current = 0;
      const duration = 2000; 
      const steps = 60;
      const increment = target / steps;

      const interval = setInterval(() => {
        current += increment;

        if (current >= target) {
          this[key] = target + "+"; 
          clearInterval(interval);
        } else {
          this[key] = Math.floor(current);
        }
      }, duration / steps);
    },
  },
};
</script>
