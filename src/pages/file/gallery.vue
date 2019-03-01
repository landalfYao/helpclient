<template>
    <div>
        <h2>图库</h2>
        <div class="line" style="margin-top:15px"></div>
        <div class="panel-start">
            <div class="gallery_meun" style="height:500px;overflow-y:scroll;overflow-x:hidden">
                <el-button style="margin:10px 0" icon="el-icon-circle-plus-outline" @click="addDialog = true,acStatus = true,submitData.group_name=''">添加分类</el-button>
                <el-menu style="width:150px"
                    :default-active="activeMenu"
                    class="el-menu-vertical-demo" @select="menuSelect">
                    <el-menu-item index="all">
                        <span slot="title">全部</span>
                    </el-menu-item>
                    <el-menu-item index="wei">
                        <span slot="title">未分组</span>
                    </el-menu-item>
                    <el-menu-item v-for="(item,index) in cates" :index="index+'-'+item.group_name" :key="index">
                        <span slot="title">{{item.group_name}}</span>
                    </el-menu-item>
                </el-menu>
                
            </div>
            <div class="gallery-panel">
                <div class="operate-panel panel-between item-center">
                    <div class="panel-start">
                        <el-button-group v-if="activeIndex > -1">
                            <el-button type="default" icon="el-icon-edit" @click="upgroup()"></el-button>
                            <el-button type="default" icon="el-icon-delete" @click="del()">删除分类</el-button>
                        </el-button-group>
                        <el-button type="danger" style="margin-left:10px" :loading="delload" @click="delfile()" icon="el-icon-delete" circle></el-button>
                        <el-dropdown style="margin-left:10px">
                            <el-button type="default">
                                移动到<i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item,index) in cates" :key="index"><div  @click="moveTo(item.id)">{{item.group_name}}</div></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <el-button type="primary" icon="el-icon-upload" @click="fileDialog = true">上传图片</el-button>
                </div>
                <div class="kupa">
                    
                    <div class="kupa-item"  v-for="(item,index) in list" :key="index" @click="checkIt(index)">
                        <div class="kuit-img" :style="'background-image:url('+item.file_url+')'"></div>
                        <div class="kuit-txt">
                            <div>{{item.mimetype ? item.mimetype.replace('image/',''):''}}</div>
                            <div>{{(item.file_size/1024)/1024 >= 1 ? (item.file_size/1024/1024).toFixed(0) +'mb': (item.file_size/1024).toFixed(0)+'kb' }}</div>
                        </div>
                        <div class="kucheck panel-center item-center" v-if="item.checked"><Icon color="#ffffff" size="50" type="md-checkmark" /></div>
                    </div>
                    <div style="width:100%;height:100%" class="panel-center item-center " v-if="list.length==0 && !listload">
                        <div>
                            <Icon type="ios-images-outline" size="100" color="#aaaaaa" />
                            <div style="color:#aaa;text-align:center">暂无图片</div>
                        </div>
                    </div>
                    <div  class="panel-center item-center spin-ku" v-if="listload">
                        加载中...
                    </div>
                </div>
                <!-- <Page style="margin-left:20px" :total="total" :page-size="10" :current="page" size="small" show-total @on-change="changePage" /> -->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="page"
                  :page-size="10"
                  layout="total,prev, pager, next, jumper"
                  :total="total"
                  style="margin-top:15px"
                ></el-pagination>
            </div>
        </div>

        <el-dialog :title="acStatus ? '添加分类':'修改分类'" :visible.sync="addDialog" width="300px" center>
            <span><el-input v-model="submitData.group_name" placeholder="分类名称"  /></span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="loading=false,addDialog = false">取 消</el-button>
                <el-button :loading="loading" type="primary" @click="submitCate(0)">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="上传图片" :visible.sync="fileDialog" width="400px" center >
            <div style="max-height:600px;overflow-y:scroll;width:100%">
                <el-upload
                    class="upload-demo"
                    :action="NODE_API+'ptfile/upload'"
                    :on-preview="handlePreview"
                    :multiple="true"
                    :headers="headers"
                    :on-success="handleSuccess"
                    :file-list="fileList"
                    :data="fileData"
                    :before-upload="beforeUpload"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2mb</div>
                </el-upload>
            </div>
            
            <span slot="footer" class="dialog-footer">
                <el-button @click="loading=false,fileDialog = false">关闭</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
export default require("./gallery.js");
</script>

