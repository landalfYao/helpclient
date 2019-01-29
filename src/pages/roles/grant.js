let that;
let list = {
  data() {
    return {
      centerDialogVisible: false,
      multipleSelection: [],
      query: {
        fields: 'role_auth.*,auths.auth_url,auths.auth_name',
        wheres: '',
        sorts: 'role_auth.create_time desc',
        pageIndex: 1,
        pageSize: 10
      },
      title: '',
      wheres: [],
      pageSize: this.yzy.pageSize,
      total: 0,
      tableData: [],
      searchList: this.yzy.initFilterSearch([], []),
      cate: [],
      cateProps: {},
      treeload: false
    }
  },
  mounted() {
    that = this;
    this.title = this.$route.query.title
    that.getList()
  },
  methods: {

    getCate() {
      this.yzy.post('auth/cate/get', {
        pageIndex: 1,
        pageSize: 1000,
        sorts: 'sort asc',
        wheres: 'is_show = 1 and is_delete = 0'
      }, function (res) {
        if (res.code == 1) {
          for (let i in res.data.list) {
            res.data.list[i].children = []
            res.data.list[i].label = res.data.list[i].cate_name
          }
          that.cate = res.data.list
          that.getAuth(0, that.cate[0].id)
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    nodeClick(e) {
      if (e.children && e.children.length == 0) {
        let arr = this.cate
        let temp = -1
        for (let i in arr) {
          if (arr[i].cate_name == e.cate_name) {
            temp = i
          }
        }
        that.getAuth(temp, e.id)
      }
    },
    submitNode() {
      let arr = this.$refs.mtree.getCheckedKeys()
      let arr2 = []
      for (let i in arr) {
        if (arr[i] != undefined) {
          arr2.push(arr[i])
        }
      }
      if (arr2.length == 0) {
        that.$message({
          type: 'error',
          message: '请选择'
        })
      } else {
        this.treeload = true
        this.yzy.post('auth/grant',{
          auth_ids:arr2.toString(),
          role_id:this.$route.query.id
        },function(res){
          that.centerDialogVisible = false
          that.treeload = false
          if(res.code == 1){
            that.$message({
              type: 'success',
              message: res.msg
            })
            that.getList()
          }else{
            that.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }
    },
    getAuth(index, cate_id) {
      this.treeload = true
      this.yzy.post('auth/get', {
        pageIndex: 1,
        pageSize: 1000,
        wheres: 'is_delete = 0 and cate_id=' + cate_id
      }, function (res) {
        that.treeload = false
        if (res.code == 1) {
          for (let i in res.data.list) {
            res.data.list[i].label = res.data.list[i].auth_name + ' ' + res.data.list[i].auth_url
            res.data.list[i].auid = res.data.list[i].id
          }
          that.cate[index].children = res.data.list
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    del() {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.yzy.post('auth/grant/del', {
          ids: that.filterIds()
        }, function (res) {
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
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    navTo(path, row) {
      this.$router.push({
        path: path,
        query: row
      })
    },
    getList() {


      this.query.wheres = 'role_auth.is_delete=0 and role_auth.auth_id = auths.id and role_auth.role_id=' + this.$route.query.id
      this.yzy.post('auth/grant/get', this.query, function (res) {
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
    updateState(show) {
      if (this.multipleSelection.length == 0) {
        that.$message({
          type: 'warning',
          message: '您还没有选择任何一项'
        })
      } else {
        this.yzy.post('role/' + show, {
          ids: this.filterIds().toString()
        }, function (res) {
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
      }

    },
    filterIds() {
      let arr = []
      for (let i in this.multipleSelection) {
        arr.push(this.multipleSelection[i].id)
      }
      return arr
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
