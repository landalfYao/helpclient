let that;
let list = {
  props: {
    uid: {
      type: Number || String,
      require: false
    }
  },
  data() {
    return {
      msg: {
        username: '',
        user_state: 'DISABLE',
        create_time: '',
        phone: ''
      },
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
    navTo(path, id) {
      this.$router.push({
        path: path,
        query: {
          id: id
        }
      })
    },
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
          for (let i in res.data) {
            if (res.data[i].jdr != '' && res.data[i].jdr != null) {
              res.data[i].jdr = res.data[i].jdr.split(',')
            } else {
              res.data[i].jdr = []
            }
          }
          that.list = res.data
          global.dlserver = res.data
        }
      })
    }
  }
}
module.exports = list
