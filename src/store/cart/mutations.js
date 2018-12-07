import * as types from './mutations_types'



export default {
    [types.GOODS_PLUS_ONE](state, payload) {
        if (state.goodsList.find((n) => n.id === payload.goodsItem.id) === undefined) {
            state.goodsList.push(payload.goodsItem)
        }
        else {
            //如果存在商品，则将count更新
            for (let item of state.goodsList) {
                if (item.id === payload.goodsItem.id) {
                    item.count =payload.goodsItem.count
                }
            }
        }
    },
   
}