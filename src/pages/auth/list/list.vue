<template>
  <div>

    <div  class="panel-start wrap">
      <el-input placeholder="搜索" v-for="(item,index) in searchList" v-model="item.value" :placeholder="item.label" @blur="searchInput(index)" :key="index" class="filter-input"></el-input>
      <el-button-group >
        <el-button type="ghost" @click="clear()">清除</el-button>
        <el-button type="primary" @click="search()">搜索</el-button>
      </el-button-group>
    </div>

    <div style="margin-top:15px">
      <div class="panel-between item-center">
        <el-button-group>
          <!-- <el-button type="danger" plain icon="el-icon-delete"></el-button> -->
          <el-button type="success" plain @click="changeUserState('available')">新增类目</el-button>
          <el-button type="warning" plain @click="changeUserState('disable')">新增权限</el-button>
        </el-button-group>
        <el-select v-model="query.pageSize" placeholder="请选择" style="width:150px" @change="handleSizeChange">
          <el-option
            v-for="item in pageSize"
            :key="item.label"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>


    <el-table :data="tableData" ref="multipleTable" tooltip-effect="dark"
     border size="small" style="width: 100%;margin-top:15px"
    @selection-change="handleSelectionChange" @filter-change="filterChange">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="ID" > </el-table-column>
      <el-table-column prop="name" label="名称" > </el-table-column>
      <el-table-column prop="api_url" label="地址" > </el-table-column>
      <el-table-column prop="remarks" label="备注" > </el-table-column>
      <el-table-column prop="is_show" label="状态" column-key="user_state"
        :filters="[{text:'显示',value:1},{text:'关闭',value:0}]" >
        <template slot-scope="scope">
          <el-tag :type="scope.row.is_show == 1 ? 'success':'warning'" v-if="scope.row.is_show == 0 || scope.row.is_show == 1">{{scope.row.is_show == 1 ? '显示':'关闭'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="序号" label="sort" > </el-table-column>
      <el-table-column prop="ut" label="最近更新" > </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button type="text" >修改</el-button>
        </template>
      </el-table-column>
    </el-table>



  </div>
</template>
<script>
export default require('./list.js')
</script>
