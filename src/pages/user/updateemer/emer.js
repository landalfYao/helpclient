let that ;
let list = {
  data(){
    return {
      formData:{
        emer_title:'',
        emer_content:'',
        open_emer:0
      },
      is_show:false,
      loading:false
    }
  },
  mounted(){
    that = this;
    that.getMsg();
  },
  methods:{
    getMsg(){
        this.yzy.post('user/get/emer',{},function(res){
            if(res.code == 1){
                that.formData = res.data
                that.is_show = res.data.open_emer ==1 ? true:false
            }else{
                that.$message.error(res.msg)
            }
        })
    },
    onSubmit(){
      this.loading = true;
      let formData = this.formData;
      formData.open_emer = this.is_show  ? 1:0
      this.yzy.post('user/update/emer',formData,function(res){
        that.loading = false
        if(res.code == 1){
          that.$message.success(res.msg)
        //   that.formData = that.formData2

        }else{
          that.$message.error(res.msg)
        }
      })
    }
  }
}
module.exports = list
