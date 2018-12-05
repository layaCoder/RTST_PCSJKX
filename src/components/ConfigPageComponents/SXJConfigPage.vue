<template>
  <div class="mainContent">
    <el-row>
      <h2>摄像机管理</h2>
    </el-row>
    <el-row>
      <el-col :span="1">
        <el-button @click="handleShowDialog">添加</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%" v-loading="loading">
        <el-table-column prop="ID" label="公司ID" width="300">
        </el-table-column>
        <el-table-column prop="ComName" label="公司名称" width="300">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="info" @click="showSxjDialog(scope.$index,scope.row)">查看设备</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
      </el-pagination>
    </el-row>

    <!--新增/修改 模态框 -->
    <div>
      <el-dialog :title="this.formType==0?'新增摄像机信息':'修改摄像机信息'" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <!-- <span>这是一段信息</span> -->
        <el-form :v-model="formObj" ref="formObj">
          <el-row class="modalRow">
            <el-col>
              <el-input v-model="formObj.ID" placeholder="请输入内容" :disabled="true">
                <template slot="prepend">公司ID</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="modalRow">
            <el-col>
              <el-input v-model="formObj.SXJCom" placeholder="请输入内容">
                <template slot="prepend">公司名</template>
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
    <div>
      <el-dialog :title="''" :visible.sync="dialogSxjVisible" width="80%" :before-close="handleClose" :modal-append-to-body='false'>
        <SXJConfigComponent :compId="compId" v-if="dialogSxjVisible"></SXJConfigComponent>
      </el-dialog>
    </div>

  </div>
</template>

<script>
import API from "../../apis/index.js";
import SXJConfigComponent from "../parts/ConfigComponents/SXJConfigComponent.vue";

export default {
  components: { SXJConfigComponent },
  data() {
    return {
      loading: true,
      compId: "", //公司id，传递给子组件模态框
      formType: 0, //模态框类型，0位新增，1位修改
      formObj: {
        ID: "",
        SXJCom: ""
      },
      tableData: [
        {
          ID: "01",
          ComName: "02"
        }
      ],
      dialogVisible: false,
      dialogSxjVisible: false,
      currentPage: 1,
      pagesize: 10
    };
  },
  methods: {
    //弹出【新增】模态框
    handleShowDialog() {
      this.formType = 0; //表单type=0，表示为新增方法
      this.formObj.ID = 0;
      this.formObj.SXJCom = "";
      this.dialogVisible = true;
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    //弹出【编辑】模态框
    handleEdit: function(index, row) {
      this.dialogVisible = true;
      this.formType = 1;
      this.formObj.ID = row.ID;
      this.formObj.SXJCom = row.ComName;
      console.log(row);
    },
    handleDelete: function(index, row) {
      console.log(index, row);
      this.$confirm("确认删除此条信息？", "提示", {
        confirmButtonTest: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //
          let url = API.delUserInfo.devUrl;
          this.$axios({
            url: url,
            method: "post",
            params: { ID: row.ID }
          }).then(res => {
            console.log(res);
          });
          // axios post请求成功后执行
          //重新加载表格数据，刷新表格/////////////////////////
          let url2 = API.getSXJCompanyAll.devUrl;
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
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleSubmit: function(e) {
      //axios post提交表单
      if (this.formObj.SXJCom === '') {
        this.$message({
          type: "warning",
          message: "请填写完整信息"
        });
        return
      }
      if (this.formType === 0) {
        this.formObj.ID = 0; //标记ID为0，后台识别为新增方法
      }
      let url = API.addOrUpdateCameraCompany.devUrl;
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
      }).then(res => {
        //消息框
        this.$message({
          type: "success",
          message: this.formType === 0 ? "添加成功" : "修改成功"
        });
        // axios post请求成功后执行
        //重新加载表格数据，刷新表格/////////////////////////
        let url = API.getSXJCompanyAll.devUrl;
        this.$axios.get(url).then(res => {
          console.log(res.data);
          this.tableData = getTableData(res.data);
        });
        //////////////////////////////////////////////////
      });
      this.dialogVisible = false;
    },
    showSxjDialog: function(index, row) {
      console.log(row);
      this.compId = row.ID;
      this.dialogSxjVisible = true;
    }
  },
  mounted: function() {
    //加载表格数据
    let url = API.getSXJCompanyAll.devUrl;
    this.$axios.get(url).then(res => {
      console.log(res.data);
      this.tableData = getTableData(res.data);
      this.loading = false;
    });
  }
};

function getTableData(sxjArray) {
  var array = [];
  for (let i = 0; i < sxjArray.length; i++) {
    array.push({
      ID: sxjArray[i].ID,
      ComName: sxjArray[i].SXJCom
    });
  }
  return array;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.modalRow {
  margin-bottom: 20px;
}

.mainContent {
  box-shadow: 0px 0px 5px #999999;
  padding: 10px;
  /* margin-left:-4%; */
  margin: 4% 4% 4% -4%;
}
</style>
