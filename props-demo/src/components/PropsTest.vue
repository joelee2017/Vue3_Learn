
<script>
export default {
    //與上層相同屬性名稱接值
    // props:['msg'], //盡量不要用陣列定義，改使用物件註名型別方式
    props:{
        str:{
            type:String, //註名型別
            default:"my name is Joe", //預設值
        },
        bool:{
            type:Boolean, 
            default:true,
        },
        num:{
            type:Number, 
            default:0,
        },
        arr:{
            type:Array, 
            default: ()=>[], // 陣列預設值建議用方法回傳空陣列，不要直接給空陣列
        },
        obj:{
            type:Object, 
            default:()=>({}),// ({})回傳return 結果
        },
        handclickfn:{
            type:Function, 
            default:()=>{} // 回傳方法
        },
        txt:String
    },
    // 一定要透過setup帶參數回傳上西參數
    setup(props){
        console.log(props)
        return{
            props
        }
    }
}
</script>
<template>
<!-- 取出上層傳值 -->
    <h1>{{props.str}} {{props.txt}}</h1>
</template>
<style>
h1{
    color: aqua;
    font-size: 50px;
}
</style>