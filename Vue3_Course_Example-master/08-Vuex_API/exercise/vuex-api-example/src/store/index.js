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
     console.log('1');
     return  axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
      .then((res)=> {
        console.log('2');
        console.log(res.data);
        commit('init', res.data);
        return res.data;
      })
    },
    handLoadState({commit}, bool){
      commit('loadState',bool);
    }
  },
  mutations: {
    init(state, payload){
      state.photoArr = payload;
      console.log('mutations state.photoArr=> ',state.photoArr);
    },
    loadState(state, bool){
      state.isLoad = bool;
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
