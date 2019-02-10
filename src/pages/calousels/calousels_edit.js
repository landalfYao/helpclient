let that;
let list = {
  data() {
    return {
      is_show: true,
      formData: {
        state: 0,
        role_name: '',
        sort: '',
        remarks: ''
      },
      formData2: {
        state: 0,
        role_name: '',
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
        state: this.is_show ? 0 : 1,
        role_name: this.formData.role_name,
        sort: this.formData.sort,
        remarks: this.formData.remarks
      }
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
      this.yzy.post('role/' + url, formData, function (res) {
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
