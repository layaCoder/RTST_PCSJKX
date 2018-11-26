<template>
  <div class="mediaDiv">
    <div>
      <strong>{{stateName}}</strong>
    </div>
    <div>
      <img :src="this.stateImg" alt="" class="mediaImg">
    </div>
    <div class="valueDiv">
      <span :class="this.stateValue==='关闭'?'stateValueOk':'stateValueError'" :id="this.stateName==='设备编号'?'stateValue':''">{{stateValue}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stateName", "stateValue", "stateImg"],
  data() {
    return {
      //用state接收从父组件props传递的值
      // name: this.stateName,
      // dataImg:this.stateImg
    };
  },
  methods: {},
  created: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#stateValue {
  color: #6d6d6d;
  font-size: 18px;
}

strong {
  color: #13227a;
  font-size: 20px;
}

.mediaImg {
  width: 80px;
}

.mediaDiv {
  background-color: #eeeeee;
}

.stateValueError {
  color: red;
  font-size: 18px;
}

.stateValueOk {
  color: #00ae2c;
  font-size: 18px;
}
.mediaDiv {
  padding-bottom: 10px;
}
</style>
