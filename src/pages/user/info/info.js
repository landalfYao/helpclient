let that;
let list = {
  props: {
    uid: {
      type: Number,
      require: false
    }
  },
  data() {
    return {
      msg: '',
      list: []
    }
  },
  watch: {
    uid() {
      this.getUserInfo()
      this.getServer()
    }
  },
  mounted() {
    that = this;
    this.getUserInfo()
    this.getServer()
  },
  methods: {
    getUserInfo() {
      this.yzy.post('user/info', {
        uid: this.uid ? this.uid : sessionStorage.getItem('uid')
      }, function (res) {
        if (res.code == 1) {
          that.msg = res.data
        }
      })
    },
    getServer() {
      this.yzy.post('server/get/uid', {
        uid: this.uid ? this.uid : sessionStorage.getItem('uid')
      }, function (res) {
        if (res.code == 1) {
          that.list = res.data
        }
      })
    }
  }
}
module.exports = list
