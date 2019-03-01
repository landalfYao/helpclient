let that;
let login = {
  data() {
    return {
      systemName: this.yzy.systemName,
      loading: false,
      formData: {
        username: '',
        password: ''
      }
    }
  },
  mounted() {
    that = this
  },
  methods: {
    submitForm() {
      if (this.formData.username == '') {
        this.$message({
          type: 'error',
          message: '请输入账号'
        })
      } else if (this.formData.password == '') {
        this.$message({
          type: 'error',
          message: '请输入密码'
        })
      } else {
        that.$router.push({
          path: '/'
        })
        this.loading = true
        let pwd = this.yzy.encrypt(this.formData.password)
        this.yzy.http('user/login', 'POST', {
          username: this.formData.username,
          password: pwd
        }, function (res) {
          that.loading = false
          if (res.code == 1) {
            that.$message({
              type: 'success',
              message: res.msg
            })
            sessionStorage.setItem('token', res.token)
            sessionStorage.setItem('uid', res.data.pk_id)
            global.uid = res.data.pk_id
            sessionStorage.setItem('userInfo', res.data)
            sessionStorage.setItem('username', res.data.username)
            global.pwd = pwd
            sessionStorage.setItem('dtype', res.data.dtype)
            sessionStorage.setItem('a_id', res.data.a_id)
            that.$router.push({
              path: '/'
            })
          } else {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('uid')
            sessionStorage.removeItem('userInfo')
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('pwd')
            sessionStorage.removeItem('dtype')
            sessionStorage.removeItem('a_id')
            that.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }
    }
  }
}
module.exports = login
