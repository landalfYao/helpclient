<template>
  <div>
    <div class="panel-between">
      <div class="o-left">
        
        
        
        <div class="panel-start">
          <div style="width:203px;margin-right:20px">
            <div class="ma-t30">接单类型总数量</div>
            <el-table
              :data="msg.orderType"
              ref="multipleTable"
              tooltip-effect="dark"
              border
              size="small"
              style="width: 100%;margin-top:8px"
            >
              <el-table-column prop="title" label="类型"></el-table-column>
              <el-table-column prop="total" label="数量"></el-table-column>
            </el-table>
          </div>
          <div style="width:203px;margin-right:20px">
            <div class="ma-t30">订单类型月度数量</div>
            <el-table
              :data="msg.orderTypeMonth"
              ref="multipleTable"
              tooltip-effect="dark"
              border
              size="small"
              style="width: 100%;margin-top:8px"
            >
              <el-table-column prop="title" label="类型"></el-table-column>
              <el-table-column prop="total" label="数量"></el-table-column>
            </el-table>
          </div>
          <div style="width:203px;margin-right:20px">
            <div class="ma-t30">订单总数量</div>
            <el-table
              :data="msg.jdorder"
              ref="multipleTable"
              tooltip-effect="dark"
              border
              size="small"
              style="width: 100%;margin-top:8px"
            >
              <el-table-column prop="state" label="状态">
                <template slot-scope="scope">
                  <div>{{scope.row.state == 0?'待付款':scope.row.state == 1?'已付款':scope.row.state == 2?'已接单':scope.row.state == 3?'已完成':'已取消'}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="total" label="数量"></el-table-column>
            </el-table>
          </div>
          <div style="width:203px;margin-right:20px">
            <div class="ma-t30">订单月度数量</div>
            <el-table
              :data="msg.jdorderDaily"
              ref="multipleTable"
              tooltip-effect="dark"
              border
              size="small"
              style="width: 100%;margin-top:8px"
            >
              <el-table-column prop="state" label="状态">
                <template slot-scope="scope">
                  <div>{{scope.row.state == 0?'待付款':scope.row.state == 1?'已付款':scope.row.state == 2?'已接单':scope.row.state == 3?'已完成':'已取消'}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="total" label="数量"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default require("./wxview.js");
</script>
