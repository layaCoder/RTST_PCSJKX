export default {
   
     getGoodsList(state){
         return state.goodsList
     },
    
     //通过商品id判断商品是否已在购物车中
     isGoodsInCart:(state)=>(id)=>{
       return state.goodsList.find(n=>n.id===id)!==undefined
     }
    // getNodeLevel(state) {
    //     return state.nodeLevel
    // },
    // getIsEquip(state) {
    //     return state.isEquip
    // },
    // getWsCode(state) {
    //     return state.wsCode
    // },
    // getIp(state) {
    //     return state.ip
    // },
    // getLoading(state){
    //     return state.loading
    // }

}