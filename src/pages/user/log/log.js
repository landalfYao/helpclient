let that;
let list = {
  data() {
    return {
      multipleSelection: [],
      query: {
        wheres: '',
        sorts: 'create_time desc',
        pageIndex: 1,
        pageSize: 10
      },
      wheres: [],
      pageSize: this.yzy.pageSize,
      total: 0,
      tableData: [],
      searchList: this.yzy.initFilterSearch(['操作人ID', '操作时间', '描述', 'API', 'CODE', '操作表', '操作列'], ['uid', 'create_time', 'des', 'api_url', 'op_code', 'fi_table', 'table_id'])
    }
  },
  mounted() {
    that = this;
    that.getList()
  },
  methods: {

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

      this.query.wheres = sq + ' is_delete=0 '
      this.yzy.post('user/log/get', this.query, function (res) {
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
