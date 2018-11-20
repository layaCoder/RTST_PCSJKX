<template>
  <div>
    <h2>电能报表</h2>
    <div>[url]节点编号 {{this.$route.params.wsCode}}</div>
    <div>[url]节点ip {{this.$route.params.ipAddress}}</div>
    <div>[url]节点等级{{this.$route.params.nodeLevel}}</div>
    <div>----------------------------</div>
    <div>[store]count:{{count}}</div>
    <div>[store]节点编号{{wsCode}}</div>
    <div>[store]节点ip{{ip}}</div>
    <div>[store]是否为终端设备{{isEquip}}</div>
    <div>[store]nodeLevel{{nodeLevel}}</div>
    <el-row>
      <el-col :span="3">
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchType:1, // 选择查询类型，1：从今年1月1日至今 2：按照指定时间段

    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    //从store中获取当前设备或地点信息
    isEquip() {
      return this.$store.state.isEquip;
    },
    wsCode() {
      return this.$store.state.wsCode;
    },
    ip() {
      return this.$store.state.ip;
    },
    nodeLevel(){
      return this.$store.state.nodeLevel
    }
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
