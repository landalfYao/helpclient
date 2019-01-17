<template>
  <div>
    <div class="panel-between">
      <div class="o-left">
        <!-- 总数S -->
        <div class="panel-between">
          <div v-for="(item,index) in totalData" :key="index" :class="'opanl '+item.style">
            <div class="w-100 text-center">
              <Icon :type="item.icon" size="30" :color="item.color"/>
              <div class="fo-w fo-44 bold">{{item.value}}</div>
              <div class="fo-w fo-26">{{item.label}}</div>
            </div>
          </div>
        </div>
        <!-- 总数E -->
        <!-- 实时数据 S -->
        <div class="eol ma-t30">
          <div class="w-100 panel-between">
            <div
              class="panel-start item-center"
              style="width:25%"
              v-for="(item,index) in newData"
              :key="index"
            >
              <div class="icon-ss">
                <Icon :type="item.icon" size="25" color="#0099CC"/>
              </div>
              <div class="ma-l30">
                <div>{{item.label}}</div>
                <div class="fo-40">{{item.value}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 实时数据 E -->
        <!-- 实时数据 S -->
        <div class="eol ma-t30">
          <div class="w-100 panel-between">
            <div
              class="panel-start item-center"
              style="width:25%"
              v-for="(item,index) in newData2"
              :key="index"
            >
              <div class="icon-ss">
                <Icon :type="item.icon" size="25" color="#0099CC"/>
              </div>
              <div class="ma-l30">
                <div>{{item.label}}</div>
                <div class="fo-40">{{item.value}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 实时数据 E -->
        <div class="panel-start">
          <div style="width:203px;margin-right:20px">
            <div class="ma-t30">订单类型总数量</div>
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
              :data="msg.order"
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
              :data="msg.orderMonth"
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
      <div class="o-right">
        <!-- <div class="show-code text-center">
          <div class="ma-t20">手机查看小程序数据</div>
          <img src="../../assets/img/qrcode-wx.png" width="170px" alt>
        </div>-->
        <div class="show-code text-center">
          <div class="ma-t20">小程序二维码</div>
          <img src="../../assets/img/qrcode.jpg" width="160px" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default require("./agentview.js");
</script>
