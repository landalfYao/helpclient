<style>
  @import url('./login.css');
</style>
<template>
  <div >
        <div class="login-panel">
            <div class="panel-center item-center">
                <img src="../../../assets/logo.png" width="40px" height="40px" alt="">
                <div style="margin-left:5px;font-size:16px">{{systemName}}</div>
            </div>
            <el-form :model="formData" status-icon  label-position="top" style="margin-top:20px">
                <el-form-item label="账号" prop="age">
                    <el-input v-model.number="formData.username" placeholder="输入账号/手机号/email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
                    <el-input type="password" v-model="formData.password" placeholder="输入密码" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" :loading="loading" style="width:100%;margin-top:20px" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default require('./login.js')
</script>
