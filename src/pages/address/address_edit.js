let that;
let list = {
  data() {
    return {
      formData: {
          cate_id:'',
        sub_name: '',
        name: '',
        sort: '',
        a_id:''
      },
      formData2: {
        cate_id:'',
        sub_name: '',
        name: '',
        sort: '',
        a_id:''
      },
      loading: false
    }
  },
  mounted() {
    that = this;
    if (this.$route.query.id) {
      this.formData = this.$route.query
    }
  },
  methods: {
    onSubmit() {
      this.loading = true
      let formData = {
        cate_id:this.formData.cate_id,
        sub_name: this.formData.sub_name,
        name: this.formData.name,
        sort: this.formData.sort,
        a_id:sessionStorage.getItem('a_id')
      }
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
      this.yzy.post('address/' + url, formData, function (res) {
        that.loading = false
        if (res.code == 1) {
          that.$message.success(res.msg)
          if (that.$route.query.id) {
            that.$router.go(-1)
          } else {
            that.formData = that.formData2
          }

        } else {
          that.$message.error(res.msg)
        }
      })
    }
  }
}
module.exports = list
