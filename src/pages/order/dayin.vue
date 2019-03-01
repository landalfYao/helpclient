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
        <el-button type="ghost" @click="getList()">刷新</el-button>
      </el-button-group>
    </div>

    <div style="margin-top:15px">
      <div class="panel-between item-center">
        <div v-if="jdr.length != 0">
          <div>接单人</div>
          <div class="panel-start item-center">
            <img :src="jdr[0]" width="30px" height="30px" alt>
            <div class="ma-l10">{{jdr[1]}}</div>
            <el-button type="text" class="ma-l10" @click="dialogVisible = true">更换接单人</el-button>
          </div>
        </div>
        <el-button-group>
          <!-- <el-button type="danger" plain icon="el-icon-delete"></el-button> -->
          <!-- <el-button type="success" plain @click="changeUserState('available')">接单</el-button>-->
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
      <el-table-column prop="order_num" label="订单编号"></el-table-column>
      <el-table-column prop="nick_name" label="下单用户"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="dphone" label="短号"></el-table-column>
      <el-table-column prop="des" label="信息"></el-table-column>
      <el-table-column prop="mu" label="目的地"></el-table-column>
      <el-table-column prop="file" label="文件名"></el-table-column>
      <el-table-column prop="page" label="页数" width="55"></el-table-column>
      <el-table-column label="印刷">
        <template slot-scope="scope">
          <el-tag
            size="mini"
            :type="scope.row.cai == 1 ? 'success':'info'"
          >{{scope.row.cai == 1 ? '彩印':'黑白'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="total_fee" label="已支付"></el-table-column>
      <el-table-column label="状态" column-key="state">
        <template slot-scope="scope">
          <el-tag
            size="mini"
            :type="scope.row.state == 1 ? 'success':scope.row.state == 2 ? 'primary':scope.row.state == 3 ? 'warning':'error'"
          >{{scope.row.state == 1 ? '需要帮助':scope.row.state == 2 ? '已帮助':scope.row.state == 3 ? '已完成':'已取消'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="jdclick(scope.row)" v-if="scope.row.state == 1">接单</el-button>
          <el-button type="text" @click="wcclick(scope.row.id)" v-if="scope.row.state == 2">完成</el-button>
          <el-button
            v-if="scope.row.state != 1 && scope.row.state != 0"
            type="text"
            @click="download(scope.row.file)"
          >下载</el-button>
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
    <el-dialog title="接单员信息" :visible.sync="dialogVisible" width="900px">
      <wxuser></wxuser>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeJd(),dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
let app = require("./dayin.js");
import wxuser from "../wxuser/jdlist/jdlist.vue";
app.components = { wxuser };
export default app;
</script>
