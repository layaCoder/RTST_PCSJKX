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
        <el-select v-model="area" placeholder="请选择" size="mini" clearable @change="handleChangeArea">
          <el-option v-for="item in areaOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='5'>
        <span>派出所</span>
        <el-select v-model="pcs" placeholder="请选择" size="mini" clearable @change="handleChangePcs">
          <el-option v-for="item in pcsOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span='7'>
        <span>设备编号</span>
        <el-input v-model="ws_code" placeholder="请输入设备编号" size="mini" class="equipInput">
          <!-- <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value">
                </el-option> -->
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
          <el-date-picker v-model="dateBegin" type="date" placeholder="选择日期" size="mini" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span='5'>
        <div class="block">
          <span>至</span>
          <el-date-picker v-model="dateEnd" type="date" placeholder="选择日期" size="mini" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
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
        <!-- <el-table-column prop="JKDName" label="监控点名称">
        </el-table-column> -->
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
      pagesize: 10
    };
  },
  methods: {
    handleSearch: function() {
      switch (this.searchType) {
        case 0:
          let areUrl =
            API.getDNoneToonePCSSUM.devUrl +
            "&dateFont=" +
            this.dateBegin +
            "&dateLater=" +
            this.dateEnd;
          console.log(areUrl);
          this.$axios
            .get(areUrl)
            .then(res => {
              console.log("return json", res);
              if (res.data.length > 0) {
                //获取表格数据
                let returnTable = [];
                res.data.map(item => {
                  returnTable.push({
                    pcsName: item.PCS_Name,
                    equipCode: "---",
                    DN: item.Column1,
                    dateBegin: this.dateBegin,
                    dateEnd: this.dateEnd
                  });
                });
                this.tableData = [...returnTable];
              } else {
                this.$message({
                  message: "未查询到数据",
                  type: "warning"
                });
                this.tableData = [];
              }
            })
            .catch(error => {
              console.log(error);
              this.$message({
                message: "查询出错",
                type: "danger"
              });
              this.tableData = [];
            });
          break;
        //查询派出所
        case 1:
          let pcsDnUrl =
            API.getDNoneToonePCS.devUrl +
            "&PCS_ID=" +
            this.pcs +
            "&dateFont=" +
            this.dateBegin +
            "&dateLater=" +
            this.dateEnd;
          console.log("url", pcsDnUrl);
          this.$axios
            .get(pcsDnUrl)
            .then(res => {
              console.log("return json", res);
              if (res.data.length > 0) {
                //获取表格数据
                this.tableData = formatData(
                  res.data,
                  this.dateBegin,
                  this.dateEnd
                );
              } else {
                this.$message({
                  message: "未查询到数据",
                  type: "warning"
                });
                this.tableData = [];
              }
            })
            .catch(error => {
              console.log(error);
              this.$message({
                message: "查询出错",
                type: "danger"
              });
              this.tableData = [];
            });
          break;
        default:
          return;
      }
    },
    //分页方法
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    handleChangeArea: function(e) {
      this.searchType = 0;
    },
    handleChangePcs: function(e) {
      if (e === 0) {
        // vaue=0 是  【全部】  选项
        this.searchType = 0;
      } else this.searchType = 1;
    }
  },
  mounted: function() {
    //根据url初始化查询类型
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

//返回json格式化表格数据
function formatData(data, dateBegin, dateEnd) {
  let returnTable = [];
  data.map(item => {
    returnTable.push({
      pcsName: item.PCS_Name,
      equipCode: item.WS_Code,
      DN: item.DN,
      dateBegin: dateBegin,
      dateEnd: dateEnd
    });
  });
  return returnTable;
}
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