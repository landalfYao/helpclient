let G2 = require('@antv/g2');
let chart ;
let chart2 ;
let that;
let list = {
  data() {
    return {
      totalData: [],
      newData: [],
      newData2: [],
      sbdate: new Date(),
      sbtype: 'month',
      sbdate2: new Date(),
      sbtype2: 'month',
      msg: {},
      orderData: [],
      orderData2: []
    }
  },
  mounted() {
    that = this
    chart = new G2.Chart({
      container: 'orderNode',
      forceFit: true,
      height: 500,
      padding: [100, 20, 30, 45] // 上右下左
    });
    chart2 = new G2.Chart({
      container: 'mountNode',
      forceFit: true,
      height:500,
      padding: [100, 20, 30, 45]
    });
    this.getAnalysisData()
    this.sbchange()
    this.sbchange2()
  },
  methods: {
    sbchange() {
      if (this.sbtype == 'year') {
        this.getorderStateData(this.sbdate.getFullYear())
      } else {
        let month = this.sbdate.getMonth() + 1
        let m = month < 10 ? "0" + month : month
        this.getorderStateData(this.sbdate.getFullYear() + '-' + m)
      }
    },
    sbchange2() {
      if (this.sbtype2 == 'year') {
        this.getorderTypeData(this.sbdate2.getFullYear())
      } else {
        let month = this.sbdate2.getMonth() + 1
        let m = month < 10 ? "0" + month : month
        this.getorderTypeData(this.sbdate2.getFullYear() + '-' + m)
      }
    },
    getorderStateData(date) {
      this.yzy.post('anlysis/get/order/state', { sbtype: this.sbtype, sbdate: date }, function (res) {
        if (res.code == 1) {
          that.orderNodeData(res.data)
        }
      })
    },
    getorderTypeData(date){
      this.yzy.post('anlysis/get/order/type', { sbtype: this.sbtype2, sbdate: date }, function (res) {
        if (res.code == 1) {
          that.orderNodeData2(res.data)
        }
      })
    },
    initTotalData() {
      this.totalData = [{
        label: '用户总数',
        value: that.msg.wxuserTotal,
        icon: 'md-people',
        style: 'obg1',
        color: '#009933'
      },
      {
        label: '学校总数',
        value: that.msg.areaTotal,
        icon: 'ios-book',
        style: 'obg2',
        color: '#0066CC'
      },
      {
        label: '接单人总数',
        value: this.msg.userPass ? this.msg.userPass : 0,
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

      this.orderData = [{
        label: '今日用户数',
        value: this.msg.wxuserTotalDaily,
        icon: 'ios-calendar',
        color: '#0099CC'
      },
      {
        label: '待审用户数',
        value: this.msg.userWating ? this.msg.userWating : 0,
        icon: 'ios-calendar',
        color: '#0099CC'
      },
      {
        label: '驳回用户数',
        value: this.msg.userBack ? this.msg.userBack : 0,
        icon: 'ios-calendar',
        color: '#0099CC'
      },
      {
        label: '联系站长',
        value: '18267173607',
        icon: 'ios-calendar',
        color: '#0099CC'
      },
      ]


    },
    orderNodeData2(data) {
      chart2.source(data);
      chart2.tooltip({
        follow: false,
        crosshairs: 'y',
        htmlContent: function htmlContent(title, items) {
          let alias = {
            '打印服务': '打印服务',
            '快递代取': '快递代取',
            '校园跑腿': '校园跑腿',
            '上门维修': '上门维修',
            '代替服务': '代替服务',
            '其他帮助': '其他帮助'
          };
          let html = '<div class="custom-tooltip">';
          for (var i = 0; i < items.length; i++) {
            var domHead = '<div class="custom-tooltip-item" style="border-left-color:' + items[i].color + '">';
            var domName = '<div class="custom-tooltip-item-name">' + alias[items[i].name] + '</div>';
            var domValue = '<div class="custom-tooltip-item-value">' + items[i].value + '</div>';
            var domTail = '</div>';
            html += domHead + domName + domValue + domTail;
          }
          return html + '</div>';
        }
      });
      chart2.axis('time', {
        label: {
          textStyle: {
            fill: '#aaaaaa'
          }
        }
      });
      chart2.axis('total', {
        label: {
          textStyle: {
            fill: '#aaaaaa'
          }
        }
      });
      chart2.legend(false);
      chart2.line().position('time*total').color('title');
      chart2.render();
      chart2.showTooltip({
        x: 882 - 20,
        y: 100
      });
    },
    orderNodeData(data) {
      
      chart.source(data);
      chart.tooltip({
        follow: false,
        crosshairs: 'y',
        htmlContent: function htmlContent(title, items) {
          let alias = {
            s0: '待付款',
            s1: '已付款',
            s2: '已接单',
            s3: '已完成',
            s4: '已取消'
          };
          let html = '<div class="custom-tooltip">';
          for (var i = 0; i < items.length; i++) {
            var domHead = '<div class="custom-tooltip-item" style="border-left-color:' + items[i].color + '">';
            var domName = '<div class="custom-tooltip-item-name">' + alias[items[i].name] + '</div>';
            var domValue = '<div class="custom-tooltip-item-value">' + items[i].value + '</div>';
            var domTail = '</div>';
            html += domHead + domName + domValue + domTail;
          }
          return html + '</div>';
        }
      });
      chart.axis('time', {
        label: {
          textStyle: {
            fill: '#aaaaaa'
          }
        }
      });
      chart.axis('total', {
        label: {
          textStyle: {
            fill: '#aaaaaa'
          }
        }
      });
      chart.legend(false);
      chart.line().position('time*total').color('state');
      chart.render();
      chart.showTooltip({
        x: 882 - 20,
        y: 100
      });
    },
    getAnalysisData() {

      this.yzy.post('anlysis/get', {}, function (res) {
        if (res.code == 1) {
          that.msg = res.data
          that.initTotalData()
        }
      })

    }
  },

}
module.exports = list
