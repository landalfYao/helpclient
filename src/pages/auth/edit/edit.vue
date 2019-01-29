<template>
  <el-form
    ref="form"
    :model="formData"
    label-width="80px"
    style="width:400px;margin:auto;margin-top:50px"
  >
    <el-form-item label="类目ID">
      <el-input v-model="formData.cate_id" placeholder="类目ID"></el-input>
    </el-form-item>
    <el-form-item label="名称">
      <el-input v-model="formData.auth_name" placeholder="权限名称"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="formData.remarks" placeholder="备注"></el-input>
    </el-form-item>
    <el-form-item label="API url">
      <el-input v-model="formData.auth_url" placeholder="API url"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">确认提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require("./edit.js");
</script>
