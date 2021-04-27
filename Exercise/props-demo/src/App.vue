
<script>
import TitleBar from "@/components/TitleBar.vue"
import ListItem from "@/components/ListItem.vue"
import { ref } from 'vue';
export default {
  components:{
    TitleBar,
    ListItem
  },
  setup(){    
    //共用參數建議放在父層上，傳於子層時較方便。
     const isOpen = ref(true);
    const handOpenClass = () => {
        isOpen.value = !isOpen.value;
        console.log(isOpen.value);
      };
    return{
      isOpen,handOpenClass
    }
  }
}
</script>
<template>
 <TitleBar :handOpenClass="handOpenClass" />
 <ListItem :isOpen="isOpen" />
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
