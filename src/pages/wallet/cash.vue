<template>
  <div>
    <div class="panel-start wrap">
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
          <!-- <el-button type="danger" plain icon="el-icon-delete" @click="del()"></el-button> -->
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
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="trade_no" label="单号">
        <template slot-scope="scope">
          <div>{{scope.row.trade_no || '——'}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="realname" label="姓名"></el-table-column>
      <el-table-column prop="schoolName" label="所在学校"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="cash_fee" label="金额">
        <template slot-scope="scope">
          <div>{{scope.row.cash_fee}}元</div>
        </template>
      </el-table-column>
      <el-table-column prop="msg" label="提现信息"></el-table-column>

      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.state == 1" type="success">提现成功</el-tag>
          <el-tag v-if="scope.row.state == 2" type="warning">提现异常</el-tag>
          <el-tag v-if="scope.row.state == 3" type="danger">提现失败</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="提现时间"></el-table-column>
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
  </div>
</template>
<script>
export default require("./cash.js");
</script>
