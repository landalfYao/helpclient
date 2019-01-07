let that;
let list = {
  data() {
    return {
      formData: {
        username: '',
        password: '',
        checkPwd: '',
        dtype: '',
        dcity: '',
        phone: ''
      },
      formData2: {
        username: '',
        password: '',
        checkPwd: '',
        dtype: '',
        a_id: '',
        phone: '',
        deadline: ''
      },
      utype: [{
        label: '管理员',
        value: 1
      }, {
        label: '校园代理',
        value: 2
      }],
      loading: false
    }
  },
  mounted() {
    that = this
  },
  methods: {
    onSubmit() {
      this.loading = true
      let formData = {
        username: this.formData.username,
        password: this.yzy.encrypt(this.formData.password),
        checkPwd: this.yzy.encrypt(this.formData.checkPwd),
        dtype: this.formData.dtype,
        dcity: this.formData.dcity,
        phone: this.formData.phone
      }
      formData.password = this.yzy.encrypt(formData.password)
      formData.checkPwd = this.yzy.encrypt(formData.checkPwd)
      this.yzy.post('user/register', formData, function (res) {
        that.loading = false
        if (res.code == 1) {
          that.$message.success(res.msg)
          that.formData = that.formData2
        } else {
          that.$message.error(res.msg)
        }
      })
    }
  }
}
module.exports = list
