import { createStore } from "vuex";
// 實體化 vuex ，並在下方放入實體化後的結構
export default createStore({
  state: {
    isOpen:true,
  },
  actions: {},
  mutations: {},
  getters: {
    isOpen(state){
      return state.isOpen;
    }
  },
});
