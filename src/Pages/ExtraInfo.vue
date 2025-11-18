<template>
    <NavbarComponent />
    <div class="extra-img" style="display: flex;
                                  align-items: center;
                                  justify-content: center;  
                                  height: 90vh;
                                  background-color: black;">
        <img src="cat.jpeg" alt="" width="500px">
    </div>
    <FooterComponent />
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

import { useHead } from '@vueuse/head';

export default {

    setup() {
        useHead({
            title: `Extra Page`,
            meta: [
                {
                    name:`description`,
                    content:`This is Extra Page`,
                }
            ],
        })
    },
    components: {
        NavbarComponent,
        FooterComponent,
    }
}
</script>
<style scoped>
body {
    background-color: #646464;
}
</style>