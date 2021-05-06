<script>
import { onMounted, ref } from 'vue'
export default {
    props:{},//父傳子使用
    emits:{//子傳父使用，可透過這樣的方式往上傳值
        CallBack:(num)=>{//驗證
            // console.log("num=> ", num)
            return num.value === 0;
        }
    }, 
    // 透過解構把 {emit}拿出來
    setup(props, {emit}){
        const num = ref(1);

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