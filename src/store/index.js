import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        //预留store模块，测试只用于记录当前选定的树节点
        isEquip: '',
        wsCode: '',
        ip: ''
    },
    //同步数据处理写在mutations中
    mutations: {
        increment(state) {
            state.count++
        },
        setEquip(state, payload) {
            state.isEquip = payload.flag
        },
        setWsCode(state, payload) {
            state.wsCode = payload.wsCode
        },
        setIp(state, payload) {
            state.ip = payload.ip
        }
    },
    getters: {
        // doneTodos: state => {
        //   return state.todos.filter(todo => todo.done)
        // }
    },
    //含有异步（async）的数据处理写在actions中
    actions: {
        increment({ commit }) {
            commit('increment')
        }
    }
})

