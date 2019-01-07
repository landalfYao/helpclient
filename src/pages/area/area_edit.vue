<template>
  <el-form
    ref="form"
    :model="formData"
    label-width="80px"
    style="width:400px;margin:auto;margin-top:50px"
  >
    <!-- <el-form-item label="地区类型">
      <el-input v-model="formData.atype" placeholder="1城市 2校园"></el-input>
    </el-form-item>-->
    <el-form-item label="名称">
      <el-input v-model="formData.name" placeholder="填城市名称 或 校园名称"></el-input>
    </el-form-item>
    <!-- <el-form-item label="代理抽点">
      <el-input v-model="formData.agent_get" placeholder="填写小于1的数值"></el-input>
    </el-form-item>-->
    <el-form-item label="序号">
      <el-input v-model="formData.sort" placeholder="序号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">确认提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require("./area_edit.js");
</script>
