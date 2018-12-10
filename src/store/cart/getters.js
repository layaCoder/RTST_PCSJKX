export default {

  getGoodsList(state) {
    return state.goodsList
  },
  //通过商品id判断商品是否已在购物车中
  isGoodsInCart: (state) => (id) => {
    return state.goodsList.find(n => n.id === id) !== undefined
  },
  //返回包含单项商品合计价格的goodsList
  getGoodsListTotleData(state) {
    for (let item of state.goodsList) {
      let totlePriceObj = {
        totlePrice: item.price * item.count
      }
      item = Object.assign(item, totlePriceObj)
    }
    return state.goodsList
  },
  //购物车所有商品总价格
  getCartTotlePrice(state){
     let totlePrice=0
     for(let item of state.goodsList){
        totlePrice+=item.totlePrice
     }
     return totlePrice
  }
}