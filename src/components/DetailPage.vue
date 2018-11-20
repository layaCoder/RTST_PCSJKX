<template>
  <div>
    <el-row>
      <el-col :span="4" class="tree">
        <div id='tree'>
          <el-tree @node-click="handleNodeClick" :props="defaultProps" lazy :load="loadNode1"></el-tree>
        </div>
      </el-col>
      <el-col :span="19" id='mainContent'>
        <div v-if="this.showHello" class="welcomeMessage"><h2>欢迎使用</h2></div>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showHello:true, 
      // data: [
      //   {
      //     label: "江岸区公安局",
      //     wsCode: "998",
      //     ipAddress: "192.168.1.998",
      //     children: [
      //       {
      //         label: "后湖派出所",
      //         wsCode: "999",
      //         ipAddress: "192.168.1.999",
      //         children: [
      //           {
      //             label: "测试1号",
      //             wsCode: "70696867",
      //             ipAddress: "192.168.0.7"
      //           },
      //           {
      //             label: "测试2号",
      //             wsCode: "70696868",
      //             ipAddress: "192.168.0.8"
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],
      defaultProps: {
        children: "children",
        label: "label",
        wsCode: "wsCode",
        ipAddress: "ipAddress",
        isEquip: true, //标记是否为设备  设备=true  地点=false
        isLeaf: "leaf"
      }
    };
  },
  created: function() {
    //获取所有江岸区下的派出所
    // var url = "api/Handler/AjaxTestHandler.ashx?mod=40&&PCS_AreaID=3";
    // console.log(url);
    // // this.$axios.get("api/Handler/AjaxTestHandler.ashx?mod=2").then(res=>{
    // this.$axios.get(url).then(res => {
    //   console.log("---派出所列表---");
    //   console.log(res.data);
    //   this.data = getPcsList(res.data);
    // });
  },

  methods: {
    handleNodeClick(data) {
      //如果是设备
      if (data.isEquip === true) {
        this.showHello=false

        this.$router.push({
          name: "equipState",
          params: { wsCode: data.wsCode, ipAddress: data.ipAddress,isEquip:true }
        });

        //显示设备监控详情
      } else if (data.isEquip === false) {
       this.showHello=false

        this.$router.push({
          name: "equipList",
          params: { wsCode: data.wsCode, ipAddress: data.ipAddress,isEquip:false }
        });
        //显示地点详情
      }
    },
    loadNode1(node, resolve) {
      ///////////// 一级节点
      if (node.level === 0) {
        // var list = [];
        // var url = "api/Handler/AjaxTestHandler.ashx?mod=40&&PCS_AreaID=3";
        // this.$axios.get(url).then(res => {
        //   alert('111')
        //   for (var i = 0; i < res.data.length; i++) {
        //     var pcs = {
        //       label: res.data[i].PCS_Name,
        //       wsCode: res.data[i].ID,
        //       ipAddress: "192.168.1.xxx", //测试数据
        //       children: [],
        //       isEquip: false,
        //       isLeaf: "leaf"
        //     };
        //     list.push(pcs);
        //   }
        //   // return resolve([{label:'江岸区公安局',isEquip:false,wsCod:'0003',ipAddress:'192.168.9.xxx'}]);
        // });
        return resolve([
          {
            label: "江岸区公安局",
            isEquip: false,
            wsCode: "0003",
            ipAddress: "192.168.9.xxx"
          }
        ]);
      }
      ////////////// 二级节点
      if (node.level === 1) {
        var list = [];
        var url = "api/Handler/AjaxTestHandler.ashx?mod=40&&PCS_AreaID=3";
        this.$axios.get(url).then(res => {
          for (var i = 0; i < res.data.length; i++) {
            var pcs = {
              label: res.data[i].PCS_Name,
              wsCode: res.data[i].ID,
              ipAddress: "192.168.1.xxx", //测试数据
              children: [],
              isEquip: false,
              isLeaf: "leaf"
            };
            list.push(pcs);
          }
          return resolve(list);
        });
      }
      ////////////////三级节点
      if (node.level === 2) {
        var list = [];
        var url =
          "api/Handler/AjaxTestHandler.ashx?mod=41&&WS_SysCode=" +
          node.data.wsCode;
        this.$axios.get(url).then(res => {
          console.log(res.data);
          for (var i = 0; i < res.data.length; i++) {
            var equip = {
              label: res.data[i].WS_Name,
              wsCode: res.data[i].WS_Code,
              ipAddress: res.data[i].WS_IP, //测试数据
              //children: [],
              isEquip: true,
              leaf: true //表示为叶子节点，末位节点，不再执行懒加载
            };
            list.push(equip);
          }
          return resolve(list);
        });
      }
      // setTimeout(() => {
      //   [
      //     {
      //       label: "leaf",
      //       leaf: true
      //     },
      //     {
      //       label: "zone"
      //     }
      //   ];
      //   resolve(data);
      // }, 500);
    }
  }
};

// function getPcsList(data) {
//   var pcsList = [
//     {
//       label: "江岸区分局",
//       wsCode: "003",
//       ipAddress: "192.168.2.xxx",
//       children: [],
//       isEquip: false,
//       isLeaf: "leaf"
//     }
//   ];
//   for (var i = 0; i < data.length; i++) {
//     var pcs = {
//       label: data[i].PCS_Name,
//       wsCode: data[i].ID,
//       ipAddress: "192.168.1.xxx", //测试数据
//       children: [],
//       isEquip: false,
//       isLeaf: "leaf"
//     };
//     pcsList[0].children.push(pcs);
//   }
//   return pcsList;
// }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-tree {
  background-color: aliceblue;
}
/* .el-main{
   background: #999
 } */
  
.el-tree-node__label {
  font-size: 20px;
}

.mainContent {
  background-color: antiquewhite;
}

.tree{
  margin-right:25px;
}
.welcomeMessage{
  height: 600px
}
</style>
