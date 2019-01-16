let that;
let list = {
  data() {
    return {
      multipleSelection: [],
      query: {
        wheres: '',
        sorts: 'sort asc',
        pageIndex: 1,
        pageSize: 10
      },
      wheres: [],
      pageSize: this.yzy.pageSize,
      total: 0,
      tableData: [],
      searchList: this.yzy.initFilterSearch(['ID', '分组ID'], ['id', 'cate_id'])
    }
  },
  mounted() {
    that = this;
    that.getList()
  },
  methods: {
    del() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.yzy.post('address/del', {
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
      let sq = ''
      for (let i in this.wheres) {
        if (this.wheres[i].value && this.wheres[i].value != '') {
          sq += this.wheres[i].value + ' and '
        }
      }

      this.query.wheres = sq + ' is_delete=0 and a_id=' + sessionStorage.getItem('a_id')
      this.yzy.post('address/get', this.query, function (res) {
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

    filterIds() {
      let arr = []
      for (let i in this.multipleSelection) {
        arr.push(this.multipleSelection[i].id)
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
