let that ;
let list = {
  data ( ) {
    return {
      multipleSelection:[],
      query:{
        wheres:'',
        sorts:'update_datetime desc,create_datetime desc',
        pageIndex:1,
        pageSize:10
      },
      wheres:[],
      cates:[],
      pageSize:this.yzy.pageSize,
      total:0,
      tableData: [],
      searchList:this.yzy.initFilterSearch(['ID','用户名','昵称','手机号','邮箱'],['pk_id','username','nick_name','phone_number','email'])
    }
  },
  mounted(){
    that = this;
    that.getList()
  },
  methods:{
    getList(){
      let sq = ''
      for(let i in this.wheres){
        if(this.wheres[i].value && this.wheres[i].value!= ''){
          sq += this.wheres[i].value + ' and '
        }
      }
      if(sq != ''){
        this.query.wheres = sq.substring(0,sq.length-4)
      }else{
        this.query.wheres = ''
      }
      if(global.authList && global.authList.length > 0){
        let rl = global.authList
        let arr = []
        for(let i in rl){
          arr.push({name:rl[i].cate_name,sort:rl[i].sort,is_show:rl[i].is_show,ut:rl[i].update_datetime,cate_id:rl[i].pk_id,remarks:rl[i].remarks,api_url:'无',id:rl[i].pk_id,iscate:true})
          for(let j in rl[i].auths){
            arr.push({id:rl[i].auths[j].pk_id,name:'——'+rl[i].auths[j].name,auth_id:rl[i].auths[j].pk_id,cate_id:rl[i].auths[j].cate_id,api_url:rl[i].auths[j].api_url,remarks:'无',ut:rl[i].auths[j].create_datetime,iscate:false})
          }
        }
        that.cates  = global.authList
        that.tableData = arr
      }else{
        this.yzy.get('auth/cate/get',this.query,function(res){

          if(res.code == 1){
            let rl = res.data
            let arr = []
            let arr2 = []
            for(let i in rl){
              arr.push({name:rl[i].cate_name,sort:rl[i].sort,is_show:rl[i].is_show,ut:rl[i].update_datetime,cate_id:rl[i].pk_id,remarks:rl[i].remarks,api_url:'无',id:rl[i].pk_id,iscate:true})
              for(let j in rl[i].auths){
                arr.push({id:rl[i].auths[j].pk_id,name:'——'+rl[i].auths[j].name,auth_id:rl[i].auths[j].pk_id,cate_id:rl[i].auths[j].cate_id,api_url:rl[i].auths[j].api_url,remarks:'无',ut:rl[i].auths[j].create_datetime,iscate:false})
              }
            }
            global.authList = res.data
            that.cates = res.data
            that.tableData = arr
          }else{
            that.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }

    },
    filterChange(e){
      let temp = -1
      let arr = this.wheres
      let resArr = e['user_state']

      for(let i in resArr){
        if(resArr[i].indexOf("'")<0){
          resArr[i] = "'"+resArr[i]+"'"
        }
      }

      let sq = 'user_state in ('+resArr+')'
      for(let i in arr){
        if(arr[i].label == 'user_state'){
          temp = i
        }
      }

      if(resArr.length == 0){
        if(temp != -1){
          this.wheres.splice(temp,1)
        }
      }else{
        if(temp == -1){
          this.wheres.push({label:'user_state',value:sq})
        }else{
          this.wheres[temp].value = sq
        }
      }

      this.getList()
    },
    changeUserState(state){

      if(state == 'disable'){
        this.$confirm('此操作将使用户被迫下线, 是否继续?', '提示', {
          confirmButtonText: '继续',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.update('user/state/'+state,{ids:that.filterIds().toString()})
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }else{
        that.update('user/state/'+state,{ids:that.filterIds().toString()})
      }
    },
    filterIds(){
      let arr = []
      for(let i in this.multipleSelection){
        arr.push(this.multipleSelection[i].pk_id)
      }
      return arr
    },
    update(url,data){
      this.yzy.post(url,data,function(res){
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
    },
    searchInput(index){
      this.wheres = this.yzy.filterSearch(this.searchList[index],this.wheres)
    },
    search(){
      that.getList()
    },
    clear(){
      for(let i in this.wheres){
        if(this.wheres[i].label != 'user_state'){
          this.wheres[i].value = ''
        }
      }
      that.getList()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(e){
      this.getList()
    },
    handleCurrentChange(e){
      this.query.pageIndex = e
      this.getList()
    },
  }
}
module.exports = list
