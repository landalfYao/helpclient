
let that ;
let list = {
  data(){
    return {
      formData:{
        atype:'',
        name:'',
        agent_get:'',
        p_get:'',
        sort:''
      },
      formData2:{
        atype:'',
        name:'',
        agent_get:'',
        p_get:'',
        sort:''
      },
      loading:false
    }
  },
  mounted(){
    that = this;
    if(this.$route.query.pk_id){
      this.formData = this.$route.query
    }
  },
  methods:{
    onSubmit(){
      this.loading = true
      let formData = {
        atype:this.formData.atype,
        name:this.formData.name,
        agent_get:this.formData.agent_get,
        p_get:this.formData.p_get,
        sort:this.formData.sort
      }
      let url = 'add'
      if(this.$route.query.pk_id){
        url='update'
        formData.pkId = this.formData.pk_id
      }
      this.yzy.post('area/'+url,formData,function(res){
        that.loading = false
        if(res.code == 1){
          that.$message.success(res.msg)
          if(that.$route.query.pk_id){
            that.$router.go(-1)
          }else{
            that.formData = that.formData2
          }

        }else{
          that.$message.error(res.msg)
        }
      })
    }
  }
}
module.exports = list
