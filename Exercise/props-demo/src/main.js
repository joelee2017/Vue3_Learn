import { createApp } from 'vue'
import App from './App.vue'

const app =  createApp(App)
// 透過 directive 可自訂義模版語法，第二參數為要加入的生命週期，此處使用 mounted
app.directive('focus',{
    mounted(el){
        el.focus();
        console.log('el=> ',el);
    }
})
app.mount('#app')