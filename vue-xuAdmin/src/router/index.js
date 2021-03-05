import en from "../i18n/lang/en" // 英文对照表
import cn from "../i18n/lang/cn"
import Vue from "vue"
import Router from "vue-router"
import Login from "@/views/login/index"
import Layout from "@/views/layout/layout"
import HomeMain from "@/views/index/mainIndex"

// 不是必须加载的组件使用懒加载
const NotFound = () => import("@/views/page404")

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)
let routeName = en.routeName // 从英文翻译对照表获取路由的英文名字，当做路由'name'属性的值
let roleName = cn.routeName
// 不需要权限的路由
let defaultRouter = [
  { path: "/",
    redirect: "/index",
    hidden: true,
    children: []
  },
  {
    path: "/login",
    component: Login,
    name: "",
    hidden: true,
    children: []
  },
  // {
  //   path: "/loginTable",
  //   component: () => import("@/components/login/loginTable"),
  //   name: "loginTable",
  //   hidden: true,
  //   children: []
  // },
  {
    path: "/",
    iconCls: "fa fa-dashboard", // 图标样式class
    name: routeName.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: "/index",
        iconCls: "fa fa-dashboard", // 图标样式class
        name: "主页",
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: "/404",
    component: NotFound,
    name: "404",
    hidden: true,
    children: []
  }
]

let addRouter = [
  {
    r_id: 100022,
    r_name: roleName.article,
    path: "/",
    iconCls: "el-icon-tickets", // 图标样式class
    name: "article",
    component: () => import("@/views/layout/layout"),
    children: [
      {
        r_id: 100023,
        r_name: roleName.publishArticle,
        path: "/addArticleEditor",
        iconCls: "el-icon-edit-outline", // 图标样式class
        name: "publishArticle",
        component: () => import("@/views/article/addArticleEditor"),
        children: []
      },
      {
        r_id: 100024,
        r_name: roleName.articleList,
        path: "/articleList",
        iconCls: "el-icon-document", // 订单列表
        name: "articleList",
        component: () => import("@/views/article/articleList"),
        children: []
      },
      {
        r_id: 100027,
        r_name: roleName.viewOrder,
        path: "/viewOrder",
        iconCls: "el-icon-document-checked", // 订单详情
        name: "viewOrder",
        component: () => import("@/views/article/viewOrder"),
        children: []
      },
      {
        r_id: 100025,
        r_name: roleName.commentList,
        path: "/commentList",
        iconCls: "el-icon-chat-line-square", // 评论
        name: "commentList",
        component: () => import("@/views/article/commentList"),
        children: []
      }
    ]
  },
  { // 编辑器
    r_id: 100055,
    r_name: roleName.editor,
    path: "/",
    iconCls: "el-icon-edit", // 图标样式class
    name: "editor",
    component: () => import("@/views/layout/layout"),
    meta: {role: ["superAdmin", "admin"]},
    children: [
      {
        r_id: 100056,
        r_name: roleName.markdown,
        path: "/markdown",
        iconCls: "fa fa-file-code-o", // 图标样式class
        name: "markdown",
        component: () => import("@/views/editor/markdownView"),
        children: []
      },
      {
        r_id: 100057,
        r_name: roleName.wangeditor,
        path: "/wangeditor",
        iconCls: "fa fa-file-code-o", // 图标样式class
        name: "wangeditor",
        component: () => import("@/views/editor/wangeditorView"),
        children: []
      }
    ]
  },

  {
    r_id: 100000,
    r_name: roleName.systemManage,
    path: "/",
    iconCls: "fa fa-universal-access", // 图标样式class
    name: "systemManage",
    component: () => import("@/views/layout/layout"),
    children: [
      {
        r_id: 100005,
        r_name: roleName.roleManage,
        path: "/roleManage",
        iconCls: "el-icon-edit-outline", // 图标样式class
        name: "roleManage",
        component: () => import("@/views/systemManage/roleManage"),
        children: [
          {
            r_id: "btn_100002",
            r_name: "btn:增加",
            path: "",
            type: "button",
            children: []
          }
        ]
      },
      {
        r_id: 100026,
        r_name: roleName.userManage,
        path: "/",
        iconCls: "el-icon-tickets", // 图标样式class
        name: "userManage",
        component: () => import("@/views/commerViews"),
        children: [
          {
            r_id: 100029,
            r_name: roleName.userList,
            path: "/userList",
            iconCls: "el-icon-edit-outline", // 图标样式class
            name: "userList",
            component: () => import("@/views/user/userList"),
            children: []
          }
        ]
      }
    ]
  },
  { // 论坛
    r_id: 100066,
    r_name: roleName.forum,
    path: "/",
    iconCls: "el-icon-edit", // 图标样式class
    name: "forum",
    component: () => import("@/views/layout/layout"),
    meta: {role: ["superAdmin", "admin"]},
    children: [
      {
        r_id: 100067, // 论坛
        r_name: roleName.forumindex,
        path: "/forumindex",
        iconCls: "el-icon-connection", // 图标样式class
        name: "forumindex",
        component: () => import("@/views/forum/forumindex"),
        children: []
      },
      {
        r_id: 100068, // 查看帖子
        r_name: roleName.postDetails,
        path: "/postDetails",
        iconCls: "el-icon-view", // 图标样式class
        name: "postDetails",
        component: () => import("@/views/forum/postDetails"),
        children: []
      }
    ]
  },
  { // 积分奖励
    r_id: 100088,
    r_name: roleName.integral,
    path: "/",
    iconCls: "el-icon-trophy", // 图标样式class
    name: "integral",
    component: () => import("@/views/layout/layout"),
    meta: {role: ["superAdmin", "admin"]},
    children: [
      {
        r_id: 100089, // 积分兑换
        r_name: roleName.exchange,
        path: "/exchange",
        iconCls: "el-icon-shopping-bag-1", // 图标样式class
        name: "exchange",
        component: () => import("@/views/integral/exchange"),
        children: []
      }
    ]
  },
  { // 订单详情
    r_id: 100090,
    r_name: roleName.orders,
    path: "/",
    iconCls: "el-icon-goods", // 图标样式class
    name: "orders",
    component: () => import("@/views/layout/layout"),
    meta: {role: ["superAdmin", "admin"]},
    children: [
      {
        r_id: 100091,
        r_name: roleName.OrderDetails,
        path: "/OrderDetails",
        iconCls: "el-icon-shopping-bag-1", // 图标样式class
        name: "OrderDetails",
        component: () => import("@/views/orders/OrderDetails"),
        children: []
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
    children: []
  }
]

export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}
