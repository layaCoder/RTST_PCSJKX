<template>
  <div class="mapChart">
    <ve-map :data="chartData" :settings="chartSettings"></ve-map>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      position: "china",
      zoom: 1
    };
    return {
      chartData: {
        columns: ["位置", "人口", "面积"],
        rows: [
          { 位置: "吉林", 税收: 123, 人口: 123, 面积: 92134 },
          { 位置: "北京", 税收: 1223, 人口: 2123, 面积: 29234 },
          { 位置: "上海", 税收: 2123, 人口: 1243, 面积: 94234 },
          { 位置: "浙江", 税收: 4123, 人口: 5123, 面积: 29234 }
        ]
      }
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mapChart {
  min-height: 550px;
  margin-top: 30px;
}
</style>