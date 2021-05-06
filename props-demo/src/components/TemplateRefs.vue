<script>
import { onMounted, ref } from 'vue'
export default {
    setup(){
       // const textInput = ref(null);
       const num = ref(123456789);
        onMounted(()=>{
            // 在vue中不推廌使用 document
            // document.getElementById('textBar').focus();
            // 建議改用ref 綁定
            // console.log("textInput=> ",textInput);
            // textInput.value.focus();
        })
        return{ 
            // textInput
            num
            } 
    }
}
</script>
<template>
  <input v-focus v-model="num" ref="textInput" id="textBar" type="text" placeholder="input text">
  <h1 v-price="num"></h1>
</template>
<style>
input{
    display: block;
    width: 100%;
    height: 30px;
    background-color: rgb(200, 219, 219);
    padding-left: 10px;
}
</style>