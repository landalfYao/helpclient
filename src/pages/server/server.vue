<template>
  <el-form
    ref="form"
    :model="formData"
    label-width="80px"
    style="width:400px;margin:auto;margin-top:50px"
  >
    <el-form-item label="服务项">
      <el-select v-model="formData.server_name" placeholder="请选择" style="width:100%">
        <el-option v-for="item in utype" :key="item.label" :label="item.label" :value="item.label"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="价格" v-if="formData.server_name == '快递代取'">
      <el-row :gutter="0">
        <el-col :span="8">
          <el-input v-model="price[0]" placeholder="小件价格"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="price[1]" placeholder="中件价格"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="price[2]" placeholder="大件价格"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="价格" v-if="formData.server_name == '打印服务'">
      <el-row :gutter="0">
        <el-col :span="8">
          <el-input v-model="price[0]" placeholder="黑白印"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="price[1]" placeholder="彩印"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="price[2]" placeholder="跑腿费"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="代理ID">
      <el-input v-model="formData.dl_id" placeholder="代理ID"></el-input>
    </el-form-item>
    <el-form-item label="用户收益">
      <el-input v-model="formData.user_sy" type="number" placeholder="用户收益"></el-input>
    </el-form-item>
    <el-form-item label="代理收益">
      <el-input v-model="formData.dl_sy" type="number" placeholder="代理收益"></el-input>
    </el-form-item>
    <el-form-item label="平台收益">
      <el-input v-model="formData.p_sy" type="number" placeholder="平台收益"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="formData.des" placeholder="描述"></el-input>
    </el-form-item>
    <el-form-item label="ICON">
      <el-input v-model="formData.icon" placeholder="ICON"></el-input>
    </el-form-item>

    <el-form-item label="是否显示">
      <el-switch v-model="formData.is_show" :active-value="1" :inactive-value="0"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">立即注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require("./server.js");
</script>
