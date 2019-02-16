let that;
let list = {
  data() {
    return {
      multipleSelection: [],
      query: {
        tables: 'wxuser,userinfo',
        fields: 'wxuser.*,userinfo.name,userinfo.card_num,userinfo.card_num,userinfo.cert,userinfo.stu_card,userinfo.id s_id,userinfo.state,userinfo.msg',
        wheres: 'wxuser.id = userinfo.wx_id ',
        sorts: 'userinfo.state asc,wxuser.create_time desc',
        pageIndex: 1,
        pageSize: 10
      },
      centerDialogVisible2: false,
      tempimg: '',
      bmsg: '',
      sid: 0,
      centerDialogVisible: false,
      wheres: [],
      pageSize: this.yzy.pageSize,
      total: 0,
      tableData: [],
      searchList: this.yzy.initFilterSearch(['ID', '昵称', '手机号', '短号'], ['id', 'nick_name', 'phone', 'dphone'])
    }
  },
  mounted() {
    that = this;
    that.getList()
  },
  methods: {
    unpass() {
      if (this.bmsg == '') {
        that.$message({
          type: 'error',
          message: '请填写驳回信息'
        })
      } else {
        that.yzy.post('wx/user/info/unpass', {
          id: that.sid,
          msg: that.bmsg
        }, function (res) {
          that.centerDialogVisible = false
          if (res.code == 1) {
            that.$message({
              type: 'success',
              message: '操作成功'
            })
            that.getList()
          }
        })
      }
    },
    pass(sid) {
      this.$confirm('确认信息无误？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.yzy.post('wx/user/info/pass', {
          id: sid
        }, function (res) {
          if (res.code == 1) {
            that.$message({
              type: 'success',
              message: '操作成功'
            })
            that.getList()
          }
        })
      }).catch(() => {

      });
    },
    getList() {
      let sq = ''
      for (let i in this.wheres) {
        if (this.wheres[i].value && this.wheres[i].value != '') {
          sq += this.wheres[i].value + ' and '
        }
      }
      this.query.wheres = sq + this.query.wheres
      if(sessionStorage.getItem('dtype') == 2){
        this.query.wheres += ' and userinfo.a_id='+sessionStorage.getItem('a_id')
      }
      this.yzy.post('wx/user/get/com', this.query, function (res) {
        if (res.code == 1) {

          that.tableData = res.data.list
          that.total = res.data.total
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    filterChange(e) {
      let temp = -1
      let arr = this.wheres
      let resArr = e['user_state']

      for (let i in resArr) {
        if (resArr[i].indexOf("'") < 0) {
          resArr[i] = "'" + resArr[i] + "'"
        }
      }

      let sq = 'user_state in (' + resArr + ')'
      for (let i in arr) {
        if (arr[i].label == 'user_state') {
          temp = i
        }
      }

      if (resArr.length == 0) {
        if (temp != -1) {
          this.wheres.splice(temp, 1)
        }
      } else {
        if (temp == -1) {
          this.wheres.push({
            label: 'user_state',
            value: sq
          })
        } else {
          this.wheres[temp].value = sq
        }
      }

      this.getList()
    },
    changeUserState(state) {

      if (state == 'disable') {
        this.$confirm('此操作将使用户被迫下线, 是否继续?', '提示', {
          confirmButtonText: '继续',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.update('user/state/' + state, {
            ids: that.filterIds().toString()
          })
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      } else {
        that.update('user/state/' + state, {
          ids: that.filterIds().toString()
        })
      }
    },
    filterIds() {
      let arr = []
      for (let i in this.multipleSelection) {
        arr.push(this.multipleSelection[i].pk_id)
      }
      return arr
    },
    update(url, data) {
      this.yzy.post(url, data, function (res) {
        if (res.code == 1) {
          that.$message({
            type: 'success',
            message: res.msg
          })
          that.getList()
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    searchInput(index) {
      this.wheres = this.yzy.filterSearch(this.searchList[index], this.wheres)
    },
    search() {
      that.getList()
    },
    clear() {
      for (let i in this.wheres) {
        if (this.wheres[i].label != 'user_state') {
          this.wheres[i].value = ''
        }
      }
      that.getList()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(e) {
      this.getList()
    },
    handleCurrentChange(e) {
      this.query.pageIndex = e
      this.getList()
    },
  }
}
module.exports = list
