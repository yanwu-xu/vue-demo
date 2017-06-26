<template>
    <div>
        <span>aaaaa</span>

        <div class="router">
            <router-link class="router-link" to="/b/c">跳转b</router-link>
            <router-link class="router-link" to="/b/c">跳转c</router-link>
            <router-link class="router-link" to="/b/d">跳转d</router-link>
        </div>

        <div class="color-a" @click="getttt()">{{ a }}</div>

        <div class="tab-out">
            <div class="table" v-for="(item, index) in arr">
                <span>{{ index + 1 }}</span>
                <span v-if="item.a">{{ item.a }}</span>
                <span v-else-if="item.a===0">bbb</span>
                <span v-else>ccc</span>
                <span>{{ item.b }}</span>
            </div>
        </div>

        <div class="tab-out">
            <div class="table" v-for="(value, key, index) in obj">
                <span>{{ index + 1 }}</span>
                <span>{{ key }}</span>
                <span>{{ value }}</span>
            </div>
        </div>

        <div class="input">
            <input type="text" v-model.trim.lazy.number="obj.a">
            {{ obj.a }}
        </div>

        <div class="radio">
            <span v-for="(item, index) in radio">
                <input :id="item.key" type="radio" name="radio" :value="item.value.a" v-model="radioVal">
                <label :for="item.key">{{ item.key }}</label>
            </span>
            <div v-if="radioVal">radioVal: {{ radioVal }}</div>
        </div>

        <div class="checkbox">
            <span v-for="(item, index) in radio">
                <input type="checkbox" :id="item.value.a" name="checkbox" :value="item.value.a" v-model="checkboxVal">
                <label :for="item.value.a">{{ item.key }}</label>
            </span>
            <div v-if="checkboxVal.length">checkboxVal: {{ checkboxVal }}</div>
        </div>

        <div class="select">
            <select name="select" id="select" v-model="selectVal">
                <option v-for="(item, index) in radio" :value="item.value.a">{{ item.key }}</option>
            </select>
            <div v-if="selectVal">selectVal: {{ selectVal }}</div>
        </div>
    </div>
</template>



<script>
    /*import sample from './a'
    export default {
        ...sample
    }*/

    export default {
        data: function(){
            return{
                radioVal: '',
                checkboxVal: [],
                selectVal: '',
                a: 1,
                arr: [
                    {a: null, b: 2},
                    {a: 3, b: 34},
                    {a: 5, b: 576},
                    {a: 0, b: 78}
                ],
                obj: {
                    a: '111',
                    b: '222',
                    c: '333',
                    d: '444'
                },
                radio: [
                    {key: 'aaa', value: {a: 'a', b: 'b'}},
                    {key: 'bbb', value: {a: 'c', b: 'd'}},
                    {key: 'ccc', value: {a: 'e', b: 'f'}},
                    {key: 'ddd', value: {a: 'g', b: 'h'}}
                ]
            }
        },
        methods: {
            getttt: function(){             //因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同， this.fetchTodos 的行为未定义。
                const self = this
                self.a++
                console.log(this.a)
            }
        },
        beforeRouteEnter(to, from, next){       //组件的路由钩子
            next(vm=>{
                vm.getttt();
            })
        }
    }
</script>

<!--scoped只对当前组件有效-->
<style scoped>
    .router-link{
        display: block;
        color: #ff4564;
    }
    .color-a{
        margin-top: 10px;
        border: 1px solid #40a6ff;
    }
    .tab-out{
        border: 1px solid #40a6ff;
        margin-top: 10px;
    }
    .table{
        overflow: hidden;
    }
    .table > span{
        margin-left: 20px;
        width: 50px;
        display: block;
        float: left;
    }
    .router{
        border: 1px solid #40a6ff;
        height:100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .input{
        margin-top: 10px;
        border: 1px solid #40a6ff;
    }
    .input input{
        width: 100px;
        height: 30px;
        border: 1px solid #ff4564;
        outline: none;
        border-radius: 5px;
    }
    .radio{
        border: 1px solid #40a6ff;
    }
    .radio span{
        margin-right: 15px;
    }
    input[type="radio"]{
        border: 1px solid red;
        outline: none;
        background: #fff;
    }
</style>