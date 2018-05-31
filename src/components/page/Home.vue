<template>
    <div class="home">
        <router-view class="main-view"></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vFooter from '../common/footer.vue'

    export default {
        components:{
            vFooter
        },
        data: function() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../static/css/rem.scss";
    .main-view{
        padding-bottom: 130px;
    }
</style>
