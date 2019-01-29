let that;
let list = {
  data() {
    return {
      is_show: true,
      formData: {
        auth_url: '',
        auth_name: '',
        remarks: '',
        cate_id: ''
      },
      formData2: {
        auth_url: '',
        auth_name: '',
        remarks: '',
        cate_id: ''
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
        auth_url: this.formData.auth_url,
        auth_name: this.formData.auth_name,
        remarks: this.formData.remarks,
        cate_id: this.formData.cate_id,
      }
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
      this.yzy.post('auth/' + url, formData, function (res) {
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
