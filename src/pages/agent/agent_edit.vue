<template>
  <el-form
    ref="form"
    :model="formData"
    label-width="80px"
    style="width:400px;margin:auto;margin-top:50px"
  >
    <el-form-item label="用户名">
      <el-input v-model="formData.username" placeholder="不小于4位"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formData.password" type="password" placeholder="不小于8位"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="formData.checkPwd" type="password" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item label="用户类型">
      <el-select v-model="formData.dtype" placeholder="请选择" style="width:100%">
        <el-option v-for="item in utype" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="区域" v-if="formData.dtype == 2">
      <el-input v-model="formData.a_id" placeholder="代理区域"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="formData.phone" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item label="代理期限" v-if="formData.dtype == 2">
      <el-date-picker v-model="formData.deadline" style="width:100%" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">立即注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require("./agent_edit.js");
</script>
