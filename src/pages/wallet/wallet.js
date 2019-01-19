let that;
let list = {
  data() {
    return {
      msg:'',
      tableData:[],
      total:0,
      query:{
        tables:'capital_trend,helplist',
        fields:'capital_trend.*,helplist.order_num,helplist.total_fee',
        sorts:'capital_trend.create_time desc',
        wheres:'capital_trend.h_id = helplist.id  ',
        pageIndex:1,
        pageSize:10,
      }
    }
  },
  mounted() {
    that = this;
    this.getMsg()
    this.getList()
  },
  methods: {
    handleSizeChange(e) {
      this.getList()
    },
    handleCurrentChange(e) {
      this.query.pageIndex = e
      this.getList()
    },
    getMsg(){
      this.yzy.post('ct/get',{
        wheres:'type=2 and uid='+sessionStorage.getItem("uid"),
        tables:'wallets',
        sorts:'id asc'
      },function(res){
        if(res.code == 1){
          that.msg = res.data.list[0]
        }
      })
    },
    getList(){
      if(sessionStorage.getItem("a_id")){
        this.query.wheres += ' and capital_trend.a_id='+sessionStorage.getItem("a_id")
      }
      
      this.yzy.post('ct/get',this.query,function(res){
        if(res.code == 1){
          that.tableData = res.data.list
          that.total = res.data.total
        }
      })
    }
  }
}
module.exports = list
