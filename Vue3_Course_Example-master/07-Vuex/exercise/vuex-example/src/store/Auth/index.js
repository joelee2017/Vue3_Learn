export default{
    // 加入  namespaced:true 時侯會在編譯期間自動區別
    namespaced:true,
    state:{
        token:''
    },
    actions:{
        handSetToken(context,token){
            console.log('Auth token');
            context.commit('setToken', token)
        }
    },
    mutations:{
        setToken(state,token){
            state.token = token;
        }
    },
    getters:{
        getToken(state){
            return state.token;
        }
    },
}