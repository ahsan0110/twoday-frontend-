<template>
    <NavbarComponent />
    <FormComponent formSectionClass="contact-form" formTextClass="contact-text" mainText="Get in Touch"
        mainPara="Want to get in touch? Fill out the form and we'll contact you" />
    <FooterComponent />

</template>
<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FormComponent from '@/components/FormComponent.vue';
import { useHead } from '@vueuse/head';


export default {

    setup() {
        useHead({
            title: `Contact Us`,
            meta: [
                {
                    name:`description`,
                    content:`This is Contact Page`,
                }
            ],
        })
    },

    name: 'ContactPage',
    components: {
        NavbarComponent,
        FooterComponent,
        FormComponent,
    }
}
</script>