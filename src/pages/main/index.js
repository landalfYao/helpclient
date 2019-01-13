const nav = require('./../../assets/js/nav')

let that;
let main = {
  data() {
    return {
      innerHeight: window.innerHeight,
      systemName: this.yzy.systemName,
      topNav: [],
      nav: [],
      defaultMeun: '',
      defaultActive: '',
      linkName: '',
      dtype: -1,
      username:sessionStorage.getItem('username')
    }
  },
  watch: {
    $route() {
      this.linkName = this.$route.name
    }
  },
  mounted() {
    that = this
    this.onResize()
    this.initUser()

  },
  methods: {
    //监听窗口变化
    onResize() {
      window.onresize = function () {
        that.innerHeight = window.innerHeight
      }
    },
    navTo(path) {
      this.$router.push({
        path: path
      })
    },
    //初始化用户
    initUser() {
      if (sessionStorage.getItem('token')) {
        this.initNav()
        this.dtype = sessionStorage.getItem('dtype')
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    },
    //初始化导航
    initNav() {
      this.topNav = nav.topNav
      this.defaultMeun = this.topNav[0].path
      console.log(sessionStorage.getItem('dtype'))
      if (sessionStorage.getItem('dtype') == 2) {
        this.nav = nav.daili1
      } else {
        this.nav = nav.item1
      }

      this.defaultActive = this.nav[0].sub[0].path
      this.$router.push({
        path: this.nav[0].sub[0].path
      })
    },

    selectTopNav(e) {
      this.nav = nav[e]
      this.defaultActive = this.nav[0].sub[0].path
      this.$router.push({
        path: this.nav[0].sub[0].path
      })
    },

    logout() {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('uid')
      sessionStorage.removeItem('userInfo')
      sessionStorage.removeItem('username')
      sessionStorage.removeItem('pwd')
      sessionStorage.removeItem('dtype')
      this.$router.push({
        path: '/login'
      })
    },
    navSelect(e) {
      this.$router.push({
        path: e
      })
    }
  }

}
module.exports = main
