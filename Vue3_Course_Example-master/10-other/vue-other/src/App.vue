<script setup>
// script 加上  setup可省略過去的 setup()模式
import { ref } from "vue";
const colorRed =ref("#ff0000");
// 沒有在模版上使用的變數，就不會在丟到 template 上
 let timer = null;
 const name = ref("joe");
 const handName = ()=>{
   name.value = 'joe2';
   // 事件切換css
   colorRed.value = "#0000ff";
 }
</script>
<template>
  <h1 class="title">{{ name }}</h1>
  <button @click="handName">add</button>
</template>

<style lang="scss">
.title {
  font-size: 30px;
  // color: red;
  // css 也能使用變數 v-bind
  color:v-bind(colorRed);
}
</style>
