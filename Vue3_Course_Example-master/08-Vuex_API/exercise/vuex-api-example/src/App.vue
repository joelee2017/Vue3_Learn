<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {
    const store = useStore();

    const handImgLoad = (imgArr) => {
      let i = 0;
      imgArr.forEach((image) => {
        const imgs = new Image();
        imgs.src = image.url;
        imgs.onload = () => {
          i++;
          // dispatch 用來叫用 store 叫的 actions
          store.dispatch('handLoadState',i === imgArr.length);
          // isLoad.value = i === photo.arr.length; 
        };
      });
    };

    const init = () => {
      // 此處為 axios 回傳叫用 then 
      store.dispatch('handInit').then((res)=>{
            console.log('3');
        handImgLoad(res);
      });
    };

    onMounted(() => {
      init();
    });

    return {};
  },
};
</script>

<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
  background-color: slategray;
}
</style>
