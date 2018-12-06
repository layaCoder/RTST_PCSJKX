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
    <el-row v-if="this.dialogVisible">
      <el-form :v-model="formObj" ref="formObj">
        <el-col :span="4" v-show='false'>
          <el-input v-model="formObj.SCJComID" placeholder="请输入内容" :disabled="true">
            <template slot="prepend">摄像机品牌ID</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input v-model="formObj.ID" placeholder="请输入内容" :disabled="true">
            <template slot="prepend">摄像机ID</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="formObj.SXJName" placeholder="请输入内容">
            <template slot="prepend">型号</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <span class="selectLabel">类型</span>
          <el-select v-model="formObj.SXJType" placeholder="请选择">
            <el-option v-for="item in optionsType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary" @click="handleSubmit('formObj')">提交</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row>
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
        <el-table-column prop="ID" label="设备ID" width="300">
        </el-table-column>
        <el-table-column prop="equipName" label="设备型号" width="300">
        </el-table-column>
        <el-table-column prop="equipType" label="设备类型" width="300">
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
import API from "../../../apis/index.js";

export default {
  props: {
    compId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      //dataComId:'',
      formType: 0, //模态框类型，0位新增，1位修改
      tableData: [
        {
          ID: "1",
          equipName: "2",
          equipType: "3",
          compId: "4"
        }
      ],
      formObj: {
        ID: "",
        SXJName: "",
        SXJType: "",
        SCJComID: ""
      },
      dialogVisible: false,
      currentPage: 1,
      pagesize: 10,
      optionsType: [
        {
          label: "类型1",
          value: "01"
        },
        {
          label: "类型2",
          value: "02"
        }
      ]
    };
  },
  methods: {
    //弹出【新增】模态框
    handleShowDialog() {
      this.formType = 0; //表单type=0，表示为新增方法
      this.formObj.ID = 0;
      this.formObj.SXJName = "";
      this.formObj.SXJType = "";
      // this.formObj.='';
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
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleEdit(index, row) {
      console.log(row);
      this.formType = 1;
      this.formObj.ID = row.ID;
      this.formObj.SXJName = row.equipName;
      this.formObj.SXJType = row.equipType;
      this.dialogVisible = true;
    },
    handleSubmit() {
      if (
        this.formObj.ID === "" ||
        this.formObj.SXJName === "" ||
        this.formObj.SXJType === "" ||
        this.formObj.SCJComID === ""
      ) {
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

      let url = API.addOrUpdateCamera.devUrl;
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
        let url = API.getCameraAll.devUrl + "&where=SCJComID=" + this.compId;
        this.$axios.get(url).then(res => {
          console.log(res.data);
          this.tableData = getTableData(res.data);
        });
        //////////////////////////////////////////////////
      });
      this.dialogVisible = false;
    },
    handleDelete(index, row) {
      console.log(row);
    }
  },
  mounted: function() {
    this.formObj.SCJComID = this.compId;
    ////////////////////////////////////////////////////////
    //将父组件props传递给子组件data，comId不变，这里用不到
    //this.dataComId=this.compId
    /////////////////////////////////////////////////
    let url = API.getCameraAll.devUrl + "&where=SCJComID=" + this.compId;
    console.log(url);

    this.$axios.get(url).then(res => {
      console.log(res.data);
      this.tableData = getTableData(res.data);
    });
  }
};
function getTableData(data) {
  let array = [];
  for (let item of data) {
    let equipItem = {
      ID: item.ID,
      compId: item.SCJComID,
      equipName: item.SXJName,
      equipType: item.SXJType
    };
    array.push(equipItem);
  }
  console.log(array);
  return array;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.selectLabel {
  background: red;
  padding: 10px 0px 10px 10px;
  border-radius: 3px;
  background-color: #f5f7fa;
}
</style>