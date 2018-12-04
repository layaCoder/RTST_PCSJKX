<template>
  <div>
    <el-row>
      <h2>监控点管理</h2>
    </el-row>
    <el-row>
      <el-col :span="1">
        <el-button @click="handleShowDialog">添加</el-button>
      </el-col>

    </el-row>
    <el-row>
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
        <el-table-column prop="WS_ID" label="流水号">
        </el-table-column>
        <el-table-column prop="WS_Code" label="设备编号">
        </el-table-column>
        <el-table-column prop="WS_Name" label="监控点名称">
        </el-table-column>
        <!-- <el-table-column prop="WS_Org_Code" label="责任人ID">
        </el-table-column> -->
        <el-table-column prop="WS_OrgName" label="责任人">
        </el-table-column>
        <el-table-column prop="WS_Area_Code" label="区域代码">
        </el-table-column>
        <el-table-column prop="WS_DWSCode" label="设备代码">
        </el-table-column>
        <el-table-column prop="WS_Longitude" label="经度">
        </el-table-column>
        <el-table-column prop="WS_Latitude" label="纬度">
        </el-table-column>
        <!-- <el-table-column prop="WS_SysCode" label="派出所代码">
        </el-table-column> -->
        <el-table-column prop="PCS_Name" label="派出所">
        </el-table-column>
        <!-- <el-table-column prop="WS_Operators" label="维护人员ID">
        </el-table-column> -->
        <el-table-column prop="WS_OperatorsName" label="维护人员">
        </el-table-column>
        <el-table-column prop="WS_IP" label="IP地址">
        </el-table-column>
        <el-table-column label="操作" width="240px">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="info" @click="handleShowSwitchModal(scope.$index,scope.row)">开关设置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!--分页组件-->
    <el-row>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
      </el-pagination>
    </el-row>
    <!--新增/修改 模态框 -->
    <div>
      <el-dialog :title="this.formType==0?'新增监控点信息':'修改监控点信息'" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
        <!-- <span>这是一段信息</span> -->
        <el-form :v-model="formObj" ref="formObj">
          <el-row class="modalRow">
            <el-col :span="12">
              <el-input v-model="formObj.WS_ID" placeholder="请输入内容" :disabled="true">
                <template slot="prepend">流水号</template>
              </el-input>
            </el-col>
            <el-col :span="12">
              <el-input v-model="formObj.WS_Code" placeholder="请输入内容">
                <template slot="prepend">设备编号</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="modalRow">
            <el-col :span="12">
              <!-- <el-input v-model="formObj.WS_SysCode" placeholder="请输入内容">
                <template slot="prepend">派出所编码</template>
              </el-input> -->
              <span class="selectTitle">派出所</span>
              <el-select v-model="formObj.WS_SysCode" placeholder="请选择">
                <el-option v-for="item in optionsPCS" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <el-input v-model="formObj.WS_Name" placeholder="请输入内容">
                <template slot="prepend">监控点名称</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="modalRow">
            <el-col :span="12">
              <!-- <el-input v-model="formObj.WS_Org_Code" placeholder="请输入内容">
                <template slot="prepend">责任人ID</template>
              </el-input> -->
              <span class="selectTitle">责任人</span>
              <el-select v-model="formObj.WS_Org_Code" placeholder="请选择">
                <el-option v-for="item in options_orgCode" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <el-input v-model="formObj.WS_Area_Code" placeholder="请输入内容">
                <template slot="prepend">区域代码</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="modalRow">
            <el-col :span="12">
              <el-input v-model="formObj.WS_DWSCode" placeholder="请输入内容">
                <template slot="prepend">设备代码</template>
              </el-input>
            </el-col>
            <el-col :span="12">
              <el-input v-model="formObj.WS_Longitude" placeholder="请输入内容">
                <template slot="prepend">经度</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="modalRow">
            <el-col :span="12">
              <el-input v-model="formObj.WS_Latitude" placeholder="请输入内容">
                <template slot="prepend">纬度</template>
              </el-input>
            </el-col>
            <el-col :span="12">
              <!-- <el-input v-model="formObj.WS_Operators" placeholder="请输入内容">
                <template slot="prepend">维护人员ID</template>
              </el-input> -->
              <span class="selectTitle">维护人</span>
              <el-select v-model="formObj.WS_Operators" placeholder="请选择">
                <el-option v-for="item in options_WS_Operators" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="modalRow">
            <el-col :span="12">
              <el-input v-model="formObj.WS_IP" placeholder="请输入内容">
                <template slot="prepend">IP地址</template>
              </el-input>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit('formObj')">提交</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
        <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span> -->
      </el-dialog>
    </div>
    <!--开关设置模态框 2 -->
    <div>
      <el-dialog :title="'开关设置'" :visible.sync="dialogSwitchVisible" width="60%" :before-close="handleClose">
        <JKDSwitchComponent :equipCode="this.equipCode" v-if="dialogSwitchVisible"></JKDSwitchComponent>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import API from "../../apis/index.js";
