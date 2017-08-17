<template>
    <div class="footer">
        <div v-for="(item, index) in footer" @click="changeIcon(index)">
            <router-link class="router-link" :to="item.href">
                <span ><img :src="'../../../static/img/home/icon-' + item.icon + item.active + '.png'" :alt="item.name"></span>
                <span class="name">{{ item.name }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        data: function() {
            return{
                footer: [
                    {
                        name: '首页',
                        icon: 'home',
                        active: '-normal',
                        href: 'readme'
                    },
                    {
                        name: '消费分期',
                        icon: 'repayment',
                        active: '-normal',
                        href: ''
                    },
                    {
                        name: '还款',
                        icon: 'deferred',
                        active: '-normal',
                        href: 'proDetail'
                    },
                    {
                        name: '我的',
                        icon: 'personal',
                        active: '-normal',
                        href: 'mine'
                    }
                ]
            }
        },
        created() {
            let self = this
            switch (self.$route.path){
                case '/readme':
                    self.footer[0].active = '-active'
                    break
                case '/proDetail':
                    self.footer[2].active = '-active'
                    break
                case '/mine':
                    self.footer[3].active = '-active'
                    break
                default:
                    break
            }
        },
        mounted() {
            for(let i = 0;i < $('.router-link').length; i++){
                if($('.router-link')[i] === $('.router-link-exact-active')[0]){
                    console.log($('.router-link')[i])
                }
            }
        },
        methods: {
            changeIcon(index) {
                let self = this

                self.footer.forEach((ele) => {
                    ele.active = '-normal'
                })
                if(index || index === 0) {
                    self.footer[index].active = '-active'
                    if(index === 1){
                        location.href = 'https://pw.360fengdai.com/#/download'
                    }
                }
            }
        },
        watch: {
            $route (to, from) {
                let self = this

                switch (self.$route.path){
                    case '/readme':
                        self.changeIcon()
                        self.footer[0].active = '-active'
                        break
                    case '/proDetail':
                        self.changeIcon()
                        self.footer[2].active = '-active'
                        break
                    case '/mine':
                        self.changeIcon()
                        self.footer[3].active = '-active'
                        break
                    default:
                        break
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../static/css/rem.scss";

    .footer{
        width: 100%;
        height: px2rem(120);
        border-top: 1px solid #dbdad7;
        position: fixed;
        bottom: 0;
        justify-content: space-around;
        background: #fff;
        display: flex;
        .router-link{
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: px2rem(20) 0;
        }
        img{
            width: px2rem(40);
        }
        .name{
            font-size: px2rem(25);
            color: #666
        }
    }
</style>
