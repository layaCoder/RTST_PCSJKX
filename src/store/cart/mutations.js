import * as types from './mutations_types'



export default {
    //在商品列表页面中 添加商品种类到购物车（添加一行数据）
    [types.GOODS_PLUS_ONE](state, payload) {
        //如果商品不存在与购物车，则push进购物车
        if (state.goodsList.find((n) => n.id === payload.goodsItem.id) === undefined) {
            state.goodsList.push(payload.goodsItem)
        }
        else {
            //如果存在商品，则将count更新
            for (let item of state.goodsList) {
                if (item.id === payload.goodsItem.id) {
                    item.count = payload.goodsItem.count
                }

            }
        }
    },
    //在购物车页面中+1商品数量（修改单行数据中的count属性）
    [types.GOODS_COUNT_PLUS_ONE](state, payload) {
        for (let item of state.goodsList) {
            if (item.id === payload.goodsItem.id && payload.goodsItem.count > 0) {
                item.count++
                //更新数量后更新总价格
                item.totlePrice = item.price * item.count
            }
        }
    },
    //在购物车页面中-1商品数量（修改单行数据中的count属性）
    [types.GOODS_COUNT_MINUS_ONE](state, payload) {
        for (let item of state.goodsList) {
            //如果在购物车中，则count-1
            if (item.id === payload.goodsItem.id && payload.goodsItem.count > 1) {
                item.count--
                //更新数量后更新总价格
                item.totlePrice = item.price * item.count
            }
            //如果不在购物车中，则将商品obj从array中去除
            else if (item.id === payload.goodsItem.id && payload.goodsItem.count === 1) {
                state.goodsList.splice(state.goodsList.findIndex(item => item.id === payload.goodsItem.id), 1)
            }
        }
    },
    //在购物车页面中【移除商品】
    [types.REMOVE_GOODS_FROM_CART](state, payload) {
        for (let item of state.goodsList) {
            if (item.id === payload.goodsItem.id) {
                state.goodsList.splice(state.goodsList.findIndex(item => item.id === payload.goodsItem.id), 1)
            }
        }
    },
    [types.CLEAR_CART](state) {
        if (state.goodsList.length > 0) {
            state.goodsList=[]
        }
    }

}