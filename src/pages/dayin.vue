<template>
  <div class="pa-30 panel-center item-center" v-loading="loading">
    <div v-if="!cg">
      <el-upload
        class="avatar-uploader"
        style="margin:auto"
        :action="'https://hapi.ypyzy.top/api/file/upload'"
        :show-file-list="true"
        :data="{wx_id:wx_id}"
        :before-upload="bup"
        :on-success="handleAvatarSuccess"
        name="file"
      >
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="fo-30 text-center">点击上传打印原件</div>
    </div>
    <div class="text-center" v-if="cg">
      <i class="el-icon-success" style="font-size:70px;color:#00cc99"></i>
      <div class="text-center ma-t20">
        上传成功，请点击
        <span class="bold">左上角返回</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      formData: {
        url: "",
        mu: "",
        num: "",
        cai: false,
        total_fee: 0
      },
      api: "",
      wx_id: "",
      loading: false,
      cg: false
    };
  },
  mounted() {
    document.title = "打印服务";
    this.api = this.yzy.NODE_API;
    if (this.$route.query.wx_id) {
      this.wx_id = this.$route.query.wx_id;
      this.init();
    }
  },
  methods: {
    bup() {
      this.loading = true;
    },
    navBack() {
      window.history.go(-1);
    },
    numinput(e) {
      this.init();
    },
    init() {
      // let total = 0;
      // total += parseFloat(this.price[2]);
      // this.formData.cai
      //   ? (total += parseFloat(this.price[1]) * parseFloat(this.formData.num))
      //   : (total += parseFloat(this.price[0]) * parseFloat(this.formData.num));
      // this.formData.total_fee = total.toFixed(2);
    },
    submit() {
      if (
        this.formData.url != "" &&
        this.formData.mu != "" &&
        this.formData.total_fee != 0 &&
        this.formData.num
      ) {
        this.yzy.post("help", {});
      }
    },
    handleAvatarSuccess(e) {
      if (e.code == 1) {
        this.cg = true;
        window.history.go(-1);
      }
      this.loading = false;
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
.day {
  width: 200px;
  height: 200px;
  border: 1px dotted #e1e1e1;
  line-height: 200px;
  text-align: center;
  font-size: #888;
}

.bz {
  padding: 15px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  margin-top: 40px;
}
.fo-m {
  color: #ff6666;
}
.avatar {
  width: 75px;
  height: 75px;
  border-radius: 75px;
  overflow: hidden;
  margin: auto;
  position: relative;
  top: -50px;
  border: 3px solid #ffcc66;
  background-color: #ffcc66;
}

.fo-b {
  margin-top: 25px;
  color: #6699cc;
}
.btns {
  width: 100%;
  border: none;
  text-align: center;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  border-radius: 50px;
  background: linear-gradient(to right top, #6183dd, #6e42d3);
  margin-top: 40px;
}
.btns:active {
  background: linear-gradient(to right top, #6183dd, #6e42d3);
}
</style>
