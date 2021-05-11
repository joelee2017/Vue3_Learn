//set CompositionApi 中的值
// 該封裝方式區域是切開的
import {ref} from"vue";
export function stateAdd() {
    const idx =ref(0);
    const addState =()=>{
        idx.value++;
    }
    return {idx,addState};
  }