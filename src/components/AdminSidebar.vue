<template>
    
    <aside class="sidebar">

        <!-- Logo / Heading -->
        <div class="sidebar-header">
            <i class="fa-solid fa-shield-halved logo-icon"></i>
            <h2>Admin Panel</h2>
        </div>

        <ul class="menu">

            <li :class="{ active: $route.name === 'AdminPages' }" @click="$router.push({ name: 'admin' })">
                <i class="fa-solid fa-file-lines"></i>
                <span>Pages</span>
            </li>

            <li :class="{ active: $route.name === 'AdminMetaTags' }" @click="$router.push({ name: 'AdminMetaTags' })">
                <i class="fa-solid fa-tags"></i>
                <span>Meta Tags</span>
            </li>

        </ul>

    </aside>
</template>

<style>
.sidebar {
    width: 240px;
    height: 100vh;
    padding: 20px;
    background: #111;
    color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
}

.sidebar-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 25px;
    border-bottom: 1px solid #333;
}

.logo-icon {
    font-size: 32px;
    color: #ff6600;
}

.menu {
    list-style: none;
    padding: 0;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.menu li {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 16px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s;
    color: #eaeaea;
}

.menu li i {
    font-size: 18px;
}

.menu li:hover {
    background: #222;
    color: #fff;
}

.menu li.active {
    background: #ff6600;
    color: #111;
    font-weight: 600;
}

.menu li.active i {
    color: #111;
}
</style>
