import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main/index.vue'
//用户模块
import login from '../pages/user/login/login.vue'
import userList from '../pages/user/list/list.vue'

//权限模块
import authList from '../pages/auth/list/list.vue'

//平台总览
import overview from '../pages/overview/overview.vue'

import agentEdit from '../pages/agent/agent_edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'login', component: login },
    { path: '/', name: 'main', component: main ,children:[
      { path:'/user/list',name:'用户列表', component: userList},
      { path:'/auth/list',name:'权限列表', component: authList},
      { path:'/overview',name:'平台总览', component: overview},
      { path:'/agent_edit',name:'新增代理商', component: agentEdit}
    ] }
  ]
})
