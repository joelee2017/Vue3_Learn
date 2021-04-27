
<script>
import TitleBar from "@/components/TitleBar.vue"
import ListItem from "@/components/ListItem.vue"
export default {
  components:{
    TitleBar,
    ListItem
  },
  setup(){    
    return{
      TitleBar,
      ListItem
    }
  }
}
</script>
<template>
 <TitleBar/>
 <ListItem/>
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
