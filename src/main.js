// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from "axios"
import store from './store'
import VCharts from 'v-charts'
import VueCropper from 'vue-cropper'



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(VueCropper)

Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
