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
