<template>
  <div class="mainContent">
    <el-row>
      <h2>维保单位管理</h2>
    </el-row>
    <el-row>
      <el-col :span="1">
        <el-button @click="handleShowDialog">添加</el-button>
      </el-col>
      <el-col :span="4" :offset="18">
        <el-input v-model="search" placeholder="请输入搜索内容" />
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tables.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%" v-loading="loading">
        <el-table-column prop="ID" label="单位ID" width="180">
        </el-table-column>
        <el-table-column prop="ComName" label="单位名称" width="180">
        </el-table-column>
        <el-table-column prop="Operator" label="负责人">
        </el-table-column>
        <el-table-column prop="Tel" label="联系电话">
        </el-table-column>
        <el-table-column prop="Address" label="地址">
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
      <el-dialog :title="this.formType==0?'新增维保单位':'修改维保单位'" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <!-- <span>这是一段信息</span> -->
        <el-form :v-model="formObj" ref="formObj">
          <el-row class="modalRow">
            <el-input v-model="formObj.ID" placeholder="请输入内容" :disabled="true">
              <template slot="prepend">公司ID</template>
            </el-input>
          </el-row>
          <el-row class="modalRow">
            <el-input v-model="formObj.ComName" placeholder="请输入内容">
              <template slot="prepend">公司名称</template>
            </el-input>
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
import API from "../../apis/index.js";

export default {
  data() {
    return {
      search: "",
      loading: true,
      formType: 0, //表单状态，0位新增，1为修改
      formObj: {
        ID: "",
        ComName: ""
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
      dialogVisible: false
    };
  },
  methods: {
    handleEdit(index, row) {
      this.formType = 1; //表单type=1，表示为修改方法
      this.dialogVisible = true;
      this.formObj.ComName = row.ComName;
      this.formObj.ID = row.ID;
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
          let url2 = API.delCompany.devUrl;
          this.$axios({
            url: url2,
            method: "post",
            params: { ID: row.ID }
          }).then(res => {
            console.log(res);
          });
          // axios post请求成功后执行
          //重新加载表格数据，刷新表格/////////////////////////
          let url = API.getCompany.devUrl;
          this.$axios.get(url).then(res => {
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
    handleShowDialog() {
      this.formType = 0; //表单type=0，表示为新增方法
      this.formObj.ID = 0;
      this.formObj.ComName = "";
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
      if (this.formObj.ComName === "") {
        this.$message({
          type: "warning",
          message: "请填写完整信息"
        });
        return;
      }

      //axios post提交表单
      if (this.formType === 0) {
        this.formObj.ID = 0; //标记ID为0，后台识别为新增方法
      }
      let url = API.addOrUpdateCompany.devUrl;
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
          var url = API.getCompany.devUrl;
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
    }
  },
  created: function() {
    let url = API.getCompany.devUrl;
    console.log(url);
    this.$axios.get(url).then(res => {
      console.log(res.data);
      this.tableData = getTableData(res.data);
      this.loading = false;
    });
  },

  mounted: function() {},
  computed: {
    // 模糊搜索
    tables() {
      const search = this.search;
      if (search) {
        return this.tableData.filter(data => {
          return Object.keys(data).some(key => {
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.tableData;
    }
  }
};

function getTableData(data) {
  var array = [];
  for (var i = 0; i < data.length; i++) {
    array.push({
      ID: data[i].ID,
      ComName: data[i].ComName,
      Operator: "",
      Tel: "",
      Address: ""
    });
  }
  return array;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  color: red;
}
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