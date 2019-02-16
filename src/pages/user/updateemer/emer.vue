<template>
  <el-form ref="form" :model="formData" label-width="80px" style="width:400px;margin:auto;margin-top:50px">
    <el-form-item label="是否开启">
      <el-switch v-model="is_show"></el-switch>
    </el-form-item>
    <el-form-item label="通知标题">
      <el-input v-model="formData.emer_title" placeholder="通知标题(30个字符)" maxlength="30"></el-input>
    </el-form-item>
    <el-form-item label="文本信息">
      <el-input v-model="formData.emer_content" type="textarea" :rows="3" placeholder="请输入内容(255个字符)"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">保存提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require('./emer.js')
</script>
