<template>
  <div class="container" :style="{height:innerHeight+'px'}">
    <div class="header">
      <div class="header-panel panel-between item-center">
        <div class="panel-start item-center w-250">
          <div class="logo">
            <img src="../../assets/logo.png" width="30" alt>
          </div>
          <div class="ma-l30 bold fo-b">{{systemName}}</div>
        </div>
        <div class="w-800 panel-center">
          <!-- 中间部分 -->
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            :default-active="defaultMeun"
            @select="selectTopNav"
          >
            <el-menu-item
              v-for="(item,index) in topNav"
              :key="index"
              :index="item.path"
            >{{item.label}}</el-menu-item>
          </el-menu>
        </div>
        <div class="w-250 text-right">
          <el-dropdown trigger="click">
            <el-button type="text" class="el-dropdown-link">管理员 三百
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div class="dropdown-item" @click="navTo('user/info')">我的信息</div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div class="dropdown-item" @click="navTo('updatepwd')">修改密码</div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div class="dropdown-item fo-danger" @click="logout()">退出登录</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-panel panel-center" :style="{height:(innerHeight-170)+'px'}">
        <div class="main-left">
          <Menu :active-name="defaultActive" style="width:180px" @on-select="navSelect">
            <MenuGroup v-for="(item,index) in nav" :key="index" :title="item.label">
              <MenuItem v-for="(item2,index2) in item.sub" :key="index2" :name="item2.path">
                <Icon :type="item2.icon"/>
                {{item2.label}}
              </MenuItem>
            </MenuGroup>
          </Menu>
        </div>
        <div class="main-right">
          <div class="main-right-top panel-between">
            <div>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                  <span class="fo-g">{{linkName}}</span>
                </el-breadcrumb-item>
              </el-breadcrumb>
              <div class="fo-36 ma-t10">{{linkName}}</div>
            </div>
            <div>
              <div>
                <el-input placeholder="输入页面名称">
                  <template slot="append">跳转</template>
                </el-input>
              </div>
            </div>
          </div>
          <div class="main-right-panel" :style="{height:(innerHeight-230)+'px'}">
            <div class="main-right-panel-o" :style="{height:(innerHeight-230)+'px'}">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">杭州时乘信息科技有限公司 2018</div>
  </div>
</template>
<script>
export default require("./index.js");
</script>
