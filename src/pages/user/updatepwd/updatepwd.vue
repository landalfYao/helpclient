<template>
  <el-form ref="form" :model="formData" label-width="80px" style="width:400px;margin:auto;margin-top:50px">
    <el-form-item label="旧密码">
      <el-input v-model="formData.oldPwd" type="password" placeholder="旧密码"></el-input>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input v-model="formData.newPwd" type="password" placeholder="新密码"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="formData.confirmPwd" type="password" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">确认提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require('./updatepwd.js')
</script>
