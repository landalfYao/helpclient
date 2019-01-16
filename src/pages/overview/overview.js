let that;
let list = {
  data() {
    return {
      totalData: [],
      newData: [],
      msg:{},
      orderData:[],
      orderData2:[]
    }
  },
  mounted() {
    that = this
    // this.initTotalData()
    this.getAnalysisData()
  },
  methods: {
    initTotalData() {
      this.totalData = [{
          label: '用户总数',
          value: this.msg.wxuserTotal,
          icon: 'md-people',
          style: 'obg1',
          color: '#009933'
        },
        {
          label: '学校总数',
          value: this.msg.areaTotal,
          icon: 'ios-book',
          style: 'obg2',
          color: '#0066CC'
        },
        {
          label: '接单人总数',
          value: this.msg.taking,
          icon: 'md-school',
          style: 'obg3',
          color: '#663399'
        },
        {
          label: '订单总数',
          value: this.msg.orderTotal,
          icon: 'ios-paper',
          style: 'obg4',
          color: '#ffffff'
        }
      ];

      this.newData = [{
          label: '营业额(RMB)',
          value: this.msg.turnover,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '今日营业额(RMB)',
          value: this.msg.turnoverDaily,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '退款总额',
          value: this.msg.refund,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '今日退款额',
          value: this.msg.refundDaily,
          icon: 'logo-yen',
          color: '#0099CC'
        },
      ]
      this.orderData = [{
        label: '待支付订单',
        value: this.msg.orderTotalWaiting,
        icon: 'ios-calendar',
        color: '#0099CC'
      },
      {
        label: '已支付订单',
        value: this.msg.orderTotalPayed,
        icon: 'ios-calendar',
        color: '#0099CC'
      },
      {
        label: '已结单订单',
        value: this.msg.orderTotalTaked,
        icon: 'ios-calendar',
        color: '#0099CC'
      },
      {
        label: '已完成订单',
        value: this.msg.orderTotalComplete,
        icon: 'ios-calendar',
        color: '#0099CC'
      },
    ]
    this.orderData2 = [{
      label: '已取消订单',
      value: this.msg.orderTotalCancel,
      icon: 'ios-calendar',
      color: '#0099CC'
    },

    {
      label: '今日用户数',
      value: this.msg.wxuserTotalDaily,
      icon: 'ios-calendar',
      color: '#0099CC'
    },

  ]
    },
    getAnalysisData(){
      this.yzy.post('anlysis/get',{},function(res){
        if(res.code == 1){
          that.msg = res.data
          that.initTotalData()
        }
      })
    }
  },

}
module.exports = list
