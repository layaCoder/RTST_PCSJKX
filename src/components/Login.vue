<template>
  <el-container class="loginWarpper">
    <el-main>

      <div>
        <el-row>
          <img src="../assets/jinghui.png" alt="" class="jinghuiImg">
        </el-row>
        <el-row>
          <el-col :span="16">&nbsp;</el-col>
          <h2>
            江岸区公安局智能监控箱管理平台
          </h2>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>
          <el-col :span="9">&nbsp;</el-col>
          <el-col :span="6" class="loginForm">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="form.passwold" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleLogin">登录</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="9"></el-col>
        </el-row>
        <div class="footer">
          <p>
            <strong>2009 ICP证号：鄂ICP备14018559号 湖北融通三立科技有限公司 版权所有</strong>&copy; </p>
          <p>
            <strong>官方网站:&nbsp;</strong>
            <a href="http://www.hbrtst.com/"> www.hbrtst.com</a>
          </p>
        </div>
      </div>
    </el-main>
  </el-container>

</template>

<script>
import * as storage from "../utils/localstorage.js";

export default {
  data() {
    return {
      form: {
        name: "",
        passwold: ""
      }
    };
  },
  created() {
    this.keyupSubmit();
  },
  methods: {
    // todo:后台API对接
    handleLogin() {
      // 后台 api 验证user
      if (this.form.name !== "admin" || this.form.passwold !== "111") {
        this.$message({
          message: "用户名或密码错误",
          type: "warning"
        });
        localStorage.removeItem("user");
        return;
      }
      this.$router.push({
        name: "detailPage"
      });
      //登录后将 user 存放到 localStorage
      let user = JSON.stringify({ isLogin: true, name: this.form.name });
      // localStorage.setItem("user", user);
      storage.setLocalStorage("user", user);
      // console.log("-login success-", JSON.parse(localStorage.getItem("user")));
      console.log(JSON.parse(storage.getLocalStorage("user", 60 * 60 * 24)));
    },
    keyupSubmit() {
      document.onkeydown = e => {
        let _key = window.event.keyCode;
        if (_key === 13) {
          alert;
          this.handleLogin();
        }
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 35px;
  color: #fff;
}

button {
  float: left;
}

.loginForm {
  box-shadow: 0px 0px 5px #999999;
  padding: 30px;
  /*设置div透明度  opacity=1 完全不透明 opacity=0 完全透明 */
  background: #dde9f3;
  filter: alpha(opacity30);
  opacity: 0.7;

  border-radius: 5px;
}

.loginWarpper {
  background: url("../assets/login1.jpg") no-repeat;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}

.jinghuiImg {
  margin-top: 3%;
  width: 250px;
}

.footer {
  color: #444;
  position: fixed;
  left: 75%;
  bottom: 0;
  text-align: left;
  font-size: 10px;
}

.footer a {
  color: #444;
}
</style>

