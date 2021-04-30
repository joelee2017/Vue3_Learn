<script>
export default {
    setup(){
        const handClickFn =(num,e)=>{ console.log('click=> ',num,e.target)}
        return{ handClickFn}
    }
}
</script>
<template>
<!-- click($event)可得到回傳資訊，並且做為參數永遠要放在最後一個 -->
  <a @click="handClickFn(100,$event)" href="javascript:;">click</a>
</template>
<style scoped>
a{
    font-size: 50px;
    color: #fff;
}
</style>