<template>
  <div>
    <el-row>
      <div></div>
      <h2>{{this.$store.getters.getName}}</h2>
    </el-row>
    <el-row>
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.zuoyouqingxie.name" :stateValue="this.state.zuoyouqingxie" :stateImg="this.mediaTitle.zuoyouqingxie.url" :title="this.mediaTitle.zuoyouqingxie.title"></equipListMedia>
      </el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.qianhouqinxie.name" :stateValue="this.state.qianhouqinxie" :stateImg="this.mediaTitle.qianhouqinxie.url" :title="this.mediaTitle.qianhouqinxie.title"></equipListMedia>
      </el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.shuijin.name" :stateValue="this.state.shuijin" :stateImg="this.mediaTitle.shuijin.url" :title="this.mediaTitle.shuijin.title"></equipListMedia>
      </el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.menci.name" :stateValue="this.state.menci" :stateImg="this.mediaTitle.menci.url" :title="this.mediaTitle.menci.title"></equipListMedia>
      </el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.fengji.name" :stateValue="this.state.fengji" :stateImg="this.mediaTitle.fengji.url" :title="this.mediaTitle.fengji.title"></equipListMedia>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.led.name" :stateValue="this.state.led" :stateImg="this.mediaTitle.led.url" :title="this.mediaTitle.led.title"></equipListMedia>
      </el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.fanglei.name" :stateValue="this.state.fanglei" :stateImg="this.mediaTitle.fanglei.url" :title="this.mediaTitle.fanglei.title"></equipListMedia>
      </el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.jldbj.name" :stateValue="this.state.jldbj" :stateImg="this.mediaTitle.jldbj.url" :title="this.mediaTitle.jldbj.title"></equipListMedia>
      </el-col>
      <el-col :span="4">
        <equipListMedia v-on:getTableData="getTableData" :stateName="this.mediaTitle.jldd.name" :stateValue="this.state.jldd" :stateImg="this.mediaTitle.jldd.url" :title="this.mediaTitle.jldd.title"></equipListMedia>
      </el-col>
    </el-row>
    <el-row>
      <el-row v-show="this.showTable">
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%" v-loading="loading">
          <el-table-column prop="PCSName" label="派出所名称" width="180">
          </el-table-column>
          <el-table-column prop="WS_Code" label="设备编号" width="180">
          </el-table-column>
          <el-table-column prop="state" label="异常状态">
          </el-table-column>

        </el-table>
      </el-row>
      <!--分页组件-->
      <el-row v-show="this.showTable">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
        </el-pagination>
      </el-row>
    </el-row>
    <!--<div>节点编号 {{this.$route.params.wsCode}}</div>
    <div>节点ip {{this.$route.params.ipAddress}}</div> -->
  </div>
</template>

<script>
import equipListMedia from "../parts/DetailComponents/EquipListMedia.vue";

import zuoyouqingxieUrl from "../../assets/StateImgs/zuoyouqingxie.png";
import qianhouqingxieUrl from "../../assets/StateImgs/shangxiaqingxie.png";
import shuijinUrl from "../../assets/StateImgs/shuijin.png";
import fengjiUrl from "../../assets/StateImgs/fengji.png";
import ledUrl from "../../assets/StateImgs/led.png";
import fangleiUrl from "../../assets/StateImgs/fanglei.png";
import jiaoliudianbaojingUrl from "../../assets/StateImgs/jiaoliudian.png";
import jiaoliudiaodianUrl from "../../assets/StateImgs/baojing.png";
import menciUrl from "../../assets/StateImgs/menci.png";

import API from "../../apis/index.js";

export default {
  components: { equipListMedia },
  data() {
    return {
      showTable: false,
      loading: false,
      tableData: [
        {
          PCSName: "后湖派出所",
          WS_Code: 70696867,
          state: "左右倾斜"
        }
      ],
      currentPage: 1,
      pagesize: 10,
      state: {
        zuoyouqingxie: 0,
        qianhouqinxie: 0,
        shuijin: 0,
        menci: 0,
        fengji: 0,
        led: 0,
        fanglei: 0,
        jldbj: 0,
        jldd: 0
      },
      mediaTitle: {
        zuoyouqingxie: {
          name: "左右倾斜",
          url: zuoyouqingxieUrl,
          title: "BITValueB,1,1"
        },
        qianhouqinxie: {
          name: "前后倾斜",
          url: qianhouqingxieUrl,
          title: "BITValueB,2,1"
        },
        shuijin: { name: "水浸", url: shuijinUrl, title: "BITValueB,3,1" },
        menci: { name: "门磁", url: menciUrl, title: "BITValueC,1,1" },
        fengji: { name: "风机", url: fengjiUrl, title: "BITValueB,2,1" },
        led: { name: "led照明", url: ledUrl, title: "BITValueC,3,1" },
        fanglei: { name: "防雷", url: fangleiUrl, title: "BITValueC,4,1" },
        jldbj: {
          name: "交流电报警",
          url: jiaoliudianbaojingUrl,
          title: "BITValueC,6,1" //需要将上限，下限合并后加入表格
        },
        jldd: {
          name: "交流掉电",
          url: jiaoliudiaodianUrl,
          title: "BITValueC,8,1"
        }
      }
    };
  },
  methods: {
    getTableData(childValue) {
      alert(childValue);
      //todo:调用API，根据 异常状态类型与区域ID 加载表格数据
      this.showTable = true;
      let url =
        API.getALARMCountPCSJKX.devUrl +
        "&PCS_ID=" +
        this.$route.params.wsCode +
        "&BITValue=" +
        childValue;
      console.log("mod13-url", url);
      this.$axios.get(url).then(res => {
        console.log(res);
      });
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    }
  },
  mounted: function() {},

  watch: {
    //监听
    // 监听路由变化
    $route(to, from) {
      //监听路由是否变化
      if (this.$route.params.wsCode) {
        // 判断条件1  判断传递值的变化
        let getPcsAlarmUrl =
          API.getALARMCountPCS.devUrl + "&PCS_ID=" + this.$route.params.wsCode;
        console.log("api url", getPcsAlarmUrl);
        this.$axios.get(getPcsAlarmUrl).then(res => {
          console.log(res);
          if (res.data.length > 0) {
            this.state.zuoyouqingxie = res.data[0].BITValueB0;
            this.state.qianhouqinxie = res.data[0].BITValueB1;
            this.state.shuijin = res.data[0].BITValueB3;
            this.state.menci = res.data[0].BITValueC0;
            this.state.fengji = res.data[0].BITValueC1;
            this.state.led = res.data[0].BITValueC2;
            this.state.fanglei = res.data[0].BITValueC3;
            //交流电上限与下限报警合并
            this.state.jldbj = res.data[0].BITValueC5 + res.data[0].BITValueC6;
            this.state.jldd = res.data[0].BITValueC7;
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  color: blue;
}
</style>