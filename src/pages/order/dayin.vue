<template>
  <div>
    <div class="panel-start wrap">
      <el-input
        placeholder="搜索"
        v-for="(item,index) in searchList"
        v-model="item.value"
        :placeholder="item.label"
        @blur="searchInput(index)"
        :key="index"
        class="filter-input"
      ></el-input>
      <el-button-group>
        <el-button type="ghost" @click="clear()">清除</el-button>
        <el-button type="primary" @click="search()">搜索</el-button>
      </el-button-group>
    </div>

    <div style="margin-top:15px">
      <div class="panel-between item-center">
        <el-button-group>
          <!-- <el-button type="danger" plain icon="el-icon-delete"></el-button> -->
          <el-button type="success" plain @click="changeUserState('available')">更新</el-button>
          <el-button type="warning" plain @click="changeUserState('disable')">删除</el-button>
        </el-button-group>
        <el-select
          v-model="query.pageSize"
          placeholder="请选择"
          style="width:150px"
          @change="handleSizeChange"
        >
          <el-option
            v-for="item in pageSize"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>

    <el-table
      :data="tableData"
      ref="multipleTable"
      tooltip-effect="dark"
      border
      size="small"
      style="width: 100%;margin-top:15px"
      @selection-change="handleSelectionChange"
      @filter-change="filterChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="order_num" label="序号"></el-table-column>
      <el-table-column prop="nick_name" label="项目名称"></el-table-column>
      <el-table-column prop="phone" label="签约时间"></el-table-column>
      <el-table-column prop="dphone" label="经纪人"></el-table-column>
      <el-table-column prop="des" label="业务员"></el-table-column>
      <el-table-column label="状态" column-key="state">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.state == 1 ? 'success':scope.row.state == 2 ? 'primary':scope.row.state == 3 ? 'warning':'error'"
          >{{scope.row.state == 1 ? '审核中':scope.row.state == 2 ? '已帮助':scope.row.state == 3 ? '已完成':'已取消'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="seevisable = true,tempUid = scope.row.pk_id">签约</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="panel-end">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="query.pageIndex"
        :page-size="query.pageSize"
        layout="total,prev, pager, next, jumper"
        :total="total"
        style="margin-top:15px"
      ></el-pagination>
    </div>
    <el-dialog title="信息" :visible.sync="seevisable" width="700" center>
      <info :uid="tempUid"></info>
    </el-dialog>
  </div>
</template>
<script>
let app = require("./dayin.js");
export default app;
</script>
