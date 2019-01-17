let that;
let list = {
  props: {
    aid: {
      type: String,
      require: false
    }
  },
  watch: {
    aid() {
      this.getAnalysisData()
    }
  },
  data() {
    return {
      totalData: [],
      newData: [],
      newData2: [],
      msg: {},
    }
  },
  mounted() {
    that = this
    this.pandu()
  },
  methods: {
    initTotalData() {
      this.totalData = [{
          label: '接单用户',
          value: this.msg.userPass || 0,
          icon: 'md-people',
          style: 'obg1',
          color: '#009933'
        },
        {
          label: '待审用户',
          value: this.msg.userWait || 0,
          icon: 'ios-book',
          style: 'obg2',
          color: '#0066CC'
        },
        {
          label: '驳回用户',
          value: this.msg.userBack || 0,
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
          label: '营业总额(RMB)',
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
          label: '月度营业额(RMB)',
          value: this.msg.turnoverMonth,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '年度营业额(RMB)',
          value: this.msg.turnoverYear,
          icon: 'logo-yen',
          color: '#0099CC'
        },
      ]
      this.newData2 = [{
          label: '退款总额(RMB)',
          value: this.msg.refund,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '今日退款额(RMB)',
          value: this.msg.refundDaily,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '月度退款额(RMB)',
          value: this.msg.refundMonth,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '年度退款额(RMB)',
          value: this.msg.refundYear,
          icon: 'logo-yen',
          color: '#0099CC'
        },
      ]


    },
    pandu() {
      if (global.analysis) {
        that.msg = global.analysis
        that.initTotalData()
      } else {
        this.getAnalysisData()
      }
    },
    getAnalysisData() {

      this.yzy.post('anlysis/get/agent', {
        a_id: this.aid ? this.aid : sessionStorage.getItem('a_id')
      }, function (res) {
        if (res.code == 1) {

          if (that.aid) {
            delete global.analysis
          } else {
            global.analysis = res.data
          }
          that.msg = res.data
          that.initTotalData()
        }
      })


    }
  },

}
module.exports = list
