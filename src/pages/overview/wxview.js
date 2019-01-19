let that;
let list = {
  props: {
    jdid: {
      type: Number,
      require: false
    }
  },
  watch: {
    jdid() {
      this.getAnalysisData()
    }
  },
  data() {
    return {
      totalData: [],
      msg: {},
    }
  },
  mounted() {
    that = this
    this.getAnalysisData()
  },
  methods: {
    
  
    getAnalysisData() {

      this.yzy.post('anlysis/get/wx', {
        jd_id: this.jdid
      }, function (res) {
        if (res.code == 1) {
          that.msg = res.data
         
        }
      })


    }
  },

}
module.exports = list
