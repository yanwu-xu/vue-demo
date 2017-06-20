<template>
    <div class="a">
        <span>aaaaa</span>
        <span v-for="i in 10">{{ i }}</span>
        <router-link class="router-link" to="/b">跳转b</router-link>
        <router-link class="router-link" to="/b/c">跳转c</router-link>
        <router-link class="router-link" to="/b/d">跳转d</router-link>
    </div>
</template>

<script>

</script>
<style>
    .a{
        background: #b0ffad;
    }
    .router-link{
        display: block;
        color: #ff4564;
    }
</style>