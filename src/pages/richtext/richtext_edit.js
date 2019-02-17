let that;
let list = {
  data() {
    return {
      is_show: false,
      formData: {
        author: '',
        content: '',
        admin_id: '',
        remarks: '',
        title: '',
        cover:'',
        phone:'',
        contact:''
      },
      dialogTableVisible:false,
      dialogTableVisible2:false,
      content:'',
      clear:false,
      editorOption: {
        modules: {
          toolbar: "#toolbar"
        }
      },
      formData2: {
        author: '',
        content: '',
        admin_id: '',
        remarks: '',
        title: '',
        cover:'',
        phone:'',
        contact:''
      },
      loading: false
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    that = this;
    if (this.$route.query.id) {
      this.formData = this.$route.query
    }
  },
  methods: {
    chooseIt() {
      this.formData.cover = global.cimgs[0].file_url;
      this.clear = !this.clear;
      this.dialogTableVisible2 = false;
    },
    onSubmit() {
      this.loading = true
      let formData = this.formData
      
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
    //   console.log(formData)
      this.yzy.post('richtext/' + url, formData, function (res) {
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
    },
    imgClick(){
        this.dialogTableVisible = true;
      },
      getModelImgs() {
      var li = global.cimgs;
      var gs = "";
      for (var i in li) {
        if ( li[i].mimetype.indexOf('image') > -1  ) {
          this.editor.insertEmbed(this.formData.content.length, "image", li[i].file_url);
        } else {
          gs += li[i].mimetype + " ";
        }
      }
      if (gs != "") {
        this.$Modal.error({
          title: "格式错误",
          content: "富文本不支持" + gs
        });
      }
      this.formData.content=this.formData.content.replace('<img','<img style="margin:auto;" ')
      this.dialogTableVisible = false;
      global.cimgs = []
      this.clear = !this.clear
    },
  }
}
module.exports = list
