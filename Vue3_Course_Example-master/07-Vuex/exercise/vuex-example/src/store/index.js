import { createStore } from "vuex";
// 實體化 vuex ，並在下方放入實體化後的結構
// Vuex結構拆分
import state from "./state.js"
import actions from "./actions.js"
import mutations from "./mutations.js"
import getters from "./getters.js"
export default createStore({
  state,
  // 觸發 mutations 要使用 actions
  actions,
  // 切記要改變資料只能在 mutations 中
  mutations,
  getters,
});
