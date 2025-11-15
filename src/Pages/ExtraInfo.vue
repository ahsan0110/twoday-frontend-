<template>
    <NavbarComponent/>
    <div class="extra-img" style="display: flex;
                                  align-items: center;
                                  justify-content: center;  
                                  height: 100vh;
                                  background-color: grey;">
        <img src="cat.jpeg" alt="" width="500px">
    </div>
</template>
<script>
    import NavbarComponent from '@/components/NavbarComponent.vue';
    export default{
        components:{
            NavbarComponent,
        }
    }
</script>