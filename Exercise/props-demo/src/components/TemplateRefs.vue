<script>
import { onMounted, ref } from 'vue'
export default {
    setup(){
       // const textInput = ref(null);
        onMounted(()=>{
            // 在vue中不推廌使用 document
            // document.getElementById('textBar').focus();
            // 建議改用ref 綁定
            // console.log("textInput=> ",textInput);
            // textInput.value.focus();
        })
        return{ 
            // textInput 
            } 
    }
}
</script>
<template>
  <input v-focus ref="textInput" id="textBar" type="text" placeholder="input text">
  <h1 v-price="123456789"></h1>
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