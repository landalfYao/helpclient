let that;
let list = {
  data() {
    return {
      is_show: true,
      formData: {
        is_show: 1,
        cate_name: '',
        sort: '',
        remarks: ''
      },
      formData2: {
        is_show: 1,
        cate_name: '',
        sort: '',
        remarks: ''
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
        is_show: this.is_show ? 1 : 0,
        cate_name: this.formData.cate_name,
        sort: this.formData.sort,
        remarks: this.formData.remarks
      }
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
      this.yzy.post('auth/cate/' + url, formData, function (res) {
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
