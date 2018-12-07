<template>
  <div>
    <el-row>
      <h2>购物车</h2>
    </el-row>
    <el-row>
      <el-table :data="cartList" stripe style="width: 80%">
        <el-table-column prop="id" label="商品编号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="180">
        </el-table-column>
        <el-table-column prop="price" label="单价">
        </el-table-column>
        <el-table-column prop="count" label="数量">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartList: []
    };
  },
  methods: {},
  mounted() {
    this.cartList = this.$store.getters.getGoodsList;
    console.log(this.cartList);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
