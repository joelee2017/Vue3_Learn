import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    handInit({commit}){
      axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
      .then((res)=> {
        console.log(res.data);
        commit('init', res.data);
      })
    }
  },
  mutations: {
    init(state, payload){
      state.photoArr = payload;
      console.log('mutations state.photoArr=> ',state.photoArr);
    }
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
