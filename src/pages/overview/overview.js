let that ;
let list = {
  data () {
    return {
      totalData:[],
      newData:[]
    }
  },
  mounted(){
    that = this
    this.initTotalData()
  },
  methods:{
    initTotalData(){
      this.totalData = [
        {label:'会员总数',value:156345,icon:'md-people',style:'obg1',color:'#009933'},
        {label:'课程总数',value:156,icon:'ios-book',style:'obg2',color:'#0066CC'},
        {label:'教师总数',value:56,icon:'md-school',style:'obg3',color:'#663399'},
        {label:'订单总数',value:56,icon:'ios-paper',style:'obg4',color:'#ffffff'}
      ];

      this.newData = [
        {label:'交易额(RMB)',value:86542.26,icon:'logo-yen',color:'#0099CC'},
        {label:'支付订单数',value:23054,icon:'ios-paper',color:'#0099CC'},
        {label:'新增会员数',value:253,icon:'md-person-add',color:'#0099CC'},
        {label:'今日课程剩余',value:12,icon:'ios-calendar',color:'#0099CC'},
      ]
    }
  },

}
module.exports = list
