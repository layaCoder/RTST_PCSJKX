<template>
  <div>
    <el-row>
      <el-col :span="4" class="treeCol">
        <div id='tree' class="tree">
          <el-tree @node-click="handleNodeClick" :props="defaultProps" :load="loadNode1" :highlight-current=true lazy></el-tree>
        </div>
      </el-col>
      <el-col :span="19" id='mainContent'>
        <div v-if="this.showHello" class="welcomeMessage">
          <h2>欢迎使用</h2>
        </div>
        <router-view v-if="!this.showHello"></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import API from "../apis/index.js";

export default {
  data() {
    return {
      showHello: true,
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
  created: function() {},

  methods: {
    handleNodeClick(data) {
      //如果是设备
      if (data.isEquip === true) {
        this.$store.commit("SHOW_LOADING_BAR", { flag: true });
        this.showHello = false;

        this.$router.push({
          name: "equipState",
          params: {
            nodeLevel: data.nodeLevel,
            wsCode: data.wsCode,
            ipAddress: data.ipAddress
          }
        });
        //使用store记录当前设备/////////////////////////////////
        this.$store.commit("SET_EQUIP", { flag: true });
        this.$store.commit("SET_WS_CODE", { wsCode: data.wsCode });
        this.$store.commit("SET_IP", { ip: data.ipAddress });
        this.$store.commit("SET_NODE_LEVEL", { nodeLevel: data.nodeLevel });
        ///////////////////////////////////////////////////////
      } else if (data.isEquip === false) {
        this.showHello = false;
        this.$router.push({
          name: "equipList",
          params: {
            nodeLevel: data.nodeLevel,
            wsCode: data.wsCode,
            ipAddress: data.ipAddress
          }
        });
        //使用store记录当前设备/////////////////////////////////
        this.$store.commit("SET_EQUIP", { flag: false });
        this.$store.commit("SET_WS_CODE", { wsCode: data.wsCode });
        this.$store.commit("SET_IP", { ip: data.ipAddress });
        this.$store.commit("SET_NODE_LEVEL", { nodeLevel: data.nodeLevel });
        this.$store.commit("SET_NAME", { name: data.label });
        ///////////////////////////////////////////////////////
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
            ipAddress: "192.168.9.xxx",
            nodeLevel: 0
          }
        ]);
      }
      ////////////// 二级节点
      if (node.level === 1) {
        var list = [];
        let url = API.getPCS.devUrl;
        this.$axios.get(url).then(res => {
          for (var i = 0; i < res.data.length; i++) {
            var pcs = {
              label: res.data[i].PCS_Name,
              wsCode: res.data[i].ID,
              ipAddress: "192.168.1.xxx", //测试数据
              children: [],
              isEquip: false,
              isLeaf: "leaf",
              nodeLevel: 1
            };
            list.push(pcs);
          }
          return resolve(list);
        });
      }
      ////////////////三级节点
      if (node.level === 2) {
        var list = [];
        let url = API.getWorkSiteById.devUrl + node.data.wsCode;
        this.$axios.get(url).then(res => {
          console.log(res.data);
          for (var i = 0; i < res.data.length; i++) {
            var equip = {
              label: res.data[i].WS_Name,
              wsCode: res.data[i].WS_Code,
              ipAddress: res.data[i].WS_IP, //测试数据
              //children: [],
              isEquip: true,
              leaf: true, //表示为叶子节点，末位节点，不再执行懒加载
              nodeLevel: 2
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
</script>


<style>
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.tree {
  margin: 80px 0px 0px 20px;
  /* border: 1px solid #999; */
  /* border-radius: 10px; */
}

.el-tree {
  background-color: #ffffff;
  /* border: 0.1px solid #999999; */
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* .el-main{
   background: #999
 } */

.el-tree-node__label {
  font-size: 14px;
  color: #888;
  font-weight: bold;
}

.is-current > div > span {
  color: white !important;
}

.el-tree-node__content {
  font-family: Microsoft YaHei;
  margin-bottom: -1px;
  border: 1px solid #999999;
  border-radius: 5px;
  height: 35px;
}

/* hover样式 */
.el-tree-node__content:hover {
  background-color: #d1d1d1;
}
/* //点击的样式 */
/* .el-tree-node:focus>.el-tree-node__content{
background-color: yellow;
} */

.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
  background-color: #2578af;
  color: white;
}

.tree {
  margin-right: 25px;
}
.welcomeMessage {
  height: 800px;
}

.wrapper {
  margin-left: 20px;
}
</style>
