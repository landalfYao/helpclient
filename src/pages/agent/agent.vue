<template>
  <div>
    <div class="panel-start">
      <el-input
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
          <el-button type="success" plain @click="changeUserState('available')">启用用户</el-button>
          <el-button type="warning" plain @click="changeUserState('disable')">禁用用户</el-button>
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
      <el-table-column prop="pk_id" label="ID"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="name" label="代理地"></el-table-column>
      <el-table-column prop="dtype" label="用户类型">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.dtype == 1 ? 'primary':scope.row.dtype == 2?'success':'warning'"
          >{{scope.row.dtype == 1 ? '管理员':scope.row.dtype == 2?'校园代理':'城市代理'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="user_state"
        label="状态"
        column-key="user_state"
        :filters="[{text:'启用',value:'AVAILABLE'},{text:'禁用',value:'DISABLE'}]"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.user_state == 'AVAILABLE' ? 'success':'warning'"
          >{{scope.row.user_state == 'AVAILABLE' ? '可用':'禁用'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="seevisable = true,tempUid = scope.row.pk_id">查看</el-button>
          <el-button type="text" @click="seevisable2 = true,tempAid = scope.row.a_id">运营数据</el-button>
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
    <el-dialog title="信息" :visible.sync="seevisable" width="1000" center>
      <info :uid="tempUid"></info>
    </el-dialog>
    <el-dialog title="运营数据" :visible.sync="seevisable2" width="1120px" center>
      <ov :aid="tempAid"></ov>
    </el-dialog>
  </div>
</template>
<script>
import info from "../user/info/info.vue";
import ov from "../overview/agentview.vue";
let app = require("./agent.js");
app.components = { info, ov };
export default app;
</script>
