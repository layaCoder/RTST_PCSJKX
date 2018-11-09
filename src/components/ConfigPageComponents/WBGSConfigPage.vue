<template>
  <div>
    <el-row>
      <h2>维保单位管理</h2>
    </el-row>
    <el-row>
      <el-col :span="1">
        <el-button @click="handleShowDialog">添加</el-button>
      </el-col>

    </el-row>
    <el-row>
      <el-table :data="tableData" stripe style="width: 100%">
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
    <!--新增/修改 模态框 -->
    <div>
      <el-dialog title="新增维保单位" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          ID: "01",
          ComName: "RTST",
          Operator: "liuchunfu",
          Address: "武大园二路",
          Tel: "110"
        },
        {
          ID: "01",
          ComName: "RTST",
          Operator: "liuchunfu",
          Address: "武大园二路",
          Tel: "110"
        },
        {
          ID: "01",
          ComName: "RTST",
          Operator: "liuchunfu",
          Address: "武大园二路",
          Tel: "110"
        },
        {
          ID: "01",
          ComName: "RTST",
          Operator: "liuchunfu",
          Address: "武大园二路",
          Tel: "110"
        }
      ],
      dialogVisible: false
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleShowDialog() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
 created:function(){
 var url = "api/Handler/AjaxTestHandler.ashx?mod=42";
    console.log(url);
    this.$axios.get(url).then(res => {
      console.log(res.data);
      this.tableData = getTableData(res.data);
      
    });
 },

  mounted: function() {
    // var url = "api/Handler/AjaxTestHandler.ashx?mod=42";
    // console.log(url);
    // this.$axios.get(url).then(res => {
      
    //   this.tableData = getTableData(res.data[0]);
    //   console.log(tableData);
    // });
  }
};

function getTableData(data) {
  
  var array = [];
  for(var i = 0; i <data.length; i++){
    console.log(data[i]);
    array.push({
      ID:data[i].ID,
      ComName:data[i].ComName,
      Operator:'',
      Tel:'',
      Address:''
    })
}
  return array;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  color: red;
}
</style>