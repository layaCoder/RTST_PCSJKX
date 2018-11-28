<template>
    <div>
        <el-row>
            <h2>摄像机管理</h2>
        </el-row>
        <el-row>
            <el-col :span="1">
                <el-button @click="handleShowDialog">添加</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
                <el-table-column prop="ID" label="公司ID" width="300">
                </el-table-column>
                <el-table-column prop="ComName" label="公司名称" width="300">
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
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
      data: "",
      tableData: [
        {
          ID: "01",
          ComName: "02"
        }
      ],
      dialogVisible: false,
      currentPage: 1,
      pagesize: 10
    };
  },
  methods: {
    handleShowDialog() {
      //   this.formType = 0; //表单type=0，表示为新增方法
      //   this.formObj.ID = 0;
      // //   this.formObj.UserName='';
      // //   this.formObj.UserType = '';
      // //   this.formObj.UserOrg = '';
      // //   this.formObj.UserTel = '';
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
    handleEdit:function(index,row){
        console.log(row)
    },
   handleDelete:function(index,row){
       console.log(row)
   }

  },
  mounted: function() {
    //加载表格数据
    let url = API.getSXJCompanyAll.devUrl;
    this.$axios.get(url).then(res => {
      console.log(res.data);
      this.tableData = getTableData(res.data);
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
</style>
