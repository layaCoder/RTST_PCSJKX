<template>
  <div>
    <el-row>
      <h2>商品列表</h2>
    </el-row>
    <el-row>
      <el-col :span="3" v-for="(item,index) in goods" :key="index">
        <!-- <goods-item :goodsName="goods[index].name" :img="goods[index].img" :goodCount="goods[index].count"></goods-item> -->
        <goodsItem :goodsItem="goods[index]"></goodsItem>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import goodsItem from "../parts/CartComponents/GoodsItem";

export default {
  components: { goodsItem },
  data() {
    return {
      data: "",
      goods: []
    };
  },
  methods: {},
  mounted() {
    let goodsDataArray = [
      {
        id: 0,
        name: "机匣",
        img: "imgUrl1",
        count: 0,
        price: 135
      },
      {
        id: 1,
        name: "鱼骨",
        img: "imgUrl2",
        count: 0,
        price: 297
      },
      {
        id: 2,
        name: "peq15",
        img: "imgUrl3",
        count: 0,
        price: 275
      }
    ];
    this.goods = [...goodsDataArray];
    console.log(this.goods);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
