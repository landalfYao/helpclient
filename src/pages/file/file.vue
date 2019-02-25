<template>
  <div>
    <div class="panel-start wrap">
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
          <el-button type="danger" plain icon="el-icon-delete" @click="del()"></el-button>
          <el-button type="success" plain @click="changeTemp()">清除临时文件</el-button>
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
      <el-table-column label="文件名" prop="realname"></el-table-column>
      <el-table-column label="类型" prop="type"></el-table-column>
      <el-table-column prop="size" label="大小">
        <template slot-scope="scope">
          <div>{{scope.row.size/1024 < 1024 ? (scope.row.size/1024)+'kb':(scope.row.size/1024/1024)+'mb'}}</div>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.is_temp == 1 ? 'warning':'success'"
          >{{scope.row.is_temp == 1?'临时文件':'已使用'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="是否删除">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.is_delete == 1 ? 'success':'danger'"
          >{{scope.row.is_delete == 1?'已删除':'没删除'}}</el-tag>
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
export default require("./file.js");
</script>
