# 校园综合服务平台小程序后台客户端

#### 项目链接
本项目配合以下两端使用：<br>
[1.后台服务端地址：https://github.com/landalfYao/helpserver.git](https://github.com/landalfYao/helpserver.git)<br>
[2.小程序端地址：https://github.com/landalfYao/help.git](https://github.com/landalfYao/help.git)<br>

#### 安装教程

1.安装依赖并启动

```
npm install
npm run dev
```
2.登录初始密码
```
qwe123123
```

访问[http://localhost:3336](http://localhost:3336)

#### 线上部署
1.打开文件 src/assets/js/yzy.js
```
const yzy = {
  ...
  NODE_API: "https://api.demo.com/api/",  //改成自己服务器地址
  ...
}
```
2.打包导出
```
npm run build
```
导出的文件在dist目录下<br>
3.进入dist目录有两个文件 dist和index.html,将index.html拖到dist中。<br>
4.讲dist目录下的dist拖到服务端public目录下<br>
访问服务端 "https://api.demo.com/dist"<br>
#### 交流
微信号:landalfyzy<br>
![输入图片说明](https://images.gitee.com/uploads/images/2019/0320/102250_efc7b2d0_1930998.jpeg "微信图片_20190320102141.jpg")
<br>
QQ群<br>
![输入图片说明](https://images.gitee.com/uploads/images/2019/0325/100055_4cc3cea8_1930998.png "微信截图_20190325095959.png")
