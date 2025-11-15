<template>
    <NavbarComponent/>
    <FormComponent
        formSectionClass="contact-form"
        formTextClass="contact-text"
        mainText="Get in Touch"
        mainPara="Want to get in touch? Fill out the form and we'll contact you"
    />
    <FooterComponent/>

</template>
<script>
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
import FormComponent from '@/components/FormComponent.vue';
    export default{
        name:'ContactPage',
        components:{
            NavbarComponent,
            FooterComponent,
            FormComponent,
        }
    }
</script>