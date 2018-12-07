import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import jkx from './jkx'
import cart from './cart'

export default new Vuex.Store({
   modules:{
       jkx,
       cart
   }
})


