<script>
import { ref, watch } from 'vue';
import {useRoute} from "vue-router"
export default {
  setup() {
    // router-link選取，透過 route.path 判段增加 active 樣式
    const routerArr =['','about','Courses']; // 預存路徑
    const route = useRoute();
    const idx =ref(0);
    watch(()=> route.path, ()=>{
    // console.log("route.path=> ",route.path);
      routerArr.forEach((item,index)=>{
        // 去掉第一個字元
        const rp = route.path.substr(1).split('/')[0];
        //console.log('rp=> ', rp);
        if(rp === item){
        // console.log(index);
          idx.value= index;
        }
      })
    })

    return {idx};
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/" :class="{active:idx===0}"> Home </router-link>
    |
    <router-link to="/about" :class="{active:idx===1}"> About </router-link>
    |
    <router-link to="/Courses" :class="{active:idx===2}"> Courses </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.active {
      color: #42b983;
    }
  }
  // .router-link-active{
  //   color: red;
  // }
}
</style>
