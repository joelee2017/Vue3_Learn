import axios from "axios";
import {ref, reactive} from "vue";

export function Fetchs(API_URL="") {
    const isLoad = ref(false);
    const FetchData = reactive({data:[]});
    const errorMsg = ref("");
    axios.get(API_URL).then((res)=>{
        isLoad.value = true;
        FetchData.data = res.data
    }).catch(error=>{
        errorMsg.value = error.request.statusText; 
    })
    return { isLoad, FetchData, errorMsg };
}
