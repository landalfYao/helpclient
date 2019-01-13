let that;
let list = {
  data() {
    return {
      is_show:true,
      formData: {
        is_show: 1,
        name: '',
        sort: '',
        a_id:''
      },
      formData2: {
        is_show: 1,
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
        is_show: this.is_show ? 1:0,
        name: this.formData.name,
        sort: this.formData.sort,
        a_id:sessionStorage.getItem('a_id')
      }
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
      this.yzy.post('address/cate/' + url, formData, function (res) {
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
