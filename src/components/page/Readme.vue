<template>
    <div class="home">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiper">
                    <a :href="item.hrefPath"><img class="swiper-img" :src="item.imagePath" :alt="item.altStatus"></a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div>
            <img src="../../../static/img/home/wlt.png" alt="图标">
        </div>
    </div>
</template>

<script>
    document.title = '首页'

    import swiper from 'swiper'

    export default {
        data: function() {
            return{
                swiper: []
            }
        },
        beforeCreate() {
            let self = this

            self.$axios.get(
                '/OperationWeb/ad/select_adc/' + 'FDWXBAN0001'
            ).then((data) => {
                self.swiper = data.data.list
                setTimeout(() => {
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay: 1000,
                        loop: true,
                        pagination: '.swiper-pagination',
                        autoplayDisableOnInteraction: false
                    })
                },1)
            }, () => {

            })

        },
        methods: {

        }
    }


</script>

<style lang="scss" scoped>
    @import "../../../static/css/rem.scss";
    @import "../../../node_modules/swiper/dist/css/swiper.min.css";
    .swiper-container, .swiper-img{
        width: 100%;
        height: px2rem(350);
    }

</style>