import JKDSwitchComponent from "../parts/ConfigComponents/JKDSwitchComponent.vue";

export default {
  components: { JKDSwitchComponent },
  data() {
    return {
      equipCode: "", //设备编号，用props传递给子组件
      formType: 0, //表单状态，0位新增，1为修改
      formObj: {
        WS_Area_Code: "",
        WS_Code: "",
        WS_DWSCode: "",
        WS_ID: "",
        WS_IP: "",
        WS_Latitude: "",
        WS_Longitude: "",
        WS_Name: "",
        WS_Num: "",
        WS_Operators: "",
        WS_Org_Code: "",
        WS_SysCode: ""
      },

      tableData: [
        // {
        //   ID: "01",
        //   ComName: "skt1",
        //   Operator: "laya",
        //   Address: "武大园二路",
        //   Tel: "110"
        // }
      ],
      currentPage: 1,
      pagesize: 10,
      dialogVisible: false,
      // handleShowDialog:false,
      dialogSwitchVisible: false,
      optionsPCS: [
        {
          label: "选项1",
          value: "01"
        }
      ],
      options_orgCode: [
        {
          label: "型号01",
          value: "01"
        }
      ],
      options_WS_Operators: []
    };
  },
  methods: {

    handleEdit(index, row) {
      this.formType = 1; //表单type=1，表示为修改方法
      this.dialogVisible = true;
      this.formObj.WS_ID = row.WS_ID;
      this.formObj.WS_Name = row.WS_Name;
      this.formObj.WS_Area_Code = row.WS_Area_Code;
      this.formObj.WS_Code = row.WS_Code;
      this.formObj.WS_DWSCode = row.WS_DWSCode;
      this.formObj.WS_IP = row.WS_IP;
      this.formObj.WS_Latitude = row.WS_Latitude;
      this.formObj.WS_Longitude = row.WS_Longitude;
      this.formObj.WS_Num = row.WS_Num;
      this.formObj.WS_Operators = parseInt(row.WS_Operators);
      this.formObj.WS_Org_Code = parseInt(row.WS_Org_Code);
      this.formObj.WS_SysCode = parseInt(row.WS_SysCode);
      console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
      // this.$confirm("确认删除此条信息？", "提示", {
      //   confirmButtonTest: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // })
      //   .then(() => {
      //     var url = "api/Handler/AjaxTestHandler.ashx?mod=33";
      //     this.$axios({
      //       url: url,
      //       method: "post",
      //       params: { ID: row.ID }
      //     }).then(res => {
      //       console.log(res);
      //     });
      //     // axios post请求成功后执行
      //     //重新加载表格数据，刷新表格/////////////////////////
      //     var url = "api/Handler/AjaxTestHandler.ashx?mod=42";
      //     this.$axios.get(url).then(res => {
      //       console.log(res.data);
      //       this.tableData = getTableData(res.data);
      //     });
      //     //////////////////////////////////////////////////
      //     this.$message({
      //       type: "success",
      //       message: "删除成功"
      //     });
      //   })
      //   .catch(() => {
      //     this.message({
      //       type: "info",
      //       message: "已取消删除"
      //     });
      //   });
    },
    handleShowDialog() {
      this.formType = 0; //表单type=0，表示为新增方法
      this.formObj.WS_ID = 0;
      this.formObj.WS_Name = "";
      this.formObj.WS_Area_Code = "";
      this.formObj.WS_Code = "";
      this.formObj.WS_DWSCode = "";
      this.formObj.WS_IP = "";
      this.formObj.WS_Latitude = "";
      this.formObj.WS_Longitude = "";
      this.formObj.WS_Num = "";
      this.formObj.WS_Operators = "";
      this.formObj.WS_Org_Code = "";
      this.formObj.WS_SysCode = "";
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    //提交新增/修改表单
    handleSubmit: function(e) {
      //axios post提交表单
      if (this.formType === 0) {
        this.formObj.ID = 0; //标记ID为0，后台识别为新增方法
        console.log(this.formObj);
      }
      let url = API.addOrUpdateWorkSite.devUrl;
      this.$axios({
        url: url,
        method: "post",
        data: this.formObj,
        transformRequest: [
          //格式化数据，以表单格式提交
          function(data) {
            // Do whatever you want to transform the data
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => {
          // axios post请求成功后执行
          //重新加载表格数据，刷新表格/////////////////////////

          //var url = "api/Handler/AjaxTestHandler.ashx?mod=2";
          let url = API.getWorkSiteAll.devUrl;
          console.log(url);
          this.$axios.get(url).then(res => {
            console.log(res.data);
            this.tableData = getTableData(res.data);
          });
          //////////////////////////////////////////////////
        })
        .catch(error => {
          console.log(error);
        });

      //模态框关闭显示
      this.dialogVisible = false;
    },
    handleShowSwitchModal: function(index, row) {
      console.log(row);
      this.equipCode = row.WS_Code;
      this.dialogSwitchVisible = true;
    },
    changeStatus: function(e) {
      console.log(e);
    }
  },
  created: function() {
    let url = API.getWorkSiteAll.devUrl;
    console.log(url);
    this.$axios.get(url).then(res => {
      console.log(res.data);
      this.tableData = getTableData(res.data);
    });
  },

  mounted: function() {
    //加载 【派出所】selcet数据
    let url = API.getPCS.devUrl;
    let array = [];
    this.$axios.get(url).then(res => {
      for (let item of res.data) {
        array.push({
          value: item.ID,
          label: item.PCS_Name
        });
      }
      this.optionsPCS = array;
    });
    //加载 【责任人】select数据
    let urlWS_Org_Code = API.getUserInfoAll.devUrl;
    // let urlWS_Org_Code = API.getUserInfoAll.devUrl+'&where=UserType=01'  根据where条件进行筛选
    let arrayOrgCode = [];
    this.$axios.get(urlWS_Org_Code).then(res => {
      for (let item of res.data) {
        let OrgCodeItem = {
          value: item.ID,
          label: item.UserName
        };
        arrayOrgCode.push(OrgCodeItem);
      }
      this.options_orgCode = arrayOrgCode;
    });

    //加载 【维护人员】select数据
    let urlOperators = API.getUserInfoAll.devUrl;
    let arrayOperators = [];
    this.$axios.get(urlOperators).then(res => {
      for (let item of res.data) {
        let OrgCodeItem = {
          value: item.ID,
          label: item.UserName
        };
        arrayOperators.push(OrgCodeItem);
      }
      this.options_WS_Operators = arrayOperators;
    });
  }
};

function getTableData(data) {
  var array = [];
  for (var i = 0; i < data.length; i++) {
    array.push({
      WS_ID: data[i].WS_ID,
      WS_Code: data[i].WS_Code,
      WS_DWSCode: data[i].WS_DWSCode,
      WS_Latitude: data[i].WS_Latitude,
      WS_Longitude: data[i].WS_Longitude,
      WS_Name: data[i].WS_Name,
      WS_Num: data[i].WS_Num,
      WS_Operators: data[i].WS_Operators,
      WS_Org_Code: data[i].WS_Org_Code,
      WS_SysCode: data[i].WS_SysCode,
      WS_Area_Code: data[i].WS_Area_Code,
      WS_IP: data[i].WS_IP,
      PCS_Name: data[i].PCS_Name,
      WS_OrgName: data[i].WS_OrgName,
      WS_OperatorsName: data[i].WS_OperatorsName
    });
  }
  return array;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modalRow {
  margin-bottom: 20px;
}

.el-select {
  /* padding-left: 0px;
  margin-left: 0px; */
  float: left;
  width: 85%;
}

.selectTitle {
  float: left;
  background-color: #f5f7fa;
  padding: 10px 10px 10px 10px;
  border: #dfdfdf solid 1px;
  border-radius: 5px 0px 0px 5px;
  color: #909399;
}
</style>