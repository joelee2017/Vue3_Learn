
<script>
import TitleBar from "@/components/TitleBar.vue"
import ListItem from "@/components/ListItem.vue"
import EmitTest from "@/components/EmitTest.vue"
import TimerBox from "@/components/TimerBox.vue"
import EventBack from "@/components/EventBack.vue"
import TemplateRefs from "@/components/TemplateRefs.vue"
import SlotsTitle from "@/components/SlotsTitle.vue";
import { ref } from 'vue';
export default {
  components:{ TitleBar,  ListItem,  EmitTest,  TimerBox, EventBack,TemplateRefs,SlotsTitle },
  setup(){    

    // const isAmin = ref(false);
    //共用參數建議放在父層上，傳於子層時較方便。
    const isOpen = ref(true);
    const handOpenClass = () => {
        isOpen.value = !isOpen.value;
        console.log(isOpen.value);
      };

    const handCallBackFn = (num)=>{ console.log("app=>", num) };
    const handTimeOut =(num)=>{ console.log("time is over", num.value); };

    // const handAminClick= ()=>{
    //   isAmin.value = !isAmin.value;
    // }
    return{
      isOpen,handOpenClass,handCallBackFn,handTimeOut
      // isAmin,handAminClick
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
 <EventBack />
<TemplateRefs />
 <!-- 命名用小寫駝峰能將html內容傳入子層slot中 嵌套compents -->
<slots-title>
  <div><a href="">JOE</a></div>
</slots-title>
<slots-title>JOE2</slots-title>
 <!-- <button @click="handAminClick">click</button>
   
    <div v-if="isAmin" id="box"></div>
  </transition> -->
</template>

<style lang="scss">
// .fade-enter-active{
//    animation: bounce-in 0.5s;
// }
// .fade-leave-active {
//   transition: opacity 0.5s ease;
//   // animation: bounce-in 0.5s reverse;
// }

// .fade-enter-from{
//   opacity: 0;
// }
// .fade-enter-to{
//   opacity: 1;
// }
// .fade-leave-from {
//   opacity: 1;
// } 
// .fade-leave-to {
//   opacity: 0;
// } 

// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(1.25);
//   }
//   100% {
//     transform: scale(1);
//   }
//}

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

      // #box{
      //   width: 100px;
      //   height: 100px;
      //   background-color: red;
      // }
</style>
