<script>
import { onMounted, reactive, ref } from 'vue';
import {useRoute} from "vue-router";
import axios from "axios";
export default {
  setup() {
    const route = useRoute();
    const isError = ref(false);
    const courses = reactive({ data: {} });
    onMounted(()=>{
      // console.log("route=> ",route.params.id)
      axios
       .get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
      .then((res)=>{
        //console.log(res);
        courses.data = res.data.data[0];
        console.log('courses.data=> ',courses.data);
      }).catch(error=>{
          console.log("error=> ",error);
        isError.value = true;
        courses.data['error_message'] = error.response.data.error_message;      
      });
    })
    return {courses,isError};
  },
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <h1>{{courses.data.name}}</h1>
      <h2>NTD:{{courses.data.money}}</h2>
      <img :src="courses.data.photo" alt="" />
      <div v-if="Object.keys(courses.data).length !== 0">
        <img :src="courses.data.teacher.img" alt="" />
        <p>{{courses.data.teacher.name}}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="isError">{{courses.data.error_message}}</h1>
  </div>
</template>

<style></style>
