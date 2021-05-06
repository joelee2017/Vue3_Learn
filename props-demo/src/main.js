import { createApp } from 'vue'
import App from './App.vue'
import {numPrice} from"@/lib/tools.js"
const app =  createApp(App)
// 透過 directive 可自訂義模版語法，第二參數為要加入的生命週期，此處使用 mounted
app.directive('focus',{
    mounted(el){
        el.focus();
        console.log('el=> ',el);
    }
})

app.directive('price',{
    mounted(el, binding){
        const p = numPrice(binding.value);
        //console.log('binding=> ',binding.value);
        el.innerHTML = p;
    },
    // 當值改變就會觸發使用 updated
    updated(el, binding){
        const p = numPrice(binding.value);
        el.innerHTML = p;
    }
})
app.mount('#app')