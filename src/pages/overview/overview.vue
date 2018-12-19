<template>
  <div>
    <div class="panel-between">
      <div class="o-left">
        <!-- 总数S -->
        <div class="panel-between">
          <div  v-for="(item,index) in totalData" :key="index" :class="'opanl '+item.style">
            <div class="  w-100 text-center">
              <Icon :type="item.icon" size="30" :color="item.color" />
              <div class="fo-w fo-44 bold ">{{item.value}}</div>
              <div class="fo-w fo-26">{{item.label}}</div>
            </div>
          </div>
        </div>
        <!-- 总数E -->

        <!-- 实时数据 S -->
        <div class="eol ma-t30">
          <div class="w-100 panel-between">
            <div class="panel-start item-center " style="width:25%" v-for="(item,index) in newData" :key="index">
              <div class="icon-ss">
                <Icon :type="item.icon" size="25" color="#0099CC" />
              </div>
              <div class="ma-l30">
                <div >{{item.label}}</div>
                <div class="fo-40 ">{{item.value}}</div>
              </div>
            </div>

          </div>
        </div>
        <!-- 实时数据 E -->

        <div class="panel-start">
          <!-- 消息 S -->
          <div class="mes-box">
            <div class="pa-t20 ma-l20 ">消息盒子</div>
            <div class="pa-20 pkl">
              <Timeline pending>
                <TimelineItem>时乘优培1.0版本正式上线</TimelineItem>
                <TimelineItem>时乘优培测试版上线</TimelineItem>
                <TimelineItem>时乘优培开发中。。。</TimelineItem>
                <TimelineItem>时乘优培项目策划</TimelineItem>
                <TimelineItem>时乘优培项目落地</TimelineItem>
              </Timeline>
            </div>
          </div>
          <!-- 消息 E -->
          <div class="mes-box2">
            <div class="pa-t20 ma-l20 ">最新订单</div>
            <div class="pa-20 pkl2">
              <Timeline>
                <TimelineItem>
                    <div class="time">2018-12-18 15:12:00</div>
                    <a class="content">张继科 17855559596 预定了 杜拉拉的 小课 ，下午 15:00 305教室</a>
                </TimelineItem>
                <TimelineItem>
                    <div class="time">2018-12-18 15:12:00</div>
                    <a class="content">张继科 17855559596 预定了 杜拉拉的 小课 ，下午 15:00 305教室</a>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>

        <!-- <div class="box-link panel-start">
          <div class="box-btn">
            商户号
          </div>
          <div class="box-btn">
            小程序登录
          </div>
          <div class="box-btn">
            微信客服
          </div>
          <div class="box-btn">
            微信客服
          </div>
        </div> -->
      </div>
      <div class="o-right">
        <div class="show-code text-center">
          <div class="ma-t20">手机查看小程序数据</div>
          <img src="../../assets/img/qrcode-wx.png" width="170px" alt="">
        </div>
        <div class="show-code text-center ma-t30">
          <div class="ma-t20">小程序二维码</div>
          <img src="../../assets/img/qrcode.jpg" width="160px" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default require('./overview.js')
</script>
