<template>
  <div class="mainContent">
    <el-row>
      <el-col>
        <h2>电能详情</h2>
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

      <el-col :span='5'>
        <span>设备编号</span>
        <el-select v-model="ws_code" placeholder="请选择" size="mini">
          <!-- <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value">
                </el-option> -->
        </el-select>
      </el-col>

      
      <el-col :span='1'>
        <el-button type="success" size="mini" @click="handleSearch">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
<el-col :span='5'>
        <div class="block">
          <span>时间</span>
          <el-date-picker v-model="dateBegin" type="date" placeholder="选择日期" size="mini">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span='5'>
        <div class="block">
          <span>至</span>
          <el-date-picker v-model="dateEnd" type="date" placeholder="选择日期" size="mini">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row class="tableRow">
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
        <el-table-column prop="pcsName" label="派出所名称" width="180">
        </el-table-column>
        <el-table-column prop="equipCode" label="设备编号" width="180">
        </el-table-column>
        <el-table-column prop="JKDName" label="监控点名称">
        </el-table-column>
        <el-table-column prop="DN" label="总电能">
        </el-table-column>
        <el-table-column prop="dateBegin" label="开始时间">
        </el-table-column>
        <el-table-column prop="dateEnd" label="结束时间">
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
      ws_code:"",
      area: "",
      pcs: "",
      dateBegin: "",
      dateEnd: "",
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
    }
  },
  mounted: function() {
    let testData = [
      {
        equipCode: "70696867",
        pcsName: "后湖",
        JKDName: "测试数据",
        dateBegin: "2018-11-30",
        dateEnd: "2018-12-30",
        DN: "99"
      }
    ];
    this.tableData = testData;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableRow {
  height: 500px;
}
</style>