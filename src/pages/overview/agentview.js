let that;
let G2 = require('@antv/g2');
let chart ;
let chart2 ;
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
      this.sbchange()
      this.sbchange2()
    }
  },
  data() {
    return {
      sbdate: new Date(),
      sbtype: 'month',
      sbdate2: new Date(),
      sbtype2: 'month',
      totalData: [],
      newData: [],
      newData2: [],
      msg: {},
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
    // this.pandu()
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
      this.yzy.post('anlysis/get/order/state', { sbtype: this.sbtype, sbdate: date,a_id:this.aid || sessionStorage.getItem('a_id') }, function (res) {
        if (res.code == 1) {
          that.orderNodeData(res.data)
        }
      })
    },
    getorderTypeData(date){
      this.yzy.post('anlysis/get/order/type', { sbtype: this.sbtype2, sbdate: date,a_id:this.aid || sessionStorage.getItem('a_id') }, function (res) {
        if (res.code == 1) {
          that.orderNodeData2(res.data)
        }
      })
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
        a_id: this.aid 
      }, function (res) {
        if (res.code == 1) {

          if (that.aid) {
            delete global.analysis
          } else {
            global.analysis = res.data
          }
          that.msg = res.data
          that.initTotalData()
        }else{
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    }
  },

}
module.exports = list
