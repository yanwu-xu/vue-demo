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
        <div class="aaa"></div><div class="aaa"></div><div class="aaa"></div><div class="aaa"></div>

        <div class="product">
            <div class="product-list borderNone">
                <div class="pro-icon">
                    <img src="../../../static/img/home/xed.png" alt="图标">
                </div>
                <div class="pro-div">
                    <p class="name">薪e贷</p>
                    <p class="desc">简单快速借得到，最高10万额度即时取现</p>
                </div>
                <div class="arrow-r">
                    <img src="../../../static/img/home/arrow-r.png" alt="向右">
                </div>
            </div>
        </div>

        <div class="product">
            <div class="product-list" :class="{borderNone: item.borderNone}" v-for="(item, index) in productList">
                <div class="pro-icon">
                    <img :src="item.icon" alt="图标">
                </div>
                <div class="pro-div">
                    <p class="name">{{ item.title }}<span v-if="item.badge" class="tip" :style="{color: item.badgeClass, border: '1px solid ' + item.badgeClass}">{{ item.badge }}</span></p>
                    <p class="desc">{{ item.intro }}</p>
                </div>
                <div class="arrow-r">
                    <img src="../../../static/img/home/arrow-r.png" alt="向右">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    document.title = '首页'
    import swiper from 'swiper'

    export default {
        data: function() {
            return{
                swiper: [],
                productList: [
                    {
                        title: '电商通',
                        icon: '../../../static/img/home/dst.png',
                        intro: '网店数据授信，最高100万额度',
                        badge: '快速放款',
                        sref: 'productIntr({codes: "FDDSD001"})',
                        badgeClass: '#27dd38'
                    }, {
                        title: '企业通',
                        icon: '../../../static/img/home/qyt.png',
                        intro: '银行流水授信，最高100万额度',
                        badge: '',
                        sref: 'productIntr({codes: "FDQYT001"})',
                        badgeClass: []
                    }, {
                        title: '物流通',
                        icon: '../../../static/img/home/wlt.png',
                        intro: '物流数据授信，最高100万额度',
                        badge: 'T+1到账',
                        sref: 'productIntr({codes: "FDWLD001"})',
                        badgeClass: '#624ddd'
                    }, {
                        title: '烟草通',
                        icon: '../../../static/img/home/yct.png',
                        intro: '烟草数据授信，最高50万额度',
                        badge: '',
                        sref: 'productIntr({codes: "FDYCD001"})',
                        badgeClass: [],
                        borderNone: true
                    }
                ]
            }
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
    .product{
        padding: 0 px2rem(16);
        margin-top: px2rem(20);
        background: #fff;
        .borderNone{
            border: none;
        }
    }
    .product-list{
        display: flex;
        padding: px2rem(12);
        justify-content: space-around;
        flex-wrap: wrap;
        border-bottom: 1px solid #cbcbcb;
        .pro-icon{
            width: px2rem(65);
            height: px2rem(100);
            display: flex;
            align-items: center;
            img{
                width: px2rem(60);
            }
        }
        .arrow-r{
            width: px2rem(20);
            height: px2rem(100);
            display: flex;
            align-items: center;
            img{
                width: px2rem(20);
            }
        }
        .pro-div{
            width: px2rem(450);
            height:px2rem(100);
            line-height: px2rem(50);
            .name{
                font-weight: 900;
                font-size: px2rem(27);
                color: #444;
            }
            .tip{
                padding: px2rem(8) px2rem(17) px2rem(2);
                margin-left: px2rem(10);
                border: 1px solid red;
                font-size: px2rem(25);
                border-radius: px2rem(50);
            }
            .desc{
                font-size: px2rem(23);
                color: #999;
            }
        }
    }
</style>
