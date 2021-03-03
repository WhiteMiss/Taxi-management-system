// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import ElementUI from "element-ui"
import App from "./App.vue"
import router from "./router"
import store from "./vuex"
import i18n from "./i18n/i18n"
import globalPlugin from "./utils/global"
import permission from "./directive/permission/button"
import NProgress from "nprogress"

import "nprogress/nprogress.css"
import "element-ui/lib/theme-chalk/index.css"
import "./assets/iconfont/iconfont.css"
import "font-awesome/css/font-awesome.css"
import "@/router/permission"
import dataV from "@jiaminghi/data-view"

// 地图
import AMap from "vue-amap"

Vue.use(AMap)
// 初始化高德地图的 key 和插件

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(globalPlugin)
Vue.use(permission)
Vue.use(dataV)


NProgress.inc(0.2)
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false })

AMap.initAMapApiLoader({
  // 高德key
  key: "d4a7953c220e91cb91016930c40e50fc",
  // 插件集合 （插件按需引入）
  plugin: ["AMap.Geolocation"]
})


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: h => h(App),
  components: {App},
  template: "<App/>"
})
