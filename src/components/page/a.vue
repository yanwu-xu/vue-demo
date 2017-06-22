<template>
    <div class="a">
        <span>aaaaa</span>
        <router-link class="router-link" to="/b/c">跳转b</router-link>
        <router-link class="router-link" to="/b/c">跳转c</router-link>
        <router-link class="router-link" to="/b/d">跳转d</router-link>
        <div class="color-a" @click="getttt()">{{ a }}</div>
        <div class="table" v-for="(item, index) in arr">
            <span>{{ index + 1 }}</span>
            <span v-if="item.a">{{ item.a }}</span>
            <span v-else-if="item.a===0">bbb</span>
            <span v-else>ccc</span>
            <span>{{ item.b }}</span>
        </div>

        <div>
            <input type="text" v-model="obj.a">
            {{ obj.a }}
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
                a: 1,
                arr: [
                    {a: null, b: 2},
                    {a: 3, b: 34},
                    {a: 5, b: 576},
                    {a: 0, b: 78}
                ],
                obj: {a: '111'}
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
    .a{
        background: #b0ffad;
    }
    .router-link{
        display: block;
        color: #ff4564;
    }
    .color-a{
        border: 1px solid yellow;
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
</style>