<template>
  <div>
    <el-form
      ref="form"
      :model="formData"
      label-width="80px"
      style="width:800px;margin:auto;margin-top:50px"
    >
      <el-form-item label="封面">
        <el-button type="primary" @click="dialogTableVisible2 = true">选择一张封面</el-button>
        <div class="ma-t20 ma-b20">图片最佳比例(375*190)</div>
        <div
          :style="'height:100px;width:197px;background-image:url('+formData.cover+');background-position:center;background-size:cover;background-color:#f3f3f3'"
        ></div>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="formData.title" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-row :gutter="20">
            <el-col :span="9"><el-input v-model="formData.author" placeholder="作者"></el-input></el-col>
            <el-col :span="4" class="text-right">备注</el-col>
            <el-col :span="9"><el-input v-model="formData.remarks" placeholder="备注"></el-input></el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="手机号">
        <el-row :gutter="20">
            <el-col :span="9"><el-input v-model="formData.phone" placeholder="手机号"></el-input></el-col>
            <el-col :span="4" class="text-right">联系人</el-col>
            <el-col :span="9"><el-input v-model="formData.contact" placeholder="联系人"></el-input></el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="富文本">
        <quill-editor :style="'height:400px'" v-model="formData.content"
                ref="myQuillEditor"
                :options="editorOption">
          <div id="toolbar" slot="toolbar">
            <span class="ql-formats"><button type="button" class="ql-bold"></button></span>
            <span class="ql-formats"><button type="button" class="ql-italic"></button></span>
            <span class="ql-formats"><button type="button" class="ql-underline"></button></span>
            <span class="ql-formats"><button type="button" class="ql-strike"></button></span>
            <span class="ql-formats"><button type="button" class="ql-blockquote"></button></span>
            <span class="ql-formats"><button type="button" class="ql-code-block"></button></span>
            <span class="ql-formats"><button type="button" class="ql-header" value="1"></button></span>
            <span class="ql-formats"><button type="button" class="ql-header" value="2"></button></span>
            <span class="ql-formats"><button type="button" class="ql-list" value="ordered"></button></span>
            <span class="ql-formats"><button type="button" class="ql-list" value="bullet"></button></span>
            <span class="ql-formats"><button type="button" class="ql-script" value="sub"></button></span>
            <span class="ql-formats"><button type="button" class="ql-script" value="super"></button></span>
            <span class="ql-formats"><button type="button" class="ql-indent" value="-1"></button></span>
            <span class="ql-formats"><button type="button" class="ql-indent" value="+1"></button></span>
            <span class="ql-formats"> <button type="button" class="ql-direction" value="rtl"></button></span>
            <span class="ql-formats"><select class="ql-size">
              <option value="small"></option>
              <option selected></option>
              <option value="large"></option>
              <option value="huge"></option>
            </select></span>
            <span class="ql-formats"><select class="ql-header">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option selected="selected"></option>
            </select></span>
            <span class="ql-formats"><select class="ql-color">
              <option selected="selected"></option>
              <option value="#e60000"></option>
              <option value="#ff9900"></option>
              <option value="#ffff00"></option>
              <option value="#008a00"></option>
              <option value="#0066cc"></option>
              <option value="#9933ff"></option>
              <option value="#ffffff"></option>
              <option value="#facccc"></option>
              <option value="#ffebcc"></option>
              <option value="#ffffcc"></option>
              <option value="#cce8cc"></option>
              <option value="#cce0f5"></option>
              <option value="#ebd6ff"></option>
              <option value="#bbbbbb"></option>
              <option value="#f06666"></option>
              <option value="#ffc266"></option>
              <option value="#ffff66"></option>
              <option value="#66b966"></option>
              <option value="#66a3e0"></option>
              <option value="#c285ff"></option>
              <option value="#888888"></option>
              <option value="#a10000"></option>
              <option value="#b26b00"></option>
              <option value="#b2b200"></option>
              <option value="#006100"></option>
              <option value="#0047b2"></option>
              <option value="#6b24b2"></option>
              <option value="#444444"></option>
              <option value="#5c0000"></option>
              <option value="#663d00"></option>
              <option value="#666600"></option>
              <option value="#003700"></option>
              <option value="#002966"></option>
              <option value="#3d1466"></option>
            </select></span>
            <span class="ql-formats"> <select class="ql-background">
              <option value="#000000"></option>
              <option value="#e60000"></option>
              <option value="#ff9900"></option>
              <option value="#ffff00"></option>
              <option value="#008a00"></option>
              <option value="#0066cc"></option>
              <option value="#9933ff"></option>
              <option selected="selected"></option>
              <option value="#facccc"></option>
              <option value="#ffebcc"></option>
              <option value="#ffffcc"></option>
              <option value="#cce8cc"></option>
              <option value="#cce0f5"></option>
              <option value="#ebd6ff"></option>
              <option value="#bbbbbb"></option>
              <option value="#f06666"></option>
              <option value="#ffc266"></option>
              <option value="#ffff66"></option>
              <option value="#66b966"></option>
              <option value="#66a3e0"></option>
              <option value="#c285ff"></option>
              <option value="#888888"></option>
              <option value="#a10000"></option>
              <option value="#b26b00"></option>
              <option value="#b2b200"></option>
              <option value="#006100"></option>
              <option value="#0047b2"></option>
              <option value="#6b24b2"></option>
              <option value="#444444"></option>
              <option value="#5c0000"></option>
              <option value="#663d00"></option>
              <option value="#666600"></option>
              <option value="#003700"></option>
              <option value="#002966"></option>
              <option value="#3d1466"></option>
            </select></span>
            <span class="ql-formats"><select class="ql-font">
              <option selected="selected"></option>
              <option value="serif"></option>
              <option value="monospace"></option>
            </select></span>
            <span class="ql-formats">
              <select class="ql-align">
              <option selected="selected"></option>
              <option value="center"></option>
              <option value="right"></option>
              <option value="justify"></option>
            </select>
            </span>
            <span class="ql-formats">
                <button type="button" class="ql-clean"></button>
            </span>
            <span class="ql-formats">
                <button type="button" class="ql-link"></button>
            </span>
            <span class="ql-formats">
                <button type="button" @click="imgClick">
                  <Icon type="ios-images" size="18" />
                </button>
            </span>
            
          </div>
      </quill-editor>
      
      </el-form-item>
      <el-form-item >
        <el-button style="margin-top:100px" type="primary" @click="onSubmit" :loading="loading">确认提交</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogTableVisible" width="1100px">
          <imageval :clear="clear" style="margin-top:-40px"></imageval>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTableVisible = false">取 消</el-button>
            <el-button type="primary" @click="getModelImgs()">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog :visible.sync="dialogTableVisible2" width="1100px" center>
        <imageval :clear="clear"></imageval>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogTableVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="chooseIt()">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
import imageval from '../file/gallery.vue'
let app = require("./richtext_edit.js");
app.components = { imageval };
export default app;
</script>
