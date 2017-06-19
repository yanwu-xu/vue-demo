<template>
    <div>
        <div>bbbbb</div>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vFooter from '../common/footerBar.vue'

    export default{
        components:{
            vFooter
        }
    }
</script>