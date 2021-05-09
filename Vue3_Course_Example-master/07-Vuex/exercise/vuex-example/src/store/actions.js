export default{
    handMenuOpen(context){
        console.log('context=> ', context);
        console.log('actions');
        const bool = !context.state.isOpen;
        context.commit('handOpenState',bool);
      }
}