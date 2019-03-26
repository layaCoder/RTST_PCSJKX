<template>
  <div class="mainContent">
    <el-row>
      <el-col>
        <h2>电能月报</h2>
      </el-col>
    </el-row>

    <el-row class="inputGroup">
      <el-col :span='6' class="inputRow">
        <span class="inputTitle">&nbsp;&nbsp;区&nbsp;域：&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <el-select v-model="area" placeholder="请选择" size="mini" clearable class="equipInput">
          <el-option v-for="item in optionsArea" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='6' class="inputRow">
        <span class="inputTitle">&nbsp;派出所：&nbsp;</span>
        <el-select v-model="pcs" placeholder="请选择" size="mini" clearable class="equipInput">
          <el-option v-for="item in optionsPCS" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='2'>
        <el-button type="success" size="mini" @click="handleSearch">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="tableRow">
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
        <el-table-column prop="pcsName" label="派出所名称" width="180">
        </el-table-column>
        <el-table-column prop="equipName" label="设备名称" width="180">
        </el-table-column>
        <el-table-column prop="Month" label="月份">
        </el-table-column>
        <el-table-column prop="Dn" label="电能消耗">
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
import API from "../../apis/index.js";

export default {
  data() {
    return {
      optionsPCS: [],
      optionsArea: [],
      tableData: [],
      area: "",
      pcs: "",

      currentPage: 1,
      pagesize: 20
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
    //todo：此接口查询的是设备月报，实际需要区域月报
    let url = API.getDnReprotMonth.devUrl + "&PCS_Code=10";
    //+ this.$store.getters.getWsCode;
    this.$axios
      .get(url)
      .then(res => {
        console.log("电能月报", res.data);
        if (res.data.length > 0) {
          console.log(res.data);
          this.tableData = getTableData(res.data);
        }
      })
      .catch(res => {
        console.log(res);
      });

    //加载派出所select
    let urlPCS = API.getPCS.devUrl;
    this.$axios
      .get(urlPCS)
      .then(res => {
        console.log(res.data);
        for (let item of res.data) {
          this.optionsPCS.push({
            label: item.PCS_Name,
            value: item.ID
          });
        }
      })
      .catch(res => {
        console.log(res);
      });

    //加载区域select
    this.optionsArea.push({
      label: "江岸区公安局",
      value: "03"
    });
  }
};

function getTableData(data) {
  let dataArray = [];

  for (let i = 1; i < data.length; i++) {
    let row = {
      pcsName: data[0].PCS_Name,
      equipName: data[0].WS_Name,
      Dn: data[i].dn1,
      Month: i + "月"
    };
    dataArray.push(row);
  }

  return dataArray;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.equipInput {
  width: 60%;
}
.inputTitle {
  font-size: 14px;
  font-weight: bold;
  color: #999;
  font-family: Microsoft YaHei;
  background-color: #ffffff;
  
}
.inputGroup > .inputRow {
  margin-bottom: 10px;
}
.tableRow {
  margin-top: 30px;
  min-height: 400px;
}
</style>