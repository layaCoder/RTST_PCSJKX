<template>
  <div>
    <el-row class="row">
      <h2>{{this.name}}</h2>
    </el-row>
    <el-row class="row">
      <span>{{this.img}}</span>
      <div>
        <!--图片暂时写死 -->
        <img src="../../../assets/parts/part.png" alt="">
      </div>
    </el-row>
    <el-row class="row">
      <span>单价:{{this.price}}</span>
    </el-row>
    <!-- 商品清单不显示合计金额 -->
    <!-- <el-row class="row">
      <span>合计:{{this.getTotlePrice}}</span>
    </el-row> -->
    <el-row class="row">
      <el-button type="success" size="mini" @click="showDiaolog">添加到购物车</el-button>
    </el-row>

    <!-- 数量选择 模态框 -->
    <el-dialog title="请选择数量" :visible.sync="showCountDialog" width="30%" :before-close="handleClose">
      <el-button type="default" size="mini" @click="handleMinusOne" :disabled="count<1">-</el-button>
      <span> 数量:{{this.count}}</span>
      <el-button type="default" size="mini" @click="handlePlusOne">+</el-button>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showCountDialog=false">取 消</el-button>
        <el-button type="primary" @click="handleAddToCart">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //  props:['goodsName','img','goodsCount'],
  props: ["goodsItem"],
  data() {
    return {
      showCountDialog: false,
      name: "",
      id: "",
      count: 0,
      img: "",
      price: 0
    };
  },
  computed: {
    getTotlePrice: function() {
      return this.price * this.count;
    }
  },
  methods: {
    //显示数量模态框
    showDiaolog() {
      if (this.$store.getters.isGoodsInCart(this.id) === true) {
        this.$message({
          message: "商品已在购物车中",
          type: "warning"
        });
        return;
      }
      this.showCountDialog = true;
      this.count = 1;
    },
    //提交加入购物车
    handleAddToCart() {
      //this.count = 1;
      // this.$store.commit("SET_EQUIP", { flag: true });
      this.$store.commit("GOODS_PLUS_ONE", {
        goodsItem: {
          name: this.name,
          id: this.id,
          count: this.count,
          price: this.price,
          totlePrice: this.count * this.price
        }
      });
      this.showCountDialog = false;
      console.log(this.$store.getters.getGoodsList);
    },

    handlePlusOne() {
      this.count += 1;
    },
    handleMinusOne() {
      this.count -= 1;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {
    this.name = this.goodsItem.name;
    this.id = this.goodsItem.id;
    this.count = this.goodsItem.count;
    this.img = this.goodsItem.img;
    this.price = this.goodsItem.price;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin-bottom: 20px;
}

img {
  width: 80px;
}
</style>
