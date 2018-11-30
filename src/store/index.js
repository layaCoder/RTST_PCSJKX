import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        //预留store模块，测试只用于记录当前选定的树节点
        nodeLevel:'',
        isEquip: '',
        wsCode: '',
        ip: '',
        loading:false
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
        },
        setNodeLevle(state,payload){
            state.nodeLevel=payload.nodeLevel
        },
        //暂时固定2秒加载数据
        showLoadingBar(state,payload){
            state.loading=true
            
            setInterval((()=>{
             state.loading=false
            }), 3000);
        }
        //调出loading界面，维持2秒//////////////////////////////
        //this.$store.commit("showLoadingBar", { flag: true });
        /////////////////////////////////////////////////////
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

