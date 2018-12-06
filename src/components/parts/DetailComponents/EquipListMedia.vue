<template>
    <div class="mediaDiv">
        <div class="mediaRow">
            <strong>{{stateName}}</strong>
        </div>
        <div class="mediaRow">
            <img :src="this.stateImg" alt="" class="mediaImg">
        </div>
        <div class="mediaRow">
            <el-button round :disabled="this.stateValue===0?true:false" :type="this.stateValue===0?'success':'warning'" @click="handleClick">{{stateValue===0?' &nbsp;&nbsp;正常&nbsp;&nbsp; ':'异常( '+stateValue+' )'}}</el-button>
        </div>
    </div>
</template>

<script>
export default {
  props: ["stateName", "stateValue", "stateImg","title"],
  data() {
    return {
      //用state接收从父组件props传递的值
      // name: this.stateName,
      // dataImg:this.stateImg
    };
  },
  methods: {
    handleClick() {
      this.$emit('getTableData',this.title)
    }
  },
  created: function() {},
  mounted: function() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  color: #13227a;
  font-size: 20px;
}

.mediaImg {
  width: 80px;
}

.mediaDiv {
  background-color: #eeeeee;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 10px;
  border-radius: 5px;
}

.mediaRow {
  margin-bottom: 15px;
}
</style>
