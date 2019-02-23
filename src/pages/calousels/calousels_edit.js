let that;
let list = {
  data() {
    return {
      centerDialogVisible: false,
      is_show: false,
      api: this.yzy.NODE_API,
      urls: [{
        label: '文章详情页',
        path: '/pages/richtext/richtext'
      },{
          label: '关于我们',
          path: '/pages/mine/about/about'
        },
        {
          label: '提现',
          path: '/pages/mine/cash/cash'
        },
        {
          label: '选择学校页',
          path: '/pages/area/area'
        },
        {
          label: '申请接单页',
          path: '/pages/register/register'
        },
        {
          label: '我的信息页',
          path: '/pages/mine/info/info'
        },
        {
          label: '我的地址页',
          path: '/pages/mine/address/address'
        },
        {
          label: '订单详情页',
          path: '/pages/order/detail/detail'
        },
        {
          label: '打印服务页',
          path: '/pages/dayin/dayin?index=0'
        },
        {
          label: '快递代取',
          path: '/pages/daiqu/daiqu?index=1'
        },
        {
          label: '快递代取',
          path: '/pages/daiqu/daiqu?index=1'
        },
        {
          label: '校园跑腿',
          path: '/pages/other/other?label=校园跑腿&index=2'
        },
        {
          label: '上门维修',
          path: '/pages/other/other?label=上门维修&index=3'
        },
        {
          label: '代替服务',
          path: '/pages/other/other?label=代替服务&index=4'
        },
        {
          label: '其他帮助',
          path: '/pages/other/other?label=其他帮助&index=5'
        },

      ],
      formData: {
        is_show: 0,
        cover: '',
        sort: '',
        admin_id: '',
        remark: '',
        path: '',
        company: '',
        end_time: '',
        params: '',
        a_id:''
      },
      clear: false,
      formData2: {
        is_show: 0,
        cover: '',
        sort: '',
        admin_id: '',
        remark: '',
        path: '',
        company: '',
        end_time: '',
        a_id:''
      },
      loading: false
    }
  },
  mounted() {
    that = this;
    if (this.$route.query.id) {
      this.formData = this.$route.query
      this.is_show = this.$route.query.is_show == 1 ? true:false
    }
  },
  methods: {
    chooseIt() {
      this.formData.cover = global.cimgs[0].file_url;
      this.clear = !this.clear;
      this.centerDialogVisible = false;
    },
    onSubmit() {
      this.loading = true
      let formData = this.formData
      this.formData.admin_id = sessionStorage.getItem("uid")
      formData.is_show = this.is_show ? 1 : 0
      if (this.formData.params) {
        formData.path += '?' + formData.params
      }
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
      this.yzy.post('calousels/' + url, formData, function (res) {
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
