<template>
  <div class="mainContent">
    <el-row>
      <h2>图表DEMO</h2>
    </el-row>
    <el-row>
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </el-row>
    <el-row>
      <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartSettings: {
        metrics: ["访问用户", "下单用户"],
        dimension: ["月份"]
      },
      chartData: {
        columns: ["月份", "访问用户", "下单用户", "下单率"],
        rows: [
          { 月份: "1月", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 月份: "2月", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 月份: "3月", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 月份: "4月", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 月份: "5月", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 月份: "6月", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
          { 月份: "7月", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 月份: "8月", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 月份: "9月", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 月份: "10月", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 月份: "11月", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 月份: "12月", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      }
    };
  },
  methods: {},
  created: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
