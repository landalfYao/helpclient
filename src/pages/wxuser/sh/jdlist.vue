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
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="手机号" prop="phone"></el-table-column>
      <el-table-column prop="card_num" label="身份证号"></el-table-column>
      <el-table-column label="身份证">
        <template slot-scope="scope">
          <div>
            <img
              :src="scope.row.cert"
              alt
              height="50px"
              @click="tempimg = scope.row.cert,centerDialogVisible2 = true"
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column label="学生证">
        <template slot-scope="scope">
          <div>
            <img
              :src="scope.row.stu_card"
              alt
              height="50px"
              @click="tempimg = scope.row.stu_card,centerDialogVisible2 = true"
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="msg" label="信息"></el-table-column>
      <el-table-column label="状态" column-key="state">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.state == 1 ? 'success':scope.row.state == 2 ? 'warning':'primary'"
          >{{scope.row.state == 1 ? '已通过':scope.row.state == 2 ? '未通过':'待审核'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="text" v-if="scope.row.state != 1" @click="pass(scope.row.s_id)">通过</el-button>
            <el-button type="text" @click="sid = scope.row.s_id,centerDialogVisible = true">驳回</el-button>
          </div>
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
    <el-dialog
      title="图片信息"
      :fullscreen="true"
      :visible.sync="centerDialogVisible2"
      width="30%"
      center
    >
      <img :src="tempimg" alt>
    </el-dialog>
    <el-dialog title="驳回信息" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form ref="form" label-width="80px" label-position="top">
        <el-form-item label="填写驳回信息">
          <el-input type="text" v-model="bmsg"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="unpass">提交</el-button>
          <el-button @click="centerDialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default require("./jdlist.js");
</script>
