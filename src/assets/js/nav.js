const nav = {
  topNav: [{
    label: '平台管理',
    path: 'item1'
  },
  {
    label: '内部管理',
    path: 'item2'
  },
  ],
  //dtype 1 仅管理管  2 仅城市代理  3仅校园代理  4 全部 -1 城市和校园
  item1: [{
    label: '总览',
    sub: [{
      label: '平台总览',
      path: '/overview',
      icon: 'ios-podium-outline',
    }]
  },
  {
    label: '代理商',
    dtype: 1,
    sub: [{
      label: '代理商列表',
      path: '/agent',
      icon: 'ios-calendar-outline'
    },
    {
      label: '新增代理商',
      path: '/agent_edit',
      icon: 'ios-create-outline'
    },
    {
      label: '新增服务',
      path: '/server',
      icon: 'ios-create-outline'
    }
    ]
  },

  {
    label: '代理地区',
    dtype: 1,
    sub: [{
      label: '代理地列表',
      path: '/area',
      icon: 'ios-calendar-outline'
    },
    {
      label: '新增地区',
      path: '/area_edit',
      icon: 'ios-create-outline'
    }
    ]
  },
  {
    label: '微信用户',
    dtype: 1,
    sub: [{
      label: '用户列表',
      path: '/wxuser_LIST',
      icon: 'ios-podium-outline',
    }]
  },
  {
    label: '订单管理',
    dtype: -1,
    sub: [{
      label: '快递代取订单',
      path: '/daiqu',
      icon: 'ios-podium-outline',
    }]
  },
  {
    label: '文件管理',
    dtype: -1,
    sub: [{
      label: '文件列表',
      path: '/file',
      icon: 'ios-podium-outline',
    }]
  },
  ],
  item2: [{
    label: '项目管理',
    sub: [{
      label: '项目列表',
      path: '/dayin',
      icon: 'ios-list-box-outline'
    }]
  },
  {
    label: '员工管理',
    sub: [{
      label: '经纪人',
      path: '/',
      icon: 'ios-person-outline'
    },
    {
      label: '业务员',
      path: '/',
      icon: 'ios-person-add-outline'
    }, {
      label: '管理员',
      path: '/',
      icon: 'ios-person-add-outline'
    }
    ]
  },
  ],
  daili1: [{
    label: '接单员管理',
    sub: [{
      label: '接单员列表',
      path: '/jdlist',
      icon: 'ios-list-box-outline'
    }, {
      label: '审核列表',
      path: '/shlist',
      icon: 'ios-list-box-outline'
    }]
  }, {
    label: '订单管理',
    sub: [{
      label: '快递代取订单',
      path: '/daiqu',
      icon: 'ios-list-box-outline'
    }, {
      label: '打印订单',
      path: '/dayin',
      icon: 'ios-list-box-outline'
    }, {
      label: '其他订单',
      path: '/other',
      icon: 'ios-list-box-outline'
    }]
  }, 
  {
    label: '地址管理',
    sub: [{
      label: '地址分组',
      path: '/address_cate',
      icon: 'ios-list-box-outline'
    },
    {
      label: '新增分组',
      path: '/address_cate_edit',
      icon: 'ios-list-box-outline'
    },{
      label: '地址列表',
      path: '/address',
      icon: 'ios-list-box-outline'
    },{
      label: '新增地址',
      path: '/address_edit',
      icon: 'ios-list-box-outline'
    }]
  },
  {
    label: '设置',
    sub: [{
      label: '代理设置',
      path: '/dayin',
      icon: 'ios-list-box-outline'
    }]
  },]
}
module.exports = nav
