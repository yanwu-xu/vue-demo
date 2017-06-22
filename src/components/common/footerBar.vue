<template>
    <div>
        <div class="footer_bar">
            <ul>
                <li><router-link class="router-link" to="/login">a</router-link></li>
                <li><router-link class="router-link" to="/b/c">b</router-link></li>
                <li><router-link class="router-link" to="/b/c">c</router-link></li>
                <li><router-link class="router-link" to="/b/d">d</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>
<!--当 <style> 标签有 scoped 属性的时候，它的 CSS 就只能作用于当前的组件-->
<style>
    @import "../../css/footer.css";
</style>