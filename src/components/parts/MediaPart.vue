<template>
  <div class="mediaDiv">
    <div>
      <strong>{{stateName}}</strong>
    </div>
    <div class="imgDiv">
      <img :src="this.stateImg" alt="" class="mediaImg">
    </div>
    <div class="valueDiv">
      <span :class="this.stateValue==='正常'?'stateValueOk':'stateValueError'" :id="this.stateName==='设备编号'?'stateValue':''">
         <i v-if="this.stateName!=='设备编号'" :class="this.stateValue==='正常'? 'el-icon-success':'el-icon-warning'"></i>
        {{stateValue}}
        </span>
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
  /* color: #6d6d6d; */
  font-size: 18px;
}

strong {
  color: #13227a;
  font-size: 20px;
}

.mediaImg {
  width: 80px;
}
.imgDiv {
  padding: 20px 10px;
}

.mediaDiv {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  background-color: #efefef;
  width: 150px;
  /* padding-bottom: 10px; */
  padding-top: 10px;
  border-radius: 5px;
  margin: 10px 0px;
}

.stateValueError {
  color: red;
  font-size: 18px;
}

.stateValueOk {
  color: #00ae2c;
  font-size: 18px;
}
#stateValue{
  color: #888
}

.valueDiv {
  padding: 10px;
  background-color: #fff;
  border-radius: 0px 0px 5px 5px;
}
</style>
