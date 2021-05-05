<script>
import { onMounted, reactive } from 'vue';
import {useRoute} from "vue-router"
import axios from "axios"
export default {
  setup() {
    const route=useRoute();
    const courses = reactive({data:{}});
    onMounted(()=>{
      // console.log("route=> ",route.params.id)
      axios.get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`).then((res)=>{
        //console.log(res);
        courses.data = res.data[0];
        console.log('courses.data=> ',courses.data);
      }) 
    })
    return {};
  },
};
</script>
<template>
  <div>
    <div>
      <h1></h1>
      <h2>NTD:</h2>
      <img src="" alt="" />
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
    </div>
    <!-- error_message -->
    <h1></h1>
  </div>
</template>

<style></style>
