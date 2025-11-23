<template>
    <div class="admin-header">
        <h1 class="header-title">Admin Dashboard</h1>

        <div class="head-icons">
            <i class="fa-solid fa-user-tie" @click="admin" ></i>
            <i class="fa-solid fa-download"></i>
            <i class="fa-solid fa-hammer"></i>
        </div>
    </div>

</template>

<script>
    export default{
        methods:{
            admin(){
                this.$router.push({name:'AdminPage'})
            }
        },
    }
</script>

<style>
.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-left: 260px;
    padding: 15px 35px;

    background: #ffffff;
    border-bottom: 2px solid #eee;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.header-title {
    font-size: 26px;
    font-weight: 700;
    color: #222;
}

/* ICONS */
.head-icons {
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 22px;
    color: #333;
}

.head-icons i {
    cursor: pointer;
    transition: 0.3s;
}

.head-icons i:hover {
    color: #ff6600;
    transform: scale(1.1);
}
</style>