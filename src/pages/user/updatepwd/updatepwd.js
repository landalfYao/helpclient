let that ;
let list = {
  data(){
    return {
      formData:{
        oldPwd:'',
        newPwd:'',
        confirmPwd:''
      },
      formData2:{
        oldPwd:'',
        newPwd:'',
        confirmPwd:''
      },
      loading:false
    }
  },
  mounted(){
    that = this;

  },
  methods:{
    onSubmit(){
      this.loading = true
      let formData = {
        oldPwd:this.yzy.encrypt(this.formData.oldPwd),
        newPwd:this.yzy.encrypt(this.formData.newPwd),
        confirmPwd:this.yzy.encrypt(this.formData.confirmPwd),
      }
      this.yzy.post('user/update/pwd',formData,function(res){
        that.loading = false
        if(res.code == 1){
          that.$message.success(res.msg)
          that.formData = that.formData2

        }else{
          that.$message.error(res.msg)
        }
      })
    }
  }
}
module.exports = list
