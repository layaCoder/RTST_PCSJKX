<template>
  <div class="mainContent">
    <el-row>
      <el-col span="3" offset="10">
        <h2>告警详情</h2>
      </el-col>
      <el-col span="1" offset="10">
        <i class="el-icon-edit-outline" @click="export_Excel"></i>
      </el-col>
    </el-row>

    <el-row class="inputGroup">
      <el-col :span='6' class="inputRow">
        <span class="inputTitle">&nbsp;&nbsp;区&nbsp;域：&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <el-select v-model="area" placeholder="请选择" size="mini" clearable @change="handleChangeArea" class="equipInput">
          <el-option v-for="item in areaOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='6' class="inputRow">
        <span class="inputTitle">&nbsp;派出所：&nbsp;</span>
        <el-select v-model="pcs" placeholder="请选择" size="mini" clearable @change="handleChangePcs" class="equipInput">
          <el-option v-for="item in pcsOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span='6'>
        <span class="inputTitle">设备编号：</span>
        <el-input v-model="ws_code" placeholder="请输入设备编号" size="mini" class="equipInput" @focus="inputFocus">
        </el-input>
      </el-col>

      <el-col :span='2'>
        <el-button type="success" size="mini" @click="handleSearch">查询</el-button>
      </el-col>
      <!-- <el-col :span='2'>
        <el-button type="warning" size="mini" @click="export_Excel">导出</el-button>
      </el-col> -->
    </el-row>
    <el-row>
      <el-col :span='6'>
        <span class="inputTitle">开始时间：</span>
        <el-date-picker v-model="dateBegin" type="date" placeholder="选择日期" size="mini" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" class="equipInput">
        </el-date-picker>
      </el-col>
      <el-col :span='6'>
        <span class="inputTitle">结束时间:</span>
        <el-date-picker v-model="dateEnd" type="date" placeholder="选择日期" size="mini" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" class="equipInput">
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row class="tableRow">
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
        <el-table-column prop="pcsName" label="派出所名称" width="180">
        </el-table-column>
        <el-table-column prop="equipCode" label="设备编号" width="180">
        </el-table-column>
        <!-- <el-table-column prop="JKDName" label="监控点名称">
        </el-table-column> -->
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
        <el-table-column prop="jldy" label="交流电压">
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
      searchType: "", //查询类型，0=区域，1=派出所，2=设备编码
      tableData: [],
      areaOptions: [],
      pcsOptions: [],
      ws_code: "",
      area: "",
      pcs: "",
      dateBegin: "",
      dateEnd: "",
      currentPage: 1,
      pagesize: 10,
      pcsName: ""
    };
  },
  methods: {
    handleChangeArea: function() {
      this.searchType = 0;
      this.pcs = 0;
      this.ws_code = "";
    },
    handleChangePcs: function(val) {
      this.searchType = 1;
      this.ws_code = "";
      console.log(this.pcsOptions);
    },
    inputFocus: function() {
      this.searchType = 2;
      this.pcs = "";
    },
    handleSearch: function() {
      console.log(this.dateBegin, this.dateEnd, this.searchType);
      switch (this.searchType) {
        //查询区域
        case 0:
          let urlArea = API.getALARMCountArea.devUrl;
          console.log(urlArea);
          this.$axios.get(urlArea).then(res => {
            console.log(res);
          });
          break;
        //查询派出所
        case 1:
          let urlPcs = API.getPcsAlarmCount.devUrl + "&PCS_ID=" + this.pcs;
          console.log(urlPcs);
          this.$axios.get(urlPcs).then(res => {
            // this.tableData = getAlarmTable(res.data);
            let table = getAlarmTable(res.data);
            table.map(item => {
              let key = "pcsName"; //通过控件取值，添加派出所名称
              let value = this.pcsOptions[this.pcs].label;
              item[key] = value;
            });
            this.tableData = table;
          });
          break;
        //查询设备编号
        case 2:
          let url = API.getWSAlarmCount.devUrl + "&WS_Code=" + this.ws_code;
          console.log(url);
          this.$axios.get(url).then(res => {
            // this.tableData = getAlarmTable(res.data);
            let table = getAlarmTable(res.data);
            table.map(item => {
              let key = "equipCode";
              let value = this.ws_code;
              item[key] = value;
            });
            this.tableData = table;
          });
          break;
        default:
          return;
      }
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    inputFocus() {
      this.searchType = 2;
      this.area = "";
      this.pcs = "";
    },
    // 导出表格数据////////////////////////////////////////
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    export_Excel() {
      this.$confirm("确定要导出表格数据么？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          require.ensure([], () => {
            const { exportJsonToExcel } = require("../../vendor/Export2Excel");
            const tHeader = [
              "派出所名称",
              "设备编号",
              "监控点名称",
              "左右倾斜",
              "前后倾斜",
              "水浸",
              "门磁",
              "风机",
              "led",
              "防雷",
              "交流电压",
              "交流电流"
            ];
            const filterVal = [
              "pscName",
              "wsCode",
              "area",
              "zyqx",
              "qhqx",
              "shuijin",
              "menci",
              "fengji",
              "led",
              "fanglei",
              "jldy",
              "jldd"
            ];
            // const list = this.userList;
            const data = this.formatJson(filterVal, this.tableData);
            exportJsonToExcel(tHeader, data, "电能统计");
          });
        })
        .catch(() => {});
    }
    /////////////////////////////////////////////////////
  },
  mounted: function() {
    this.searchType = this.$route.query.nodeLevel;

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

function getAlarmTable(data) {
  let resultArray = [];
  console.log(data);
  data.map(item => {
    let singleAlarm = {
      zyqx: item.BITValueB0,
      qhqx: item.BITValueB1,
      shuijin: item.BITValueB2,
      menci: item.BITValueC0,
      fengji: item.BITValueC1,
      led: item.BITValueC2,
      fanglei: item.BITValueC3,
      jldy: parseInt(item.BITValueC5) + parseInt(item.BITValueC6),
      jldd: item.BITValueC7
    };
    resultArray.push(singleAlarm);
  });
  return resultArray;
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
}
.inputGroup > .inputRow {
  margin-bottom: 10px;
}
.tableRow {
  margin-top: 30px;
  min-height: 400px;
}
.mainContent {
  box-shadow: 0px 0px 5px #999999;
  padding: 10px;
  /* margin-left:-4%; */
  margin: 4% 4% 0 0;
  background-color: #fff
}

.el-icon-edit-outline{
  cursor: pointer;
}
</style>