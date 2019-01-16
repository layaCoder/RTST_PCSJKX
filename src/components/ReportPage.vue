<template>
  <div class="main">
    <el-row>
      <el-col :span="4">
        <el-menu mode="vertical" :default-openeds="['1']" default-active="1-1" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose" background-color="#172850" text-color="#fff" active-text-color="#59b0ff">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>基础信息设置</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">电能详情</el-menu-item>
              <el-menu-item index="1-2">电能月报</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

      </el-col>
      <el-col :span="20" class="content">
        <!-- <h2>电能报表</h2>
        <div>[url]节点编号 {{this.$route.params.wsCode}}</div>
        <div>[url]节点ip {{this.$route.params.ipAddress}}</div>
        <div>[url]节点等级{{this.$route.params.nodeLevel}}</div>
        <div>----------------------------</div>
        <div>[store]count:{{count}}</div>
        <div>[store]节点编号{{wsCode}}</div>
        <div>[store]节点ip{{ip}}</div>
        <div>[store]是否为终端设备{{isEquip}}</div>
        <div>[store]nodeLevel{{nodeLevel}}</div> -->

        <!-- <div>----------router view--------------</div> -->
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchType: 1 // 选择查询类型，1：从今年1月1日至今 2：按照指定时间段
    };
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index, indexPath) {
      if (index === "1-1") {
        this.$router.push({
          name: "DN1Page",
          query: {
            nodeLevel: this.$store.state.nodeLevel,
            wsCode: this.$store.state.wsCode,
            ip: this.$store.state.ip,
            isEquip: this.$store.state.isEquip
          }
        });
      } else if (index === "1-2") {
        this.$router.push({
          name: "DN2Page",
          query: {
            nodeLevel: this.$store.state.nodeLevel,
            wsCode: this.$store.state.wsCode,
            ip: this.$store.state.ip,
            isEquip: this.$store.state.isEquip
          }
        });
      }
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  /* background-color: #172850; */
  background-color: #ffffff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 870px;
}
.content {
  background-color: #ffffff;
}
</style>
