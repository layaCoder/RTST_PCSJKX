<template>
  <div class="hello">
    <el-container>
      <el-row class="haeaderWarpper">
        <el-header>
          <el-col :span="2">
            <div class="logoImg">
              <img src="../assets/logo.png" alt="">
            </div>
          </el-col>
          <el-col :span="4">
            <div class="logo">
              <span>湖北融通三立科技有限公司</span>
            </div>
          </el-col>
          <el-col :span="14">
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#172850" text-color="#fff" active-text-color="#59b0ff">
              <el-menu-item index="1"><i class="el-icon-menu"></i><span>站点详情</span></el-menu-item>
              <el-menu-item index="2"><i class="el-icon-date"></i><span>告警统计</span></el-menu-item>
              <el-menu-item index="3"><i class="el-icon-document"></i><span>电能报表</span></el-menu-item>
              <el-menu-item index="4"><i class="el-icon-setting"></i><span>系统设置</span></el-menu-item>
              <!-- <el-menu-item index="5">Module[5]</el-menu-item> -->
            </el-menu>
          </el-col>
          <el-col :span="4">
            <div class="dropDown">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  当前用户:{{username}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="updatePass">修改密码</el-dropdown-item>
                  <el-dropdown-item command="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-header>
      </el-row>

      <el-row>
        <el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <el-form :v-model="passObj" ref="passObj" class="demo-ruleForm">
            <el-row class="modalRow">
              <el-col>
                <el-input v-model="passObj.passOld" placeholder="请输入内容">
                  <template slot="prepend">&nbsp;&nbsp;&nbsp;原密码&nbsp;&nbsp;&nbsp;</template>
                </el-input>
              </el-col>
            </el-row>
            <el-row class="modalRow">
              <el-col>
                <el-input v-model="passObj.passNew1" placeholder="请输入内容">
                  <template slot="prepend">&nbsp;&nbsp;&nbsp;新密码&nbsp;&nbsp;&nbsp;</template>
                </el-input>
              </el-col>
            </el-row>
            <el-row class="modalRow">
              <el-col>
                <el-input v-model="passObj.passNew2" placeholder="请输入内容">
                  <template slot="prepend">再次输入新密码</template>
                </el-input>
              </el-col>
            </el-row>
            <el-form-item>
              <el-button type="primary" @click="handleSubmit('formObj')">提交</el-button>
              <el-button @click="dialogVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </el-row>
      <el-row>
      </el-row>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <span id='footer'>© 湖北融通三立科技有限公司 版权所有</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import footer from "@/components/Footer";
import * as storage from "@/utils/localstorage.js";

export default {
  data() {
    return {
      username: "",
      dialogVisible: false,
      activeIndex: "1",
      activeIndex2: "1",
      passObj: {
        passOld1: "",
        passNew1: "",
        passNew2: ""
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      //控制路由跳转
      switch (key) {
        case "1":
          this.$router.push({ name: "detailPage" });
          break;
        case "2":
          this.$router.push({
            name: "alarmPage",
            query: {
              nodeLevel: this.$store.getters.getNodeLevel,
              wsCode: this.$store.getters.getWsCode,
              ip: this.$store.getters.getIp,
              isEquip: this.$store.getters.getIsEquip
            }
          });
          break;
        case "3":
          //this.$router.push({ name: "reportPage"});
          this.$router.push({
            name: "reportPage",
            query: {
              // nodeLevel: this.$store.state.nodeLevel,
              nodeLevel: this.$store.getters.getNodeLevel,
              wsCode: this.$store.getters.getWsCode,
              ip: this.$store.getters.getIp,
              isEquip: this.$store.getters.getIsEquip
            }
          });
          break;
        case "4":
          this.$router.push({ name: "configPage" });
          break;
        case "5":
          this.$router.push({ name: "cart" });
          break;
      }
    },
    handleCommand(command) {
      switch (command) {
        case "updatePass":
          this.dialogVisible = true;
          break;
        case "logOut":
          localStorage.removeItem("user");
          this.$router.push({ name: "login" });
          break;
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleSubmit() {
      alert("todo:修改密码api对接");
    }
  },
  created: function() {
    if (
      //如果当前地址不是登录页面 && 不是用户成功登录状态 ， 则跳转到登录页面
      this.$route.path !== "/" &&
      storage.getLocalStorage("user", 1000 * 60 * 60 * 24) === null //localStorage中的user登录信息存放 60*60*24秒（一天的秒数）
    ) {
      //60 * 60 * 24 一天的秒数
      this.$router.push({ name: "login" });
    } else {
      //登录以后 将 username 赋值给head控件显示
      this.username = JSON.parse(
        storage.getLocalStorage("user", 1000 * 60 * 60 * 24)
      ).name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1,
h2 {
  font-weight: normal;
} */
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */

/* header 样式*/
.el-header {
  padding: 0;
}

.haeaderWarpper {
  background-color: #172850;
}
.logo {
  color: #ffffff;
  line-height: 60px;
  background-color: #172850;
  float: left;
  padding-left: 10px;
}

.logoImg {
  background-color: #172850;
  float: right;
}
img {
  width: 56px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.dropDown {
  background-color: #172850;
  line-height: 60px;
  color: #ffffff;
}

a {
  color: #42b983;
}

.el-footer {
  background-color: #172850;
  color: #ffffff;
}

.el-main {
  /* padding: 2px 0px; */
  padding: 0px;
}
.modalRow {
  margin-bottom: 10px;
}
</style>
