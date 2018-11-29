<template>
    <div>
        <strong>监控点管理</strong>
        <strong>{{this.compId}}</strong>
    </div>
</template>

<script>
import API from "../../../apis/index.js";

export default {
  props: {
    compId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      //dataComId:''
    };
  },
  methods: {},
  mounted: function() {
    ////////////////////////////////////////////////////////
    //将父组件props传递给子组件data，comId不变，这里用不到
    //this.dataComId=this.compId
    /////////////////////////////////////////////////
    let url = API.getCameraAll.devUrl + "&where=SCJComID=" + this.compId;
    console.log(url);

    this.$axios.get(url).then(res => {
      console.log(res.data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>