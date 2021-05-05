<script>
import { onMounted, reactive } from 'vue';
import {useRoute} from "vue-router";
import axios from "axios";
export default {
  setup() {
    const route = useRoute();
    const courses = reactive({ data: {} });
    onMounted(()=>{
      // console.log("route=> ",route.params.id)
      axios
       .get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
      .then((res)=>{
        //console.log(res);
        courses.data = res.data.data[0];
        console.log('courses.data=> ',courses.data);
      }) 
    })
    return {courses};
  },
};
</script>
<template>
  <div>
    <div>
      <h1>{{courses.data.name}}</h1>
      <h2>NTD:{{courses.data.money}}</h2>
      <img :src="courses.data.photo" alt="" />
      <div v-if="Object.keys(courses.data).length !== 0">
        <img :src="courses.data.teacher.img" alt="" />
        <p>{{courses.data.teacher.name}}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1></h1>
  </div>
</template>

<style></style>
