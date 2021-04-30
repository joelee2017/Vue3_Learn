<script>
import { onMounted, ref } from 'vue'
export default {
    setup(){
        const num =ref(5);

        onMounted(()=>{
            setInterval(()=>{
                num.value--;
            },1000)
        })
        return{
            num
        }
    }
}
</script>
<template>
  <h1>{{num}}</h1>
</template>
<style scoped>
h1{
    color: white;
    font-size: 50px;
    position: fixed;
    top: 50px;
    left: 50px;
}
</style>