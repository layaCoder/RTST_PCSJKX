<template>
  <div>
    <el-row>
      <h2>人员管理</h2>
    </el-row>
    <el-row>
      <el-col :span="1">
        <el-button @click="handleShowDialog">添加</el-button>
      </el-col>

    </el-row>
    <el-row>
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
        <el-table-column prop="ID" label="人员ID" width="180">
        </el-table-column>
        <el-table-column prop="UserName" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="UserOrg" label="所属单位">
        </el-table-column>
        <el-table-column prop="UserTel" label="联系电话">
        </el-table-column>
        <el-table-column prop="UserType" label="所属单位类别">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      <el-dialog :title="this.formType==0?'新增人员信息':'修改人员信息'" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
        <!-- <span>这是一段信息</span> -->
        <el-form :v-model="formObj" ref="formObj">
          <el-row class="modalRow">
            <el-col :span="4">
             &nbsp;
            </el-col>
            <el-col :span="8">
              <el-input v-model="formObj.ID" placeholder="请输入内容" :disabled="true">
                <template slot="prepend">人员ID</template>
              </el-input>
            </el-col>
            <el-col :span="8">
              <el-input v-model="formObj.UserName" placeholder="请输入内容">
                <template slot="prepend">姓名</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="modalRow">
            <el-col :span="4">
             &nbsp;
            </el-col>
            <el-col :span="8">
              所属单位类型
              <el-select v-model="formObj.UserType" placeholder="请选择" @change="changeSelectType" >
                <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>

            </el-col>
            
            <el-col :span="8">
              <!-- <el-input v-model="formObj.UserOrg" placeholder="请输入内容">
                <template slot="prepend">所属单位</template>
              </el-input> -->
              所属单位
              <el-select v-model="formObj.UserOrg" placeholder="请选择">
                <el-option v-for="item in optionsValue" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>

            </el-col>
          </el-row>
          <el-row class="modalRow">
            <el-col :span="4"></el-col>
            <el-col :span="8">
              <el-input v-model="formObj.UserTel" placeholder="请输入内容">
                <template slot="prepend">联系电话</template>
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
  </div>
</template>

<script>
import API from '../../apis/index.js'

export default {
  data() {
    return {
      formType: 0, //表单状态，0位新增，1为修改
      formObj: {
        ID: "",
        UserName: "",
        UserOrg: "",
        UserTel: "",
        UserType: ""
      },
      tableData: [
        // {
        //   ID: "01",
        //   ComName: "RTST",
        //   Operator: "liuchunfu",
        //   Address: "武大园二路",
        //   Tel: "110"
        // }
      ],
      currentPage: 1,
      pagesize: 10,
      dialogVisible: false,

      optionsType: [
        {
          value: "01",
          label: "派出所"
        },
        {
          value: "02",
          label: "第三方公司"
        }
      ],
      //第三方公司列表，给所属单位select备用
      optionsCompany: [],
      //派出所列表，给所属单位select备用
      optionsPCS: [],

      //所属单位select数据
      optionsValue: []
    };
  },
  methods: {
    handleEdit(index, row) {
      this.formType = 1; //表单type=1，表示为修改方法
      this.dialogVisible = true;
      this.optionsValue = "";
      if (row.UserType === "01") {  //如果是UserType是派出所，加载派出所列表
        this.optionsValue = this.optionsPCS;
      } else if (row.UserType === "02") {//如果UserType是第三方公司，加载第三方公司列表
        this.optionsValue = this.optionsCompany;
      }
      this.formObj.ID = row.ID;
      this.formObj.UserName = row.UserName;
      this.formObj.UserType = row.UserType;
      this.formObj.UserOrg = parseInt(row.UserOrg);
      this.formObj.UserTel = row.UserTel;

      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("确认删除此条信息？", "提示", {
        confirmButtonTest: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
           
          //let url = API.delUserInfo.devUrl
          this.$axios({
            url: url,
            method: "post",
            params: { ID: row.ID }
          }).then(res => {
            console.log(res);
          });
          // axios post请求成功后执行
          //重新加载表格数据，刷新表格/////////////////////////
          let url2 = API.getUserInfoAll.devUrl
          this.$axios.get(url2).then(res => {
            console.log(res.data);
            this.tableData = getTableData(res.data);
          });
          //////////////////////////////////////////////////
          this.$message({
            type: "success",
            message: "删除成功"
          });
        })
        .catch(() => {
          this.message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleShowDialog() {
      this.formType = 0; //表单type=0，表示为新增方法
      this.formObj.ID = 0;
      this.formObj.UserName='';
      this.formObj.UserType = '';
      this.formObj.UserOrg = '';
      this.formObj.UserTel = '';

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
      }
      let url = API.addOrUpdateUser.devUrl
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
          //消息框
           this.$message({
            type: "success",
            message:this.formType===0? "添加成功":"修改成功"
          });
          // axios post请求成功后执行
          //重新加载表格数据，刷新表格/////////////////////////
          let url = API.getUserInfoAll.devUrl
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
    changeSelectType: function(data) {
      //判断级条件加载select数据
      console.log(data);
      if (data === "01") {
        this.optionsValue = this.optionsPCS;
        console.log(this.optionsValue);
      } else if (data === "02") {
        this.optionsValue = this.optionsCompany;
      } else return;
    }
  },
  created: function() {},

  mounted: function() {
    //mod:43 加载主表格数据
    let url = API.getUserInfoAll.devUrl
    this.$axios.get(url).then(res => {
      console.log(res.data);
      this.tableData = getTableData(res.data);
    });

    // mod:42 加载第三方维保单位select选项
    var url2 = API.getCompany.devUrl
    this.$axios.get(url2).then(res => {
      var compArray = [];
      for (var i = 0; i < res.data.length; i++) {
        compArray.push({
          value: parseInt(res.data[i].ID),
          label: res.data[i].ComName
        });
      }
      this.optionsCompany = compArray;
    });

    // mod:40  加载派出所select选项， attention:此处现只加载了江岸区所有派出所，所以PCS_AreaID=3
    let url3 = API.getPCS.devUrl
    this.$axios.get(url3).then(res => {
      var PcsArray = [];
      for (var i = 0; i < res.data.length; i++) {
        PcsArray.push({
          value: parseInt(res.data[i].ID),
          label: res.data[i].PCS_Name
        });
      }
      this.optionsPCS = PcsArray;
    });

    ///////////////////////////
  }
};

function getTableData(data) {
  var array = [];
  for (var i = 0; i < data.length; i++) {
    array.push({
      ID: data[i].ID,
      UserName: data[i].UserName,
      UserOrg: data[i].UserOrg,
      UserTel: data[i].UserTel,
      UserType: data[i].UserType
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
</style>