<template>
    <NavbarComponent />
    <MetaComponent />
    <FooterComponent />
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

import { useHead } from '@vueuse/head';
import MetaComponent from '@/components/AdminPage.vue';

export default {

    setup() {
        useHead({
            title: `Extra Page`,
            meta: [
                {
                    name: `description`,
                    content: `This is Extra Page`,
                }
            ],
        })
    },
    components: {
        NavbarComponent,
        FooterComponent,
        MetaComponent,
    }
}
</script>
<style scoped>
body {
    background-color: #646464;
}
</style>