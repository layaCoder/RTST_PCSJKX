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
                            <el-menu-item index="1-1">监控点管理</el-menu-item>
                            <el-menu-item index="1-2">人员管理</el-menu-item>
                        </el-menu-item-group>
                        <!-- <el-menu-item-group title="分组2"> -->
                        <el-menu-item index="1-3">维保单位管理</el-menu-item>
                        <!-- </el-menu-item-group> -->
                        <el-menu-item index="1-4">摄像机管理</el-menu-item>
                    </el-submenu>
                    <!-- <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item> -->

                </el-menu>
            </el-col>
            <el-col :span="20" class="table">
                <router-view/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      testData: "1"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index, indexPath) {
      if (index === "1-1") {
        this.$router.push({ name: "jkdConfig" });
      } else if (index === "1-2") {
        this.$router.push({ name: "ryConfig" });
      } else if (index === "1-3") {
        this.$router.push({ name: "wbgsConfig" });
      } else if (index === "1-4") {
        this.$router.push({ name: "sxjConfig" });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  color: red;
}

.main {
  /* background: #172850; */
  background-color: #f0f2f5;
  /*padding: 0px;*/
}



.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 870px;
}
</style>