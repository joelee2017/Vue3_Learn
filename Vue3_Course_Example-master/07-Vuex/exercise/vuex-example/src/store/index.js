import { createStore } from "vuex";
// 實體化 vuex ，並在下方放入實體化後的結構
export default createStore({
  state: {
    isOpen:false,
  },
  // 觸發 mutations 要使用 actions
  actions: {
    handMenuOpen(context){
      console.log('context=> ', context);
      console.log('actions');
      const bool = !context.state.isOpen;
      context.commit('handOpenState',bool);
    }
  },
  // 切記要改變資料只能在 mutations 中
  mutations: {
    handOpenState(state, bool){
      console.log('mutations');
       state.isOpen = bool;
    }
  },
  getters: {
    isOpen(state){
      return state.isOpen;
    }
  },
});
