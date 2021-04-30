
<script>
import TitleBar from "@/components/TitleBar.vue"
import ListItem from "@/components/ListItem.vue"
import EmitTest from "@/components/EmitTest.vue"
import TimerBox from "@/components/TimerBox.vue"
import { ref } from 'vue';
export default {
  components:{ TitleBar,  ListItem,  EmitTest,  TimerBox },
  setup(){    
    //共用參數建議放在父層上，傳於子層時較方便。
    const isOpen = ref(true);
    const handOpenClass = () => {
        isOpen.value = !isOpen.value;
        console.log(isOpen.value);
      };

    const handCallBackFn = (num)=>{ console.log("app=>", num) };
    const handTimeOut =(num)=>{ console.log("time is over", num.value); };
    return{
      isOpen,handOpenClass,handCallBackFn,handTimeOut
    }
  }
}
</script>
<template>
 <TitleBar :handOpenClass="handOpenClass" />
 <ListItem :isOpen="isOpen" />
 <EmitTest @CallBack="handCallBackFn" />
 <!-- 從子層接 -->
 <TimerBox @TimeOut="handTimeOut" /> 
</template>

<style lang="scss">
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      html,
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: slategray;
      }
      #app {
        width: 400px;
        overflow: hidden;
        border: 1px solid #42b983;
        border-radius: 10px;
      }
</style>
