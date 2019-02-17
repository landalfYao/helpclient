import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main/index.vue'
import wxdayin from '../pages/dayin.vue'
//用户模块
import login from '../pages/user/login/login.vue'
import userList from '../pages/user/list/list.vue'
import updatepwd from '../pages/user/updatepwd/updatepwd.vue'
import userInfo from '../pages/user/info/info.vue'

import gallery from '../pages/file/gallery.vue'

//权限模块
import authList from '../pages/auth/list/list.vue'
import authEdit from '../pages/auth/edit/edit.vue'
import authCateEdit from '../pages/auth/cate/edit.vue'
import authCateList from '../pages/auth/cate/cate.vue'
import userlog from '../pages/user/log/log.vue'
import grantList from '../pages/roles/grant.vue'

//角色模块
import roles from '../pages/roles/roles.vue'
import rolesEdit from '../pages/roles/roles_edit.vue'

//平台总览
import overview from '../pages/overview/overview.vue'

import agentEdit from '../pages/agent/agent_edit.vue'
import agent from '../pages/agent/agent.vue'

import area from '../pages/area/area.vue'
import area_edit from '../pages/area/area_edit.vue'

import server from '../pages/server/server.vue'
import wxuserList from '../pages/wxuser/list/list.vue'

import daiqu from '../pages/order/daiqu.vue'
import dayin from '../pages/order/dayin.vue'
import other from '../pages/order/other.vue'

import jdlist from '../pages/wxuser/jdlist/jdlist.vue'
import shlist from '../pages/wxuser/sh/jdlist.vue'

import file from '../pages/file/file.vue'

//address
import addressCate from '../pages/address/address_cate.vue'
import addressCateEdit from '../pages/address/address_cate_edit.vue'
import address from '../pages/address/address.vue'
import addressEdit from '../pages/address/address_edit.vue'

import agentview from '../pages/overview/agentview.vue'

import wallet from '../pages/wallet/wallet.vue'
import wxview from '../pages/overview/wxview.vue'

//轮播图
import calousels from '../pages/calousels/calousels.vue'
import calouselsEdit from '../pages/calousels/calousels_edit.vue'

//提现
import cash from '../pages/wallet/cash.vue'

//重要通知
import emer from '../pages/user/updateemer/emer.vue'

//richtext
import richtext from '../components/richtext.vue'
import richtext_edit from '../pages/richtext/richtext_edit.vue'
import richtextList from '../pages/richtext/richtext.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dayin_wx',
      name: '打印',
      component: wxdayin
    },
    {
      path: '/',
      name: 'main',
      component: main,
      children: [{
          path: '/user/list',
          name: '用户列表',
          component: userList
        },
        {
          path: '/richtext',
          name: '富文本编辑',
          component: richtext
        },
        {
          path: '/user/log',
          name: '用户日志列表',
          component: userlog
        },
        {
          path: '/user/info',
          name: '用户信息',
          component: userInfo
        },
        {
          path: '/user/emer',
          name: '重要通知',
          component: emer
        },
        {
          path: '/gallery',
          name: '图库',
          component: gallery
        },
        {
          path: '/agentview',
          name: '代理数据总览',
          component: agentview
        },
        {
          path: '/auth/list',
          name: '权限列表',
          component: authList
        },
        {
          path: '/auth/cate/list',
          name: '权限类目列表',
          component: authCateList
        },
        {
          path: '/auth/edit',
          name: '编辑权限',
          component: authEdit
        },
        {
          path: '/auth/cate/edit',
          name: '编辑权限类目',
          component: authCateEdit
        },
        {
          path: '/auth/grant/list',
          name: '角色权限列表',
          component: grantList
        },
        {
          path: '/role/list',
          name: '角色列表',
          component: roles
        },
        {
          path: '/role/edit',
          name: '编辑角色',
          component: rolesEdit
        },
        {
          path: '/updatepwd',
          name: '修改密码',
          component: updatepwd
        },
        {
          path: '/overview',
          name: '平台总览',
          component: overview
        },
        {
          path: '/agent_edit',
          name: '新增代理商',
          component: agentEdit
        },
        {
          path: '/agent',
          name: '代理商列表',
          component: agent
        },
        {
          path: '/area',
          name: '代理地区列表',
          component: area
        },
        {
          path: '/area_edit',
          name: '编辑地区',
          component: area_edit
        },
        {
          path: '/server',
          name: '编辑服务',
          component: server
        },
        {
          path: '/wxuser_list',
          name: '微信用户',
          component: wxuserList
        },
        {
          path: '/daiqu',
          name: '快递代取订单',
          component: daiqu
        },
        {
          path: '/dayin',
          name: '打印服务',
          component: dayin
        },
        {
          path: '/other',
          name: '其他订单',
          component: other
        },
        {
          path: '/jdlist',
          name: '接单员列表',
          component: jdlist
        },
        {
          path: '/shlist',
          name: '审核列表',
          component: shlist
        },
        {
          path: '/file',
          name: '文件列表',
          component: file
        },
        {
          path: '/address_cate_edit',
          name: '地址分组编辑',
          component: addressCateEdit
        },
        {
          path: '/address_cate',
          name: '地址分组',
          component: addressCate
        },
        {
          path: '/address',
          name: '地址列表',
          component: address
        },
        {
          path: '/address_edit',
          name: '编辑地址',
          component: addressEdit
        },
        {
          path: '/updatepwd',
          name: '编辑地址',
          component: updatepwd
        },
        {
          path: '/wallet',
          name: '我的账户',
          component: wallet
        },
        {
          path: '/wxview',
          name: '接单用户数据',
          component: wxview
        },
        {
          path: '/calousels',
          name: '轮播图',
          component: calousels
        },
        {
          path: '/calousels/edit',
          name: '轮播图编辑',
          component: calouselsEdit
        },
        {
          path: '/cash',
          name: '提现记录',
          component: cash
        },
        {
          path: '/richtext/edit',
          name: '文章编辑',
          component: richtext_edit
        },
        {
          path: '/richtext/list',
          name: '文章列表',
          component: richtextList
        },
      ]
    }
  ]
})
