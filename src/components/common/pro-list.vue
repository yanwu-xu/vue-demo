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
            margin-bottom: 20px;
        }
    }
    .pro-item{
        border-bottom: 1px solid #cbcbcb;/*no*/
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 12px 0;
    }
    .product-list{
        padding: 0 20px;
        background: #fff;
        .pro-icon{
            width: 65px;
            height: 100px;
            display: flex;
            align-items: center;
            img{
                width: 60px;
            }
        }
        .arrow-r{
            width: 20px;
            height: 100px;
            display: flex;
            align-items: center;
            img{
                width: 20px;
            }
        }
        .pro-div{
            width: 470px;
            height:100px;
            line-height: 50px;
            .name{
                font-weight: 900;
                font-size: 27px;/*px*/
                color: #444;
            }
            .tip{
                padding: 8px 17px 2px;
                margin-left: 10px;
                border: 1px solid red;/*no*/
                font-size: 25px;/*px*/
                border-radius: 50px;
            }
            .desc{
                font-size: 23px;/*px*/
                color: #999;
            }
        }
    }
</style>
