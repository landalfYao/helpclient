<template>
    <div>
        <quill-editor :style="'height:'+height+'px'" v-model="content"
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
      <el-dialog :visible.sync="dialogTableVisible" width="1060px">
          <imageval :clear="clear" style="margin-top:-40px"></imageval>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTableVisible = false">取 消</el-button>
            <el-button type="primary" @click="getModelImgs()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import imageval from '../pages/file/gallery.vue'
export default {
  components:{
      imageval
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  
  props:{
      height: Number,
  },
  data() {
    return {
      dialogTableVisible:false,
      content:'',
      clear:false,
      editorOption: {
        modules: {
          toolbar: "#toolbar"
        }
      }
    };
  },
 
  mounted() {},
  methods:{
      imgClick(){
        this.dialogTableVisible = true;
      },
      getModelImgs() {
      var li = global.cimgs;
      var gs = "";
      for (var i in li) {
        if ( li[i].mimetype.indexOf('image') > -1  ) {
          this.editor.insertEmbed(i, "image", li[i].file_url);
        } else {
          gs += li[i].mimetype + " ";
        }
      }
      if (gs != "") {
        this.$Modal.error({
          title: "格式错误",
          content: "富文本不支持" + gs
        });
      }
      this.content=this.content.replace('<img','<img style="margin:auto;" ')
      this.dialogTableVisible = false;
      global.cimgs = []
      this.clear = !this.clear
    },
  }
};
</script>
