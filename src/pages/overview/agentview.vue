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
        <div  style="margin-top:30px">
          
          <div style="width:880px;padding-top:20px" class="border-t ">
            <div class="fo-32 bold">订单状态数据分析</div>
            <div class="ma-t30 ">
              <el-select v-model="sbtype" placeholder="请选择" style="width:110px">
                <el-option label="按月查询" value="month"> </el-option>
                <el-option label="按年查询" value="year"> </el-option>
              </el-select>
              
              <el-date-picker
                v-model="sbdate"
                :type="sbtype"
                @change="sbchange"
                :placeholder="sbtype == 'month'?'选择月':'选择年'">
              </el-date-picker>
            </div>
            <div id="orderNode" style="margin-top:20px"></div>
          </div>
        </div>

        <div  style="margin-top:30px">
          
          <div style="width:880px;padding-top:20px" class="border-t ">
            <div class="fo-32 bold">订单类型数据分析</div>
            <div class="ma-t30 ">
              <el-select v-model="sbtype2" placeholder="请选择" style="width:110px">
                <el-option label="按月查询" value="month"> </el-option>
                <el-option label="按年查询" value="year"> </el-option>
              </el-select>
              
              <el-date-picker
                v-model="sbdate2"
                :type="sbtype2"
                @change="sbchange2"
                :placeholder="sbtype2 == 'month'?'选择月':'选择年'">
              </el-date-picker>
            </div>
            <div id="mountNode" style="margin-top:20px"></div>
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
        <div class="show-code text-center ma-t30">
          <div class="ma-t20">公众号二维码</div>
          <img src="../../assets/img/wx_qr.jpg" width="160px" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default require("./agentview.js");
</script>
