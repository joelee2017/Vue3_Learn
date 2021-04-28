<script>
import { onMounted, ref } from 'vue'
export default {
    // 透過解構把 {emit}拿出來
    setup(props, {emit}){
        const num = ref(0);

        onMounted(()=>{
            //  透過emit傳參數
            emit('CallBack', num);
            //console.log(context.emit)   
        });
        return{            
            num
        }
    }
}
</script>
<template>
  <h1>{{num}}</h1>
</template>
<style>

</style>