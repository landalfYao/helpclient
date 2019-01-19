<template>
  <div>
    <el-card shadow="always" style="width:33.33%;display:inline-block">
      <div>我的总收入</div>
      <div class="ma-t20" style="font-size:30px"> <span class="fo-32">￥</span>{{msg.income_total || 0}}</div>
    </el-card>
    <el-card shadow="always" style="width:33%;display:inline-block">
      <div>账户余额</div>
      <div class="ma-t20" style="font-size:30px"> <span class="fo-32">￥</span>{{(msg.income_total-msg.cash) || 0}}</div>
    </el-card>
    <el-card shadow="always" style="width:33%;display:inline-block">
      <div>已提现</div>
      <div class="ma-t20" style="font-size:30px"> <span class="fo-32">￥</span>{{msg.cash || 0}}</div>
    </el-card>
    <el-table
      :data="tableData"
      ref="multipleTable"
      tooltip-effect="dark"
      border
      size="small"
      style="width: 100%;margin-top:15px"
    >
      <el-table-column prop="order_num" label="单号"></el-table-column>
      <el-table-column prop="p_get" label="平台收益"></el-table-column>
      <el-table-column prop="a_get" label="代理收益"></el-table-column>
      <el-table-column prop="u_get" label="用户收益"></el-table-column>
      <el-table-column prop="rate" label="收益率"></el-table-column>
      <el-table-column prop="total_fee" label="单笔金额"></el-table-column>
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
export default require("./wallet.js");
</script>
