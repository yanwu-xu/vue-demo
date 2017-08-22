<template>
    <div class="product-list" @click="toLink">
        <div class="pro-item" :class="{borderNone: proDetail.borderNone}">
            <div class="pro-icon">
                <img :src="proDetail.icon" alt="图标">
            </div>
            <div class="pro-div">
                <p class="name">{{ proDetail.title }}<span v-if="proDetail.badge" class="tip" :style="{color: proDetail.badgeClass, border: '1px solid ' + proDetail.badgeClass}">{{ proDetail.badge }}</span></p>
                <p class="desc">{{ proDetail.intro }}</p>
            </div>
            <div class="arrow-r">
                <img src="../../../static/img/home/arrow-r.png" alt="向右">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['proDetail'],
        methods: {
            toLink() {
                let self = this
                self.$router.push('/' + self.proDetail.sref)
            }
        }
    }


</script>

<style lang="scss" scoped>
    @import "../../../static/css/rem.scss";

    .product{
        .borderNone{
            border: none;
            margin-bottom: px2rem(20);
        }
    }
    .pro-item{
        border-bottom: 1px solid #cbcbcb;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: px2rem(12) 0;
    }
    .product-list{
        padding: 0 px2rem(28);
        background: #fff;
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
