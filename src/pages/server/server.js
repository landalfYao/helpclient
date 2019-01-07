let that;
let list = {
  data() {
    return {
      formData: {
        dl_id: '',
        server_name: '',
        dl_sy: '',
        user_sy: '',
        p_sy: '',
        is_show: 1
      },
      formData2: {
        dl_id: '',
        server_name: '',
        dl_sy: '',
        user_sy: '',
        p_sy: '',
        is_show: 1
      },
      utype: [{
        label: '快递代取'
      }, {
        label: '打印服务'
      }, {
        label: '校园跑腿'
      }, {
        label: '上门维修'
      }, {
        label: '代替服务'
      }, {
        label: '其他帮助'
      }, ],
      loading: false
    }
  },
  mounted() {
    that = this
  },
  methods: {

    onSubmit() {

      if (this.formData.dl_id != '' && this.formData.server_name != '' && this.formData.dl_sy != '' && this.formData.user_sy != '' && this.formData.p_sy != '') {
        this.loading = true
        this.yzy.post('server/add', this.formData, function (res) {
          that.loading = false
          if (res.code == 1) {
            that.$message.success(res.msg)
            that.formData = that.formData2
          } else {
            that.$message.error(res.msg)
          }
        })
      } else {
        that.$message.error('所有项都必填')
      }

    }
  }
}
module.exports = list
