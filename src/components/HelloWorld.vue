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
              <el-menu-item index="1">站点详情</el-menu-item>
              <el-menu-item index="2">告警统计</el-menu-item>
              <!-- <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
              <el-menu-item index="3">电能报表</el-menu-item>
              <el-menu-item index="4">系统设置</el-menu-item>
              <el-menu-item index="5">Module[5]</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="4">
            <div class="dropDown">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  当前用户:Admin
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

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
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
          alert("修改密码");
          break;
        case "logOut":
          alert("logOut");
          break;
      }
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
a {
  color: #42b983;
}
.el-header {
  padding: 0;
}

.el-footer {
  background-color: #172850;
  color: #ffffff;
}

.el-main {
  /* padding: 2px 0px; */
  padding:0px;
}
.logo {
  color: #ffffff;
  line-height: 60px;
  background-color: #172850;
}

.logoImg {
  background-color: #172850;
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
.haeaderWarpper{
  background-color: #172850;
}
</style>
