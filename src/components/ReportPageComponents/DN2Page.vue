<template>
  <div>
    <el-row>
      <el-col>
        <h2>电能月报</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span='5'>
        <span>区域</span>
        <el-select v-model="area" placeholder="请选择" size="mini">
          <!-- <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value">
                </el-option> -->
        </el-select>
      </el-col>
      <el-col :span='5'>
        <span>派出所</span>
        <el-select v-model="pcs" placeholder="请选择" size="mini">
          <!-- <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value">
                </el-option> -->
        </el-select>
      </el-col>
      <el-col :span='1'>
        <el-button type="success" size="mini" @click="handleSearch">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="tableRow">
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
        <el-table-column prop="pcsName" label="派出所名称" width="180">
        </el-table-column>
        <el-table-column prop="pcsId" label="派出所编号" width="180">
        </el-table-column>
        <el-table-column prop="Month" label="月份">
        </el-table-column>
        <el-table-column prop="DN" label="总电能消耗">
        </el-table-column>
       
      </el-table>
    </el-row>
    <el-row>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      area: "",
      pcs: "",
      
      currentPage: 1,
      pagesize: 10
    };
  },
  methods: {
    handleSearch: function() {
      alert("handle search func running");
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
  },
  mounted: function() {
      let testData = [
        {
          equipCode: "70696867",
          pcsName: "后湖",
          pcsId:'测试数据',
          Month:'1月',
          DN: "99"
        }
      ];
      this.tableData = testData;
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableRow{
  height: 500px;
}
</style>