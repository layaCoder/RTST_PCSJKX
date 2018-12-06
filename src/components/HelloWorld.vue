<template>
  <div class="hello">
    <el-container>
      <el-header>
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
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <span id='footer'>this is footer</span>
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
              nodeLevel:this.$store.getters.getNodeLevel,
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
              nodeLevel:this.$store.getters.getNodeLevel,
              wsCode: this.$store.getters.getWsCode,
              ip: this.$store.getters.getIp,
              isEquip: this.$store.getters.getIsEquip
            }
          });
          break;
        case "4":
          this.$router.push({ name: "configPage" });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-header {
  padding: 0;
}

.el-footer {
  background-color: #172850;
}

.el-main {
  padding: 2px 0px;
}
</style>
