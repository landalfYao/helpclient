<template>
  <div class="w-100">
    <div style="margin:auto">
      <el-form
        :model="msg"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="left"
        style="width:500px;"
      >
        <el-form-item label="用户名">
          <el-input readonly v-model="msg.username"></el-input>
        </el-form-item>
        <el-form-item label="用户状态">
          <el-switch v-model="msg.user_state" active-value="AVAILABLE" inactive-value="DISABLE"></el-switch>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-input readonly v-model="msg.create_time"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input readonly v-model="msg.phone"></el-input>
        </el-form-item>
      </el-form>

      <el-table
        :data="list"
        ref="multipleTable"
        tooltip-effect="dark"
        border
        size="small"
        style="width: 100%;margin-top:15px"
      >
        <el-table-column prop="server_name" label="服务项"></el-table-column>
        <el-table-column prop="user_sy" label="用户收益">
          <template slot-scope="scope">
            <span>{{scope.row.user_sy*100 + '%'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="dl_sy" label="代理收益">
          <template slot-scope="scope">
            <span>{{scope.row.dl_sy*100 + '%'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="p_sy" label="平台收益">
          <template slot-scope="scope">
            <span>{{scope.row.p_sy*100 + '%'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="p_sy" label="是否开启">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.is_show" :active-value="1" :inactive-value="0"></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="price_gui" label="价格"></el-table-column>
        <el-table-column prop="des" label="描述"></el-table-column>
        <el-table-column label="默认接单人">
          <template slot-scope="scope">
            <div>
              <img v-if="scope.row.jdr.length>0" :src="scope.row.jdr[0]" height="40px">
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="navTo('/server',scope.row.id)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default require("./info.js");
</script>
