const nav = {
  topNav:[
    {label:'平台管理',path:'item1'},
    {label:'内部管理',path:'item2'},
  ],
  item1:[
    {label:'总览',sub:[
      {label:'平台总览',path:'/overview',icon:'ios-podium-outline',}
    ]},
    {label:'课程表',sub:[
      {label:'课程表',path:'/course',icon:'ios-calendar-outline'},
      {label:'排课',path:'/',icon:'ios-create-outline'}
    ]},

    {label:'课程管理',sub:[
      {label:'课程列表',path:'/',icon:'ios-school-outline'},
      {label:'课程分类',path:'/',icon:'ios-share-outline'},
      {label:'上课时间',path:'/',icon:'ios-stopwatch-outline'},
      {label:'小课管理',path:'/',icon:'ios-rose-outline'}
    ]},
    {label:'订单管理',sub:[
      {label:'订单列表',path:'/',icon:'ios-podium-outline',}
    ]},
  ],
  item2:[
    {label:'员工管理',sub:[
      {label:'员工列表',path:'/',icon:'ios-person-outline'},
      {label:'角色',path:'/',icon:'ios-person-add-outline'}
    ]},
    {label:'图库',sub:[
      {label:'图库列表',path:'',icon:'ios-list-box-outline'}
    ]}
  ],
}
module.exports = nav
