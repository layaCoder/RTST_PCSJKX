<template>
  <div>
    <span>{{stateName}}</span>
    <img :src="this.stateImg" alt="">
    <span>{{stateValue}}</span>
  </div>
</template>

<script>
export default {
  props:['stateName','stateValue','stateImg'],
  data() {
    return {
      //用state接收从父组件props传递的值
      // name: this.stateName,
      // dataImg:this.stateImg
    };
  },
  methods: {},
  created:function () {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  color: red;
}
</style>
