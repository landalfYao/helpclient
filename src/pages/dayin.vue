<template>
  <div class="pa-30">
    <div class="bz">
      <div style="height:30px">
        <div class="avatar"></div>
      </div>
      <el-form ref="form" :model="formData">
        <div class="pa-b20 panel-between item-center border-b">
          <div class="fo-30">打印原件</div>
          <div class="panel-end">
            <div>已选</div>
            <el-upload
              class="avatar-uploader"
              :action="api+'file/upload'"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              name="file"
            >
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
        <div class="pa-t30 pa-b20 panel-between item-center border-b">
          <div class="fo-30">收件地址</div>
          <el-input
            class="fo-30 text-right"
            v-model="formData.mu"
            style="border:none;width:200px"
            placeholder="输入详细地址"
          ></el-input>
        </div>
        <div class="pa-t30 pa-b20 panel-between item-center border-b">
          <div class="fo-30">页数</div>
          <el-input
            class="fo-30 text-right"
            style="border:none;width:200px"
            type="number"
            v-model="formData.num"
            placeholder="输入页数"
            @input="numinput"
          ></el-input>
        </div>
        <div class="pa-t30 pa-b20 panel-between item-center border-b item-center">
          <div class="fo-30 ma-r20">是否彩印</div>
          <el-switch v-model="formData.cai" @change="numinput()"/>
        </div>
        <div class="text-center fo-26 fo-g ma-t30">
          黑白
          <span class="fo-m">{{price[0]}}元/张</span> 彩印
          <span class="fo-m">{{price[1]}}元/张</span> 跑路费
          <span class="fo-m">{{price[2]}}元</span>
        </div>
        <div class="fo-26 text-center ma-t30">需支付</div>
        <div class="text-center fo-40 bold ma-t20 fo-m">
          {{formData.total_fee}}
          <span class="fo-26">元</span>
        </div>
        <button class="btns" @click="submit()">立即发布帮助</button>
      </el-form>
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
      api: this.yzy.NODE_API,
      uid: "",
      msg: {},
      price: [0, 0, 0]
    };
  },
  mounted() {
    document.title = "打印服务";
    if (this.$route.query.uid) {
      this.uid = this.$route.query.uid;
      this.msg = JSON.parse(this.$route.query.data);
      this.price = this.msg.price_gui.split(",");
      this.init();
    }
  },
  methods: {
    numinput(e) {
      this.init();
    },
    init() {
      let total = 0;
      total += parseFloat(this.price[2]);
      this.formData.cai
        ? (total += parseFloat(this.price[1]) * parseFloat(this.formData.num))
        : (total += parseFloat(this.price[0]) * parseFloat(this.formData.num));
      this.formData.total_fee = total.toFixed(2);
    },
    submit() {},
    handleAvatarSuccess(e) {}
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
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.day {
  width: 50px;
  height: 50px;
  border: 1px dotted #e1e1e1;
  line-height: 50px;
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
