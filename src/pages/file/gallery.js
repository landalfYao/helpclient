let that;
let list = {
  data() {
    return {
      group_id: null,
      fileData: {},
      cates: [],
      page: 1,
      total: 0,
      fileDialog: false,
      NODE_API: this.yzy.NODE_API,
      acStatus: true,
      activeIndex: -1,
      activeMenu: "all",
      addDialog: false,
      loading: false,
      listload: false,
      fileList: [],
      list: [],

      headers: {
        token: sessionStorage.getItem("token"),
        uid: sessionStorage.getItem("uid")
      },
      delload: false,
      submitData: {
        id: "",
        group_name: ""
      }
    };
  },
  props: {
    clear: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    that = this;
    this.getCate();
    this.getFile();
  },
  watch: {
    clear() {

      this.initCheck()
      global.cimgs = []
    }
  },
  methods: {
    handleSuccess(e) {
      this.getFile();
    },
    initCheck() {
      for (var i in this.list) {
        this.list[i].checked = false;
      }
    },
    moveTo(id) {
      if (this.getChecked() == "") {
        that.$message({
          showClose: true,
          message: "您还没选择图片",
          type: "warning"
        });
      } else {
        that.yzy.post('ptfile/update', {
          group_id: id,
          ids: this.getChecked()
        }, function (res) {
          if (res.code == 1) {
            if (that.activeIndex != -1) {
              that.getFile();
            }
            that.initCheck();
            that.$message({
              showClose: true,
              message: res.msg,
              type: "success"
            });
          } else {
            that.$message({
              showClose: true,
              message: res.msg,
              type: "error"
            });
          }
        })

      }
    },
    handleSizeChange(e) {
      this.getFile()
    },
    handleCurrentChange(e) {
      this.page = e
      this.getFile()
    },
    // changePage(e) {
    //   this.page = e;
    //   this.getFile();
    // },
    checkIt(e) {
      if (this.list[e].checked) {
        this.list[e].checked = false;
      } else {
        this.list[e].checked = true;
      }
      global.cimgs = this.getChecked2()
      //   sessionStorage.setItem('imgUrls',JSON.stringify(this.getChecked2()))
    },
    getChecked() {
      var arr = [];
      for (var i in this.list) {
        if (this.list[i].checked) {
          arr.push(this.list[i].id);
        }
      }
      return arr.toString();
    },
    getChecked2() {
      var arr = [];
      for (var i in this.list) {
        if (this.list[i].checked) {
          arr.push(this.list[i]);
        }
      }
      return arr;
    },
    delfile() {
      if (that.getChecked() == "") {
        that.$message({
          showClose: true,
          message: "您还没选择图片",
          type: "warning"
        });
      } else {
        this.$confirm(
          "此操作将永久删除该文件, 是否继续? 若误删请联系开发人员。",
          "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
          that.delload = true;
          that.yzy
            .post("ptfile/del", {
              ids: that.getChecked()
            }, function (res) {
              that.delload = false;
              if (res.code == 1) {
                that.getFile();
                that.$message({
                  showClose: true,
                  message: res.msg,
                  type: "success"
                });
              } else {
                that.$message({
                  showClose: true,
                  message: res.msg,
                  type: "error"
                });
              }
            })

        });
      }
    },
    getFile() {
      this.listload = true;
      this.yzy.post('ptfile/get', {
        pageSize: 10,
        pageIndex: this.page,
        group_id: this.group_id,
        sorts:'create_time desc'
      }, function (res) {
        that.listload = false;
        if (res.code == 1) {
          for (let i in res.data.list) {
            res.data.list[i].checked = false;
          }
          that.list = res.data.list;
          that.total = res.data.total;
        } else {
          that.$message({
            showClose: true,
            message: res.msg,
            type: "error"
          });
        }
      })

    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    upgroup() {
      this.acStatus = false;
      this.addDialog = true;
      this.submitData.group_name = this.cates[this.activeIndex].group_name;
      this.submitData.id = this.cates[this.activeIndex].id;
    },
    menuSelect(e) {
      var data = {
        admin_id: sessionStorage.getItem("uid")
      };
      if (e == "all") {
        this.group_id = "";
        this.activeIndex = -1;
      } else if (e == "wei") {
        this.group_id = "is null";
        this.activeIndex = -2;
      } else {
        this.activeIndex = e.substring(0, e.indexOf("-"));
        this.group_id = '=' + this.cates[this.activeIndex].id;
        this.submitData.id = this.cates[this.activeIndex].id
        data.group_id = this.group_id;
      }

      this.getFile();
      this.activeMenu = e;
    },
    getCate() {
      this.yzy.post('ptfile/group/get', {
        pageSize: 1000,
        pageIndex: 1
      }, function (res) {
        if (res.code == 1) {

          that.cates = res.data.list;
          if (!that.acStatus && that.activeIndex != -1) {
            that.activeMenu =
              that.activeIndex +
              "-" +
              that.cates[that.activeIndex].group_name;
          }
        } else {
          that.$message({
            showClose: true,
            message: res.msg,
            type: "error"
          });
        }
      })

    },
    del() {
      this.$confirm(
        "此操作将永久删除该文件, 是否继续? 若误删请联系开发人员。",
        "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        that.yzy.post('ptfile/group/del', {
          ids: that.cates[that.activeIndex].id
        }, function (res) {
          if (res.code == 1) {
            that.$message({
              showClose: true,
              message: res.msg,
              type: "success"
            });
            that.menuSelect("all");
            that.getCate();
          }
        })

      });
    },
    submitCate() {
      this.loading = true;
      var url;
      if (this.acStatus) {
        url = "ptfile/group/add";
      } else {
        url = "ptfile/group/update";
      }
      this.yzy.post(url, this.submitData, function (res) {
        that.loading = false;
        that.addDialog = false;
        if (res.code == 1) {
          that.$message({
            showClose: true,
            message: res.msg,
            type: "success"
          });
          that.getCate();
        }
      })

    }
  }
};
module.exports = list
