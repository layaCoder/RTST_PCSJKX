<template>
  <div>
    <el-row>
      <h2>购物车</h2>
    </el-row>
    <el-row>
      <el-table :data="this.$store.getters.getGoodsList" stripe style="width: 80%">
        <el-table-column prop="id" label="商品编号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="180">
        </el-table-column>
        <el-table-column prop="price" label="单价">
        </el-table-column>
        <el-table-column prop="totlePrice" label="总价">
        </el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleMinus(scope.$index, scope.row)">-</el-button>
            <span>&nbsp;&nbsp;{{scope.row.count}}&nbsp;&nbsp;</span>
            <el-button size="mini" @click="handlePlus(scope.$index, scope.row)">+</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">从购物车中移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <h4>总价格：{{this.$store.getters.getCartTotlePrice}}</h4>
    </el-row>
    <el-row>
      <div class="btnGroup">
        <el-button type="warning" @click="handleClearCart">清空购物车</el-button>
        <el-button type="success" @click="handlePayForCart">结算</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // cartList: [],
      // totlePrice: 0
    };
  },
  methods: {
    handleMinus(index, row) {
      console.log(index, row);
      this.$store.commit("GOODS_COUNT_MINUS_ONE", {
        goodsItem: {
          name: row.name,
          id: row.id,
          count: row.count,
          price: row.price
        }
      });
    },
    handlePlus(index, row) {
      console.log(index, row);
      this.$store.commit("GOODS_COUNT_PLUS_ONE", {
        goodsItem: {
          name: row.name,
          id: row.id,
          count: row.count,
          price: row.price
        }
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("确定从购物车中移除此商品?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.commit("REMOVE_GOODS_FROM_CART", {
            goodsItem: {
              name: row.name,
              id: row.id,
              count: row.count,
              price: row.price
            }
          });
          this.$message({
            type: "success",
            message: "移除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    handleClearCart() {
      if (this.$store.getters.getGoodsList.length > 0) {
        this.$store.commit("CLEAR_CART");
      } else {
        this.$message({
          type: "info",
          message: "购物车中没有商品"
        });
      }
    },
    handlePayForCart() {
      alert("handlePayForCart fun running");
    }
  },
  mounted() {
    // this.cartList = this.$store.getters.getGoodsList;
    // this.totlePrice = this.$store.getters.getCartTotlePrice;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  float: right;
  margin-right: 20%;
}

.btnGroup{
  float:right;
  margin-right: 20%;
}
</style>
