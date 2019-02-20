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
        <router-link to="/role/list">
          <el-button type="ghost" @click="clear()">返回</el-button>
        </router-link>
        {{title}}
      </el-button-group>
    </div>

    <div style="margin-top:15px">
      <div class="panel-between item-center">
        <el-button-group>
          <el-button type="danger" plain icon="el-icon-delete" @click="del()"></el-button>
          <el-button type="primary" @click="centerDialogVisible = true,getCate()">赋予权限</el-button>
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

    <el-dialog title="赋予权限" :visible.sync="centerDialogVisible" width="400px" center>
      <el-tree
        ref="mtree"
        :data="cate"
        show-checkbox
        node-key="auid"
        :props="cateProps"
        :default-expanded-keys="[1]"
        :lazy="true"
        @node-expand="nodeClick"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitNode">确 定</el-button>
      </span>
    </el-dialog>

    <el-table
      :data="tableData"
      ref="multipleTable"
      tooltip-effect="dark"
      border
      size="small"
      style="width: 100%;margin-top:15px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="auth_name" label="权限名称"></el-table-column>
      <el-table-column prop="auth_url" label="API"></el-table-column>
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
export default require("./grant.js");
</script>
