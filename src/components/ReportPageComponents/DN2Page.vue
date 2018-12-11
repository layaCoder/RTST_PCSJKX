<template>
  <div class="mainContent">
    <el-row>
      <el-col>
        <h2>电能月报</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span='5'>
        <span>区域</span>
        <el-select v-model="area" placeholder="请选择" size="mini">
          <el-option v-for="item in optionsArea" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='7'>
        <span>派出所</span>
        <el-select v-model="pcs" placeholder="请选择" size="mini">
          <el-option v-for="item in optionsPCS" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='1'>
        <el-button type="success" size="mini" @click="handleSearch">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%" v-loading="loading">
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
      loading:true,
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
    let url = API.getDnReprotMonth.devUrl + "&WS_Code=70696867";
    this.$axios
      .get(url)
      .then(res => {
        console.log(res.data);
        if (res.data.length > 0) {
          console.log(res.data)
          this.tableData = getTableData(res.data);
          this.loading = false;
        }
      })
      .catch(res => {
        console.log(res);
      });

    //加载派出所select
    let urlPCS = API.getPCS.devUrl;
    this.$axios.get(urlPCS).then(res => {
      console.log(res.data);
      for(let item of res.data){
        this.optionsPCS.push({
          label:item.PCS_Name,
          value:item.ID
        })
      }
    }).catch(res=>{
      console.log(res)
    })

    //加载区域select
    this.optionsArea.push({
      label:'江岸区公安局',
      value:'03'
    })
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
.tableRow {
  height: 500px;
}
</style>