<template>
    <div>
        <div class="footer_bar">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>
<!--当 <style> 标签有 scoped 属性的时候，它的 CSS 就只能作用于当前的组件-->
<style scoped>
    .footer_bar{
        border-top: 1px solid red;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
    }
    .footer_bar > ul{
        background: #fff2ef;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 40px;
        align-items: center;
    }
    li{
        width: 20px;
        height: 20px;
        border: 1px solid red;
        line-height: 20px;
        text-align: center;
    }
</style>