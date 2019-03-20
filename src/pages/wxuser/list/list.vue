<template>
  <div>
    <div class="panel-start">
      <el-input
        v-for="(item,index) in searchList"
        v-model="item.value"
        :placeholder="item.label"
        @blur="searchInput(index)"
        :key="index"
        class="filter-input"
      ></el-input>
      <el-button-group>
        <el-button type="ghost" @click="clear()">清除</el-button>
        <el-button type="primary" @click="search()">搜索</el-button>
      </el-button-group>
    </div>

    <div style="margin-top:15px">
      <div class="panel-between item-center">
        <el-button-group>
          <!-- <el-button type="danger" plain icon="el-icon-delete"></el-button> -->
          <!-- <el-button type="success" plain @click="changeUserState('available')">启用用户</el-button>
          <el-button type="warning" plain @click="changeUserState('disable')">禁用用户</el-button>-->
        </el-button-group>
        <el-select
          v-model="query.pageSize"
          placeholder="请选择"
          style="width:150px"
          @change="handleSizeChange"
        >
          <el-option
            v-for="item in pageSize"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>

    <el-table
      :data="tableData"
      ref="multipleTable"
      tooltip-effect="dark"
      border
      size="small"
      style="width: 100%;margin-top:15px"
      @selection-change="handleSelectionChange"
      @filter-change="filterChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="ID" width="55"></el-table-column>
      <el-table-column label="头像" width="80">
        <template slot-scope="scope">
          <div>
            {{scope.row.avatar_url ? '':'未授权'}}
            <img
              v-if="scope.row.avatar_url"
              :src="scope.row.avatar_url"
              height="50px"
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column label="昵称">
        <template slot-scope="scope">
          <div>{{scope.row.nick_name ? scope.row.nick_name:'未授权'}}</div>
        </template>
      </el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          <div>
            <el-tag type="primary" v-if="scope.row.gender == 1">男</el-tag>
            <el-tag type="success" v-if="scope.row.gender == 2">女</el-tag>
            <el-tag type="warning" v-if="scope.row.gender != 2 && scope.row.gender != 1">未知</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号">
        <template slot-scope="scope">
          <div>{{scope.row.phone ? scope.row.phone:'未注册'}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="dphone" label="短号">
        <template slot-scope="scope">
          <div>{{scope.row.dphone ? scope.row.dphone:'未填写'}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="信息" label="信息">
        <template slot-scope="scope">
          <div>{{scope.row.nick_name ? scope.row.province + ' ' +scope.row.city:'未授权'}}</div>
        </template>
      </el-table-column>
    </el-table>
    <div class="panel-end">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="query.pageIndex"
        :page-size="query.pageSize"
        layout="total,prev, pager, next, jumper"
        :total="total"
        style="margin-top:15px"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default require("./list.js");
</script>
