import { onMounted, toRefs,onUnmounted, ref, reactive} from "vue";

export function MousePosition(){
    // const x =ref(0);
    // const y =ref(0);

    const pos =reactive({
        x:0,
        y:0
    })

    const name = ref('joe');

    const posUpdate =(e)=>{
        pos.x = e.pageX;
        pos.y = e.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove',posUpdate);
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove',posUpdate);
    })
    // 可以讓外部直接用使用解構呼叫
    return { 
        ...toRefs(pos),
        name
    };
}