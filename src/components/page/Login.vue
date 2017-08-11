<template>
    <div class="login">

            <form novalidate name="loginform">
                <p class="input-p">
                    <label class="input-label">手机号</label>
                    <input class="input-inp" type="text" name="phone" v-model="loginform.phone" v-validate="'required|min:6'" placeholder="请输入手机号">
                    <p v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
                </p>
                <p class="input-p">
                    <label class="input-label">登录密码</label>
                    <input class="input-inp" type="password" v-model="loginform.password" placeholder="请输入密码">
                </p>

                <button class="login-btn" @click="login('loginform')">登   录</button>
            </form>

        <!--<router-link class="login-btn" to="/readme">to readme1</router-link>-->
    </div>
</template>

<script>
    document.title = '登录'

    export default {
        data: function() {
            return{
                phone: '',
                loginform: {
                    phone: '',
                    password: ''
                },
                msg: '',
                rules: {
                    phone: { minlength: 11, maxlength: 11 }
                }
            }
        },
        methods: {
            login(loginform) {
                var self = this

                self.$axios.post(
                    '/account/user/login',
                    'phone=' + self.loginform.phone + '&password=' + self.loginform.password
                ).then((res) => {
                    alert('成功')
                    self.$router.push('/readme')
                }, () => {
                    alert('失败')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../static/css/rem.scss";
    .input-p{
        margin-top: px2rem(20);
        width: px2rem(580);
        height: px2rem(50);
        line-height: px2rem(50);
        padding: px2rem(10);
        border: 1px solid #bebebe;
        border-radius: 4px;
        .input-label{
            float: left;
        }
        .input-inp{
            float: right;
            width: px2rem(400);
            outline: none;
            border: none;
            height: px2rem(50);
            font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
            font-size: px2rem(30);
        }
    }
    .login{
        background: #fff;
        padding: px2rem(50) 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .login-btn{
        width: px2rem(602);
        height: px2rem(70);
        line-height: px2rem(70);
        font-size: px2rem(30);
        font-weight: 100;
        background: #f0b933;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 4px;
        margin-top: px2rem(40);
    }
</style>
