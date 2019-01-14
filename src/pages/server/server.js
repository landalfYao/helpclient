let that;
let list = {
  data() {
    return {
      price: ['', '', ''],
      formData: {
        dl_id: '',
        server_name: '',
        dl_sy: '',
        user_sy: '',
        p_sy: '',
        is_show: 1,
        des: ''
      },
      formData2: {
        dl_id: '',
        server_name: '',
        dl_sy: '',
        user_sy: '',
        p_sy: '',
        is_show: 1,
        des: ''
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
    if (this.$route.query.id) {
      this.getMsg()
    }
  },
  methods: {
    getMsg() {
      this.yzy.post('server/get/id', {
        id: this.$route.query.id,
      }, function (res) {
        if (res.code == 1) {
          that.formData = res.data[0]
          if (res.data[0].server_name == '快递代取' || res.data[0].server_name == '打印服务') {
            that.price = res.data[0].price_gui.split(',')
          }

        }
      })
    },

    onSubmit() {

      if (this.formData.dl_id != '' && this.formData.server_name != '' && this.formData.dl_sy != '' && this.formData.user_sy != '' && this.formData.p_sy != '') {
        this.loading = true
        if (this.formData.server_name == '快递代取' || this.formData.server_name == '打印服务') {
          this.formData.price_gui = this.price.toString()
        } else {
          this.formData.price_gui = false
        }
        let url = 'add'
        if (this.$route.query.id) {
          url = 'update'
        }
        this.yzy.post('server/' + url, this.formData, function (res) {
          that.loading = false
          if (res.code == 1) {
            that.$message.success(res.msg)

            if (this.$route.query.id) {
              that.$router.go(-1)
            } else {
              that.formData = that.formData2
              that.price = {
                p1: '',
                p2: '',
                p3: ''
              }
            }

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