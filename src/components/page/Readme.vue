<template>
    <div class="home">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiper" :key="item.id">
                    <a :href="item.hrefPath"><img class="swiper-img" :src="item.imagePath" :alt="item.altStatus"></a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="product">
            <pro-list v-for="(item, index) in productList" :proDetail="item" :key="item.icon"></pro-list>
        </div>
        <!--v-for组件必须加 key-->
    </div>
</template>

<script>
    document.title = '首页'

    import swiper from 'swiper'
    import proList from '../common/pro-list.vue'

    export default {
        data: function() {
            return{
                swiper: [],
                productList: [
                    {
                        title: '薪e贷',
                        icon: '../../../static/img/home/xed.png',
                        intro: '简单快速借得到，最高10万额度即时取现',
                        badge: '',
                        sref: 'mine',
                        badgeClass: '',
                        borderNone: true
                    }, {
                        title: '电商通',
                        icon: '../../../static/img/home/dst.png',
                        intro: '网店数据授信，最高100万额度',
                        badge: '快速放款',
                        sref: 'proDetail',
                        badgeClass: '#27dd38'
                    }, {
                        title: '企业通',
                        icon: '../../../static/img/home/qyt.png',
                        intro: '银行流水授信，最高100万额度',
                        badge: '',
                        sref: 'mine',
                        badgeClass: []
                    }, {
                        title: '物流通',
                        icon: '../../../static/img/home/wlt.png',
                        intro: '物流数据授信，最高100万额度',
                        badge: 'T+1到账',
                        sref: 'proDetail',
                        badgeClass: '#624ddd'
                    }, {
                        title: '烟草通',
                        icon: '../../../static/img/home/yct.png',
                        intro: '烟草数据授信，最高50万额度',
                        badge: '',
                        sref: 'proDetail',
                        badgeClass: [],
                        borderNone: true
                    }
                ]
            }
        },
        components:{
            proList
        },
        beforeCreate() {
            let self = this
            self.$axios.get(
                '/OperationWeb/ad/select_adc/' + 'FDWXBAN0001'
            ).then((data) => {
                self.swiper = data.data.list
                setTimeout(() => {
                    const mySwiper = new Swiper('.swiper-container', {
                        autoplay: 1000,
                        loop: true,
                        pagination: '.swiper-pagination',
                        autoplayDisableOnInteraction: false
                    })
                },1)
            }, () => {

            })
        }
    }


</script>

<style lang="scss" scoped>
    @import "../../../static/css/rem.scss";
    @import "../../../node_modules/swiper/dist/css/swiper.min.css";

    .swiper-container, .swiper-img{
        width: 100%;
        height: 350px;
    }
    .product{
        margin-top: 20px;
    }
</style>
