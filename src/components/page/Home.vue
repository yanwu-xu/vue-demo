<template>
    <div class="home">
        <router-view></router-view>
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
    .home{

    }
</style>
