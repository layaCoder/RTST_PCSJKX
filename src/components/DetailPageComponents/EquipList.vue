<template>
 <div>
   <strong>Equip List</strong>
    <div>节点编号 {{this.$route.params.wsCode}}</div>
    <div>节点ip {{this.$route.params.ipAddress}}</div>
    <el-button type="warning" @click="hanleClick">测试loading</el-button>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        data:''
      };
    },
    methods: {
      hanleClick() {
        //调出loading界面
       this.$store.commit("showLoadingBar", { flag: true });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 strong{
     color: blue;
 }

</style>