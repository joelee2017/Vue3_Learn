
<script>
import PropsTest from"@/components/PropsTest.vue"
import { ref } from 'vue'
export default {
  components:{
    PropsTest,
  },
  setup(){
    const data =ref("hello joe!!");
    return{
      data
    }
  }
}
</script>
<template>
<!-- 自訂義屬性名稱：msg ，txt沒用bind方式只能寫字串，而且不能用動態方式 -->
  <PropsTest :msg="data" txt="123456abcd" />
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
