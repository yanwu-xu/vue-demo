<template>
    <div class="login">

        <form @submit.prevent="login('form-1')" data-vv-scope="form-1">
            <p :class="{'input-p':true, 'error-p':errors.has('form-1.phone')}">
                <label class="input-label">手机号</label>
                <input class="input-inp" type="number" name="phone" data-vv-as="手机号" v-model="loginform.phone" v-validate="'required|mobile'" placeholder="请输入手机号" @focus="errors.remove('phone', 'form-1')">
                <p class="error" v-show="errors.has('form-1.phone')">{{ errors.first('form-1.phone') }}</p>
            </p>
            <p :class="{'input-p':true, 'error-p':errors.has('form-1.password')}">
                <label class="input-label">登录密码</label>
                <input class="input-inp" type="password" name="password" data-vv-as="密码" v-validate="'required|min:6'" v-model="loginform.password" placeholder="请输入密码" @focus="errors.remove('password', 'form-1')">
                <p class="error" v-show="errors.has('form-1.password')">{{ errors.first('form-1.password') }}</p>
            </p>
            <button name="button" type="submit" class="login-btn">登   录</button>
        </form>
        <button class="login-btn" @click="bbb()">aaaa</button>
        <!--<router-link class="login-btn" to="/readme">to readme page</router-link>-->
    </div>
</template>

<script>
    document.title = '登录'

    export default {
        data: function() {
            return{
                loginform: {
                    phone: '',
                    password: ''
                }
            }
        },
        methods: {
            login(scope) {
                let self = this
                self.$validator.validateAll(scope).then((result) => {
                    if(result){
                        self.$axios.post(
                            '/account/user/login',
                            'phone=' + self.loginform.phone + '&password=' + self.loginform.password
                        ).then((res) => {
                            console.log('登录成功')
                            self.$router.push('/readme')
                        }, () => {
                            console.log('登录失败')
                        })
                    }
                })
            },
            bbb() {
                console.log(this.$store.state.count)
                console.log(this.$store.state.a)
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
        text-align: center;
    }
    .error{
        color: #ee4919;
        font-size: 14px;
        margin-left: px2rem(30);
        margin-top: 5px;
    }
    .error-p{
        border: 1px solid #ee4919;
    }
</style>
