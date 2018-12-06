import * as types from './mutations_types'



export default{
    [types.INCREMENT](state) {
        state.count++
    },
    [types.SET_EQUIP](state, payload){
        state.isEquip = payload.flag
    },
    [types.SET_WS_CODE](state, payload) {
        state.wsCode = payload.wsCode
    },
    [types.SET_IP](state, payload) {
        state.ip = payload.ip
    },
    [types.SET_NODE_LEVEL](state,payload){
        state.nodeLevel=payload.nodeLevel
    },
    //暂时固定2秒加载数据
    [types.SHOW_LOADING_BAR](state,payload){
        state.loading=true
        setInterval((()=>{
         state.loading=false
        }), 3000);
    },
}