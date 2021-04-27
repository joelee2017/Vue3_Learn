
<script>
import PropsTest from"@/components/PropsTest.vue"
import { reactive, ref } from 'vue'
export default {
  components:{
    PropsTest,
  },
  setup(){
    //不同型別傳值
    const str =ref("hello joe!!");
    const bool =ref(true)
    const num =ref(0)
    const arr = reactive([])
    const obj = reactive([])
    const handclickfn = ()=>{

    }
    return{
      str,
      bool,
      num,
      arr,
      obj,
      handclickfn
    }
  }
}
</script>
<template>
<!-- 自訂義屬性名稱：msg ，txt沒用bind方式只能寫字串，而且不能用動態方式 -->
  <PropsTest  txt="123456abcd"
    :str="str"
    :bool="bool"
    :num="num"
    :arr="arr"
    :obj="obj"
    :handclickfn="handclickfn"
   />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
