<template>
  <div class="mainContent">
    <el-row>
      <el-col>
        <h2>告警详情</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span='5'>
        <span>区域</span>
        <el-select v-model="area" placeholder="请选择" size="mini">
          <el-option v-for="item in areaOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='5'>
        <span>派出所</span>
        <el-select v-model="pcs" placeholder="请选择" size="mini">
          <el-option v-for="item in pcsOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span='7'>
        <span>设备编号</span>
        <el-input v-model="ws_code" placeholder="请输入设备编号" size="mini" class="equipInput">
        </el-input>
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
        <el-table-column prop="zyqx" label="左右倾斜">
        </el-table-column>
        <el-table-column prop="qhqx" label="前后倾斜">
        </el-table-column>
        <el-table-column prop="shuijin" label="水浸">
        </el-table-column>
        <el-table-column prop="menci" label="门磁">
        </el-table-column>
        <el-table-column prop="fengji" label="风机">
        </el-table-column>
        <el-table-column prop="led" label="led照明">
        </el-table-column>
        <el-table-column prop="fanglei" label="防雷">
        </el-table-column>
        <el-table-column prop="jldy" label="交流电压报警">
        </el-table-column>
        <el-table-column prop="jldd" label="交流掉电">
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
import API from "../../apis/index";

export default {
  data() {
    return {
      tableData: [],
      areaOptions: [],
      pcsOptions: [],
      ws_code: "",
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
        JKDName: "测试数据"
      }
    ];
    this.tableData = testData;
    //测试api接口
    let url = "api/Handler/AjaxTestHandler.ashx?mod=6&&PCS_ID=10";
    this.$axios.get(url).then(res => {
      console.log(res.data);
    });
    ///////////////////////////

    //加载区域select数据
    this.areaOptions = [{ label: "江岸区", value: "0003" }];
    //加载派出所select数据
    let pcsListUrl = API.getPCS.devUrl;
    this.$axios.get(pcsListUrl).then(res => {
      this.pcsOptions.push({ label: "全部", value: 0 });
      for (let item of res.data) {
        this.pcsOptions.push({ label: item.PCS_Name, value: item.ID });
      }
    });

    switch (this.$route.query.nodeLevel) {
      case 0:
        this.area = this.$route.query.wsCode; //区域暂时写死，后台无相应api
        this.pcs = 0;
        break;
      case 1:
        this.area = "0003";
        this.pcs = this.$route.query.wsCode;
        break;
      case 2:
        this.area = "";
        this.pcs = "";
        this.ws_code = this.$route.query.wsCode;
        break;
      default:
        this.area = "";
        this.pcs = "";
        this.ws_code = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableRow {
  height: 500px;
}
.equipInput {
  width: 60%;
}
</style>