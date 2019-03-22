const crypto = require("crypto");
const _algorithm = "aes-256-cbc";
const _iv = "73546548679573675465765897096532";
const ivBuffer = new Buffer(_iv, "hex");
const ivkey = Buffer.from("15464336451324535212156486623224", "utf8").toString(
  "hex"
);
const request = require("request");

const yzy = {
  systemName: "互帮互助管理系统",

  NODE_API: "http://localhost:3336/api/",

  pageSize: [{
      label: "每页10条",
      value: 10
    },
    {
      label: "每页20条",
      value: 20
    },
    {
      label: "每页30条",
      value: 30
    },
    {
      label: "每页50条",
      value: 50
    },
    {
      label: "每页100条",
      value: 100
    },
    {
      label: "每页200条",
      value: 200
    },
    {
      label: "每页300条",
      value: 300
    },
    {
      label: "每页500条",
      value: 500
    },
    {
      label: "每页1000条",
      value: 1000
    },
    {
      label: "每页10000条",
      value: 10000
    }
  ],
  //初始化筛选内容
  initFilterSearch(labels, keys) {
    let _labels = labels;
    let _keys = keys;
    let arr = [];
    for (let i in _labels) {
      arr.push({
        label: _labels[i],
        key: _keys[i],
        value: ""
      });
    }
    return arr;
  },
  //筛选过滤器
  filterSearch(data, wheres) {
    let _data = data;
    let _wheres = wheres;
    let temp = -1;
    for (let i in _wheres) {
      if (_wheres[i].label == _data.key) {
        temp = i;
      }
    }
    if (temp == -1) {
      _wheres.push({
        label: _data.key,
        value: _data.key + ' like "%' + _data.value + '%"'
      });
    } else {
      _wheres[temp].value = _data.key + ' like "%' + _data.value + '%"';
    }
    return _wheres;
  },
  //http请求
  http(url, type, data, cb, headers) {
    let options = {
      url: this.NODE_API + url,
      headers: headers,
      method: type,
      json: data
    };
    request(options, (err, res, body) => {
      if (res.statusCode == 200) {
        cb(body);
      } else {
        console.log(res.statusCode);
      }
    });
  },
  //getToken
  getToken(cb) {
    this.http(
      "user/login",
      "POST", {
        username: sessionStorage.getItem("username"),
        password: global.pwd
      },
      function (res) {
        if (res.code == 1) {
          sessionStorage.setItem("token", res.token);
          cb(true);
        } else {
          cb(false);
        }
      }
    );

  },
  //post
  post(url, data, cb) {
    this.http(
      url,
      "POST",
      data,
      function (res) {
        if (res.code == -1 || res.code == 101) {
          yzy.getToken(function (res2) {
            if (res2) {
              yzy.post(url, data, cb);
            } else {
              cb(res);

            }
          });
        } else {
          cb(res);
        }
      }, {
        token: sessionStorage.getItem("token"),
        uid: sessionStorage.getItem("uid")
      }
    );
  },
  //get
  get(url, data, cb) {
    this.http(url, "GET", data, cb, {
      token: sessionStorage.getItem("token"),
      uid: sessionStorage.getItem("uid")
    });
  },
  /**
   * @desc: 加密
   */
  encrypt(data) {
    let keyBuf = null;

    if (ivkey instanceof Buffer) {
      keyBuf = ivkey;
    } else {
      keyBuf = new Buffer(ivkey, "hex");
    }
    let dataBuf = null;
    if (data instanceof Buffer) {
      dataBuf = data;
    } else {
      dataBuf = new Buffer(data, "utf8");
    }
    let cipher = crypto.createCipheriv(_algorithm, keyBuf, ivBuffer);
    cipher.setAutoPadding(true);
    let cipherData = cipher.update(dataBuf, "buffer", "base64");
    cipherData += cipher.final("base64");
    return cipherData;
  },

  /**
   * @desc:  解密
   * @param: data: 待解密的内容； dataEncoding: 内容编码; key: 秘钥；
   *         keyEncoding: 秘钥编码； padding: 自动填充加密向量
   */
  decypt(data, dataEncoding, key, keyEncoding, padding) {
    let keyBuf = null;
    if (key instanceof Buffer) {
      keyBuf = key;
    } else {
      keyBuf = new Buffer(key, keyEncoding);
    }

    let dataBuf = null;
    if (data instanceof Buffer) {
      dataBuf = data;
    } else {
      dataBuf = new Buffer(data, dataEncoding);
    }

    var decipher = crypto.createDecipheriv(_algorithm, keyBuf, ivBuffer);
    decipher.setAutoPadding(padding);
    var decipherData = decipher.update(dataBuf, "binary", "binary");
    decipherData += decipher.final("binary");
    var str3 = Buffer.from(decipherData, "binary");

    return str3.toString("utf8");
  }
};

module.exports = yzy;
