<template>
    <div class="login">
        <form @submit.prevent="login('form-1')" data-vv-scope="form-1">
            <div :class="{'input-p':true, 'error-p':errors.has('form-1.phone')}">
                <label class="input-label">手机号</label>
                <input class="input-inp"
                       type="number"
                       name="phone"
                       data-vv-as="手机号"
                       v-model="loginform.phone"
                       v-validate="'required|mobile'"
                       placeholder="请输入手机号"
                       @focus="errors.remove('phone', 'form-1')">
                <p class="error" v-show="errors.firstByRule('phone', 'required', 'form-1')">{{ errors.firstByRule('phone', 'required', 'form-1') }}</p>
                <p class="error" v-show="errors.firstByRule('phone', 'mobile', 'form-1')">请输入正确手机号！</p>
            </div>
            <div :class="{'input-p':true, 'error-p':errors.has('form-1.password')}">
                <label class="input-label">登录密码</label>
                <input class="input-inp"
                       type="password"
                       name="password"
                       data-vv-as="密码"
                       v-validate="'required|min:6'"
                       v-model="loginform.password"
                       placeholder="请输入密码"
                       @focus="errors.remove('password', 'form-1')">
                <p class="error" v-show="errors.has('form-1.password')">{{ errors.first('form-1.password') }}</p>
            </div>
            <button name="button" type="submit" class="login-btn">登   录</button>
        </form>
        <button class="login-btn" @click="bbb()"><span>{{ phone }}</span></button>
        <router-link class="login-btn" to="/readme">to readme page</router-link>
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
        computed: {
            phone () {
                return this.$store.state.phone
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
                this.$store.dispatch('actionA', '3434343434343').then(() => {
                    console.log(1212121212)             //用以处理异步操作
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../static/css/rem.scss";
    .input-p{
        margin-top: 20px;
        width: 580px;
        height: 50px;
        line-height: 50px;
        padding: 10px;
        border: 1px solid #bebebe;/*no*/
        border-radius: 4px;/*no*/
        .input-label{
            float: left;
        }
        .input-inp{
            float: right;
            width: 400px;
            outline: none;
            border: none;
            height: 50px;
            font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
            font-size: 30px;/*px*/
        }
    }
    .login{
        background: #fff;
        padding: 50px 0;/*no*/
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .login-btn{
        width: 600px;
        height: 70px;
        line-height: 70px;
        font-size: 30px;/*px*/
        font-weight: 100;
        background: #f0b933;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 4px;/*no*/
        margin-top: 40px;
        text-align: center;
    }
    .error{
        color: #ee4919;
        font-size: 14px;/*px*/
        margin-left: 30px;
        margin-top: 5px;
    }
    .error-p{
        border: 1px solid #ee4919;/*no*/
    }
</style>
