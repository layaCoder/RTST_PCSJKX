<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="3" offset="8">
        <h2>设备监控</h2>
      </el-col>
    </el-row>
    <el-row class="mediaRow">
      <el-col :span="2"></el-col>
      <el-col :span="4">
        <mediaPart :stateName="this.mediaTitleUrl.bianhao.name" :stateValue="this.mediaData.bianhao" :stateImg="this.mediaTitleUrl.bianhao.img"></mediaPart>
      </el-col>
      <el-col :span="4">
        <mediaPart :stateName="this.mediaTitleUrl.zuoyouqingxie.name" :stateValue="this.mediaData.zuoyouqingxie" :stateImg="this.mediaTitleUrl.zuoyouqingxie.img"></mediaPart>
      </el-col>
      <el-col :span="4">
        <mediaPart :stateName="this.mediaTitleUrl.qianhouqingxie.name" :stateValue="this.mediaData.qianhouqingxie" :stateImg="this.mediaTitleUrl.qianhouqingxie.img"></mediaPart>
      </el-col>
      <el-col :span="4">
        <mediaPart :stateName="this.mediaTitleUrl.shuijin.name" :stateValue="this.mediaData.shuijin" :stateImg="this.mediaTitleUrl.shuijin.img"></mediaPart>
      </el-col>
      <el-col :span="4">
        <mediaPartMenci :stateName="this.mediaTitleUrl.almmenci.name" :stateValue="this.mediaData.almmenci" :stateImg="this.mediaTitleUrl.almmenci.img"></mediaPartMenci>
      </el-col>
      <el-col :span="4">
        <mediaPart :stateName="this.mediaTitleUrl.network.name" :stateValue="this.network" :stateImg="this.mediaTitleUrl.network.img"></mediaPart>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row class="mediaRow">
      <el-col :span="2"></el-col>
      <el-col :span="4">
        <mediaPartMenci :stateName="this.mediaTitleUrl.fengji.name" :stateValue="this.mediaData.fengji" :stateImg="this.mediaTitleUrl.fengji.img"></mediaPartMenci>

        <!-- <div>
          <mediaPart :stateName="this.mediaTitleUrl.fengji.name" :stateValue="this.mediaData.fengji" :stateImg="this.mediaTitleUrl.fengji.img"></mediaPart>
        </div> -->
      </el-col>
      <el-col :span="4">
        <mediaPartMenci :stateName="this.mediaTitleUrl.led.name" :stateValue="this.mediaData.led" :stateImg="this.mediaTitleUrl.led.img"></mediaPartMenci>

        <!-- <div>
          <mediaPart :stateName="this.mediaTitleUrl.led.name" :stateValue="this.mediaData.led" :stateImg="this.mediaTitleUrl.led.img"></mediaPart>
        </div> -->
      </el-col>
      <el-col :span="4">
        <mediaPart :stateName="this.mediaTitleUrl.fanglei.name" :stateValue="this.mediaData.fanglei" :stateImg="this.mediaTitleUrl.fanglei.img"></mediaPart>
      </el-col>
      <el-col :span="4">
        <mediaPart :stateName="this.mediaTitleUrl.jiaoliudianbaojing.name" :stateValue="this.mediaData.jiaoliudianbaojing" :stateImg="this.mediaTitleUrl.jiaoliudianbaojing.img"></mediaPart>
      </el-col>
      <el-col :span="4">
        <mediaPart :stateName="this.mediaTitleUrl.jiaoliudiaodian.name" :stateValue="this.mediaData.jiaoliudiaodian" :stateImg="this.mediaTitleUrl.jiaoliudiaodian.img"></mediaPart>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <el-table :data="tableData" stripe class="equipTable">
          <el-table-column prop="attr" label="属性" class-name="tableTitle">
          </el-table-column>
          <el-table-column prop="value" label="数值" class-name="tableValue">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-table :data="tableData2" stripe class="equipTable">
          <el-table-column prop="attr" label="属性" class-name="tableTitle">
          </el-table-column>
          <el-table-column prop="value" label="数值" class-name="tableValue">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7" :offset="1">
        <table cellspacing="0" class="equipTable2">
          <tr>
            <th class="tableTitle">开关名称</th>
            <th>开关状态</th>
          </tr>
          <tr>
            <td class="tableTitle">
              <span class="cell">12v-1</span>
            </td>
            <td>
              <el-switch v-model="state_12_1" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr class="colored">
            <td class="tableTitle">
              <span class="cell">12v-2</span>
            </td>
            <td>
              <el-switch v-model="state_12_2" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr>
            <td class="tableTitle">
              <span class="cell">12v-3</span>
            </td>
            <td>
              <el-switch v-model="state_12_3" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr class="colored">
            <td class="tableTitle">
              <span class="cell">24v-1</span>
              <!-- <span>12v-4</span> -->
            </td>
            <td>
              <el-switch v-model="state_12_4" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr>
            <td class="tableTitle">
              <span class="cell">24v-2</span>
              <!-- <span>24v-1</span> -->
            </td>
            <td>
              <el-switch v-model="state_24_1" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr class="colored">
            <td class="tableTitle">
              <span class="cell">24v-3</span>
              <!-- <span>24v-2</span> -->
            </td>
            <td>
              <el-switch v-model="state_24_2" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr>
            <td class="tableTitle">
              <span class="cell">220v-1</span>
            </td>
            <td>
              <el-switch v-model="state_220_1" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr class="colored">
            <td class="tableTitle">
              <span class="cell">220v-2</span>
            </td>
            <td>
              <el-switch v-model="state_220_2" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <!-- 添加220v-3 -->
          <tr>
            <td class="tableTitle">
              <span class="cell">220v-3</span>
            </td>
            <td>
              <el-switch v-model="state_220_3" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <!--  -->
          <tr class="colored">
            <td class="tableTitle">
              <span class="cell">poe-1</span>
            </td>
            <td>
              <el-switch v-model="state_poe_1" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr class="colored">
            <td class="tableTitle">
              <span class="cell">poe-2</span>
            </td>
            <td>
              <el-switch v-model="state_poe_2" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr v-show=false>
            <td>
              <span>poe-3</span>
            </td>
            <td>
              <el-switch v-model="state_poe_3" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <tr class="colored" v-show=false>
            <td class="tableTitle">
              <span class="cell">poe-4</span>
            </td>
            <td>
              <el-switch v-model="state_poe_4" active-text="" inactive-text="" @change="changeStatus($event,1)">
              </el-switch>
            </td>
          </tr>
          <!-- <tr>
            <td>
              <span>门磁</span>
            </td>
            <td>
             
              <el-button type="success" @click="btnDoorOpen" :disabled="state_menci">开门按钮</el-button>
            </td>
          </tr> -->
        </table>
        <el-button type="success" @click="btnDoorOpen" :disabled="state_menci" class="btnDoorOpen">开门按钮</el-button>

      </el-col>

    </el-row>
  </div>
</template>

<script>
import API from "../../apis/index.js";

import mediaPart from "../parts/MediaPart.vue";
import mediaPartMenci from "../parts/MediaPartMenci.vue";
//图片rul
import bianhaoUrl from "../../assets/StateImgs/bianhao.png";
import zuoyouqingxieUrl from "../../assets/StateImgs/zuoyouqingxie.png";
import qianhouqingxieUrl from "../../assets/StateImgs/shangxiaqingxie.png";
import shuijinUrl from "../../assets/StateImgs/shuijin.png";
import fengjiUrl from "../../assets/StateImgs/fengji.png";
import ledUrl from "../../assets/StateImgs/led.png";
import fangleiUrl from "../../assets/StateImgs/fanglei.png";
import jiaoliudianbaojingUrl from "../../assets/StateImgs/jiaoliudian.png";
import jiaoliudiaodianUrl from "../../assets/StateImgs/baojing.png";
import menciUrl from "../../assets/StateImgs/menci.png";
import networkUrl from "../../assets/StateImgs/network.png";

export default {
  components: { mediaPart, mediaPartMenci },
  data() {
    return {
      returnData: "", //记录后滩返回的所有状态信息
      network: "正常", //网络状态单独抽出刷新，在mediaData对象中更新network，页面不会热更新
      wsCode: this.$route.params.wsCode,
      ip: "",
      tableData: [],
      tableData2: [],
      mediaData: {
        bianhao: null,
        zuoyouqingxie: null,
        qianhouqingxie: null,
        shuijin: null,
        fengji: null,
        led: null,
        fanglei: null,
        jiaoliudianbaojing: null,
        jiaoliudiaodian: null,
        almmenci: null
      },
      mediaTitleUrl: {
        //bianhao:{name:'设备编号',img:'../../assets/StateImgs/bianhao.png'},
        bianhao: { name: "设备编号", img: bianhaoUrl },
        zuoyouqingxie: { name: "左右倾斜", img: zuoyouqingxieUrl },
        qianhouqingxie: { name: "前后倾斜", img: qianhouqingxieUrl },
        shuijin: { name: "水浸", img: shuijinUrl },
        fengji: { name: "风机", img: fengjiUrl },
        led: { name: "LED", img: ledUrl },
        fanglei: { name: "防雷", img: fangleiUrl },
        jiaoliudianbaojing: { name: "交流电报警", img: jiaoliudianbaojingUrl },
        jiaoliudiaodian: { name: "交流掉电", img: jiaoliudiaodianUrl },
        almmenci: { name: "门磁", img: menciUrl },
        network: { name: "网络", img: networkUrl }
      },
      state_12_1: null,
      state_12_2: null,
      state_12_3: null,
      state_12_4: null,
      state_24_1: null,
      state_24_2: null,
      state_220_1: null,
      state_220_2: null,
      state_poe_1: null,
      state_poe_2: null,
      state_poe_3: null,
      state_poe_4: null,
      state_menci: null,
      //新增220v-3开关
      state_220_3: null
    };
  },
  methods: {
    //开门btn clikc事件
    btnDoorOpen: function() {
      let switch_12_1 = this.state_12_1 === false ? "0" : "1";
      let switch_12_2 = this.state_12_2 === false ? "0" : "1";
      let switch_12_3 = this.state_12_3 === false ? "0" : "1";
      let switch_12_4 = this.state_12_4 === false ? "0" : "1";
      let switch_24_1 = this.state_24_1 === false ? "0" : "1";
      let switch_24_2 = this.state_24_2 === false ? "0" : "1";
      let switch_220_1 = this.state_220_1 === false ? "0" : "1";
      let switch_220_2 = this.state_220_2 === false ? "0" : "1";
      let switch_poe_1 = this.state_poe_1 === false ? "0" : "1";
      let switch_poe_2 = this.state_poe_2 === false ? "0" : "1";
      let switch_poe_3 = this.state_poe_3 === false ? "0" : "1";
      let switch_poe_4 = this.state_poe_4 === false ? "0" : "1";
      //门磁始终未 ‘0’ ，当初设计时 门磁 帧结构是 =1 则开门
      //let switch_menci='0'

      let dataArray2 = [
        switch_220_2 +
          switch_220_1 +
          switch_24_2 +
          switch_24_1 +
          switch_12_4 +
          switch_12_3 +
          switch_12_2 +
          switch_12_1,
        "1000" + switch_poe_4 + switch_poe_3 + switch_poe_2 + switch_poe_1,
        "00000000"
      ];
      console.log("door open ->");
      console.log(dataArray2);

      //let urlSwtich2 = API.actionSwtich.devUrl + "mod=1&type=2";
      this.$axios({
        url: API.actionSwtich.devUrl + "mod=1&type=2",
        method: "post",
        data: {
          mod: 1,
          type: 2,
          action: "actionSwitch",
          state: dataArray2,
          equipIp: this.$route.params.ipAddress
        },
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
          console.log(res);
        })
        .catch(res => {
          // console.log(res)
        });
    },
    //swtich change事件
    changeStatus: function($event, num) {
      let switch_12_1 = this.state_12_1 === false ? "0" : "1";
      let switch_12_2 = this.state_12_2 === false ? "0" : "1";
      let switch_12_3 = this.state_12_3 === false ? "0" : "1";
      let switch_12_4 = this.state_12_4 === false ? "0" : "1";
      let switch_24_1 = this.state_24_1 === false ? "0" : "1";
      let switch_24_2 = this.state_24_2 === false ? "0" : "1";
      let switch_220_1 = this.state_220_1 === false ? "0" : "1";
      let switch_220_2 = this.state_220_2 === false ? "0" : "1";
      let switch_poe_1 = this.state_poe_1 === false ? "0" : "1";
      let switch_poe_2 = this.state_poe_2 === false ? "0" : "1";
      let switch_poe_3 = this.state_poe_3 === false ? "0" : "1";
      let switch_poe_4 = this.state_poe_4 === false ? "0" : "1";
      let switch_220_3 = this.state_220_3 === false ? "0" : "1";
      //门磁始终未 ‘0’ ，当初设计时 门磁 帧结构是 =1 则开门
      //let switch_menci='0'

      let dataArray = [
        switch_220_2 +
          switch_220_1 +
          switch_24_2 +
          switch_24_1 +
          switch_12_4 +
          switch_12_3 +
          switch_12_2 +
          switch_12_1,
        "000" +
        switch_220_3 +
        // switch_poe_4 +
        // switch_poe_3 +
        "00" + //poe3 , poe4停用
          switch_poe_2 +
          switch_poe_1,
        "00000000"
      ];
      console.log($event);
      console.log("ip", this.$route.params.ipAddress);
      console.log("actionSwitch", dataArray);

      let urlSwtich = API.actionSwtich.devUrl + "mod=1&type=2";
      ////switch axios
      this.$axios({
        url: urlSwtich,
        method: "post",
        data: {
          mod: 1,
          type: 2,
          action: "actionSwitch",
          state: dataArray,
          equipIp: this.$route.params.ipAddress
        },
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
          console.log(res);
        })
        .catch(res => {
          // console.log(res)
        });
      /////
    },
    timer: function() {
      // var url =
      //   "api/Handler/AjaxTestHandler.ashx?mod=3&&Ws_code=" +
      //   this.$route.params.wsCode;

      let url = API.getWorkSiteInfoById.devUrl + this.$route.params.wsCode;
      this.$axios.get(url).then(res => {
        console.log("----刷新设备状态----");
        console.log(res.data);
        console.log("---------------");
        //加载数据列表
        this.tableData = getTableOneData(res.data[0]);
        this.tableData2 = getTableTwoData(res.data[0]);
        this.mediaData = getMediaData(res.data[0]);

        //重新给门磁开关按钮赋值，控制btn disable属性
        this.state_menci = this.mediaData.almmenci === "关闭" ? false : true;

        //刷新开关状态
        // var switchUrl =
        //   "api/Handler/AjaxTestHandler.ashx?mod=4&&Ws_code=" +
        //   this.$route.params.wsCode;
        // this.$axios.get(switchUrl).then(res => {
        //   console.log("----开关状态----");
        //   console.log(res.data);
        //   this.state_12_1 = getSwitchData(res.data[0]).state_12_1;
        //   this.state_12_2 = getSwitchData(res.data[0]).state_12_2;
        //   this.state_12_3 = getSwitchData(res.data[0]).state_12_3;
        //   this.state_12_4 = getSwitchData(res.data[0]).state_12_4;
        //   this.state_24_1 = getSwitchData(res.data[0]).state_24_1;
        //   this.state_24_2 = getSwitchData(res.data[0]).state_24_2;
        //   this.state_220_1 = getSwitchData(res.data[0]).state_220_1;
        //   this.state_220_2 = getSwitchData(res.data[0]).state_220_2;
        //   this.state_poe_1 = getSwitchData(res.data[0]).state_poe_1;
        //   this.state_poe_2 = getSwitchData(res.data[0]).state_poe_2;
        //   this.state_poe_3 = getSwitchData(res.data[0]).state_poe_3;
        //   this.state_poe_4 = getSwitchData(res.data[0]).state_poe_4;
        //   this.state_menci = getSwitchData(res.data[0]).state_menci;
        //   console.log("-----------------");
        // });
      });
    },
    timer2: function() {
      console.log("timer2", this.returnData);
      let url = API.getWorkSiteInfoById.devUrl + this.$route.params.wsCode;
      this.$axios.get(url).then(res => {
        console.log(res.data[0]);
        if (res.data[0].DS_ID !== this.returnData.DS_ID) {
          this.network = "正常";
        } else if (res.data[0].DS_ID === this.returnData.DS_ID) {
          this.network = "异常";
        }
      });
    }
  },
  watch: {
    //监听
    // 监听路由变化
    $route(to, from) {
      //监听路由是否变化
      if (this.$route.params.wsCode) {
        this.network = "正常";
        // 判断条件1  判断传递值的变化
        //this.wsCode=this.$route.params.wsCode
        // var url =
        //   "api/Handler/AjaxTfestHandler.ashx?mod=3&&Ws_code=" +
        //   this.$route.params.wsCode;
        let url = API.getWorkSiteInfoById.devUrl + this.$route.params.wsCode;

        console.log(url);
        this.$axios.get(url).then(res => {
          if (res.data.length > 0) {
            this.returnData = res.data[0]; //记录后端返回数据
            //如果有设备数据
            this.tableData = getTableOneData(res.data[0]);
            this.tableData2 = getTableTwoData(res.data[0]);
            this.mediaData = getMediaData(res.data[0]);
          } else if (res.data.length === 0) {
            //如果没有设备数据果没有设备数据
            this.tableData = [];
            alert("此派出所管辖区内未安装设备");
          }

          //this.tableData.push({attr:'ajax数据',value:res.data[0].DS_DC12dy})
        });

        let switchUrl =
          API.getSwitchStateById.devUrl + this.$route.params.wsCode;
        this.$axios.get(switchUrl).then(res => {
          console.log("----【开关状态】----");
          console.log(res.data);
          this.state_12_1 = getSwitchData(res.data[0]).state_12_1;
          this.state_12_2 = getSwitchData(res.data[0]).state_12_2;
          this.state_12_3 = getSwitchData(res.data[0]).state_12_3;
          this.state_12_4 = getSwitchData(res.data[0]).state_12_4;
          this.state_24_1 = getSwitchData(res.data[0]).state_24_1;
          this.state_24_2 = getSwitchData(res.data[0]).state_24_2;
          this.state_220_1 = getSwitchData(res.data[0]).state_220_1;
          this.state_220_2 = getSwitchData(res.data[0]).state_220_2;
          this.state_poe_1 = getSwitchData(res.data[0]).state_poe_1;
          this.state_poe_2 = getSwitchData(res.data[0]).state_poe_2;
          this.state_poe_3 = getSwitchData(res.data[0]).state_poe_3;
          this.state_poe_4 = getSwitchData(res.data[0]).state_poe_4;
          this.state_menci = getSwitchData(res.data[0]).state_menci;

          this.state_220_3 = getSwitchData(res.data[0]).state_220_3;
          console.log("-----------------");
        });
      }
    }
  },
  //页面加载完成后执行的方法
  mounted: function() {
    //定时函数
    // this.$nextTick(function() {
    //   //【计时器、定时器】设置页面刷新时间
    //   setInterval(this.timer, 10000);
    // });

    //定时函数 计数器 计时器  定时刷新页面数据
    this._timeOut = setInterval(this.timer, 2000);
    //定时器，查询前端设备是否掉网
    this._timeOut2 = setInterval(this.timer2, 1000 * 30); //30秒检查一次是否断网
  },
  beforeDestroy() {
    //摧毁定时器
    clearInterval(this._timeOut);
    clearInterval(this._timeOut2);
  },
  //created方法只会执行一次，后续data刷新不会运行
  created: function() {
    //ajax获取设备状态并填充页面数据

    let url = API.getWorkSiteInfoById.devUrl + this.$route.params.wsCode;

    console.log(url);
    // this.$axios.get("api/Handler/AjaxTestHandler.ashx?mod=2").then(res=>{
    this.$axios.get(url).then(res => {
      console.log("----初始设备状态----");
      console.log(res.data);
      console.log("---------------");
      //加载数据列表
      this.returnData = res.data[0]; //记录后端返回数据
      this.tableData = getTableOneData(res.data[0]);
      this.tableData2 = getTableTwoData(res.data[0]);
      this.mediaData = getMediaData(res.data[0]);
      //ajax初始化switch状态

      let switchUrl = API.getSwitchStateById.devUrl + this.$route.params.wsCode;
      this.$axios.get(switchUrl).then(res => {
        console.log("----开关状态----", res);
        this.state_12_1 = getSwitchData(res.data[0]).state_12_1;
        this.state_12_2 = getSwitchData(res.data[0]).state_12_2;
        this.state_12_3 = getSwitchData(res.data[0]).state_12_3;
        this.state_12_4 = getSwitchData(res.data[0]).state_12_4;
        this.state_24_1 = getSwitchData(res.data[0]).state_24_1;
        this.state_24_2 = getSwitchData(res.data[0]).state_24_2;
        this.state_220_1 = getSwitchData(res.data[0]).state_220_1;
        this.state_220_2 = getSwitchData(res.data[0]).state_220_2;
        this.state_poe_1 = getSwitchData(res.data[0]).state_poe_1;
        this.state_poe_2 = getSwitchData(res.data[0]).state_poe_2;
        this.state_poe_3 = getSwitchData(res.data[0]).state_poe_3;
        this.state_poe_4 = getSwitchData(res.data[0]).state_poe_4;
        this.state_menci = getSwitchData(res.data[0]).state_menci;

        this.state_220_3 = getSwitchData(res.data[0]).state_220_3;
      });
    });
  },
  updated: function() {
    //   var url="api/Handler/AjaxTestHandler.ashx?mod=3&&Ws_code="+this.$route.params.wsCode
    //   console.log(url)
    //   this.$axios.get(url).then(res=>{
    //   console.log(this);
    // });
  }
};

//获取表格1的数据
function getTableOneData(data) {
  var dataTable = [];
  dataTable.push({ attr: "监控箱电压", value: data.DS_Jldy });
  dataTable.push({ attr: "监控箱总电能", value: data.DS_Jldn });
  dataTable.push({ attr: "监控箱电流", value: data.DS_Jldl });
  dataTable.push({ attr: "DC12v电压", value: data.DS_DC12dy });
  dataTable.push({ attr: "DC24v电压", value: data.DS_DC24dy });
  dataTable.push({ attr: "监控箱内温度", value: data.DS_WD });
  dataTable.push({ attr: "监控箱内湿度", value: data.DS_SD });
  dataTable.push({ attr: "左右倾斜角度", value: data.DS_ZYQX });
  dataTable.push({ attr: "前后倾斜角度", value: data.DS_QHQX });
  dataTable.push({ attr: "光敏感度ADC", value: data.DS_GMADC });
  //dataTable.push({ attr: "PM2.5", value: data.DS_PMA });

  if (parseFloat(data.DS_PMA) > 0) {
    dataTable.push({ attr: "PM2.5", value: "正常" });
  } else if (parseFloat(data.DS_PMA) > 100) {
    dataTable.push({ attr: "PM2.5", value: "轻度污染" });
  } else if (parseFloat(data.DS_PMA) > 150) {
    dataTable.push({ attr: "PM2.5", value: "中度污染" });
  } else if (parseFloat(data.DS_PMA) > 200) {
    dataTable.push({ attr: "PM2.5", value: "重度污染" });
  }

  dataTable.push({ attr: "PM10", value: data.DS_PMB });
  dataTable.push({ attr: "噪声", value: "disable" });
  dataTable.push({ attr: "雨水", value: "disable" });
  dataTable.push({ attr: "风速", value: "disable" });
  return dataTable;
}
//获取表格2数据
function getTableTwoData(data) {
  var ZTBITEA = fillDataLength(data.DS_ZTBYTEA);
  var ZTBITEB = fillDataLength(data.DS_ZTBYTEB);
  var ZTBITEC = fillDataLength(data.DS_ZTBYTEC);

  var dataTable = [];
  dataTable.push({
    attr: "12v-1#",
    value: ZTBITEA.charAt(7) == "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "12v-2#",
    value: ZTBITEA.charAt(6) == "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "12v-3#",
    value: ZTBITEA.charAt(5) === "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "12v-4#",
    value: ZTBITEA.charAt(4) === "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "24v-1#",
    value: ZTBITEA.charAt(3) === "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "24v-2#",
    value: ZTBITEA.charAt(2) === "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "220v-1#",
    value: ZTBITEA.charAt(1) === "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "220v-2#",
    value: ZTBITEA.charAt(0) === "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "POE状态-01",
    value: ZTBITEB.charAt(4) == "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "POE状态-02",
    value: ZTBITEB.charAt(5) == "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "POE状态-03",
    value: ZTBITEB.charAt(6) == "0" ? "断电" : "通电"
  });
  dataTable.push({
    attr: "POE状态-04",
    value: ZTBITEB.charAt(7) == "0" ? "断电" : "通电"
  });
  return dataTable;
}

function getMediaData(data) {
  var ZTBITEA = fillDataLength(data.DS_ZTBYTEA);
  var ZTBITEB = fillDataLength(data.DS_ZTBYTEB);
  var ZTBITEC = fillDataLength(data.DS_ZTBYTEC);

  var obj = {
    bianhao: data.WS_Code,
    zuoyouqingxie: ZTBITEB.charAt(0) == "0" ? "正常" : "异常",
    qianhouqingxie: ZTBITEB.charAt(1) == "0" ? "正常" : "异常",
    shuijin: ZTBITEB.charAt(2) == "0" ? "正常" : "异常",
    // fengji: ZTBITEC.charAt(1) == "0" ? "正常" : "异常",
    fengji: ZTBITEC.charAt(1) == "0" ? "关闭" : "开启",
    // led: ZTBITEC.charAt(2) == "0" ? "正常" : "异常",
    led: ZTBITEC.charAt(2) == "0" ? "关闭" : "开启",

    fanglei: ZTBITEC.charAt(3) == "0" ? "正常" : "异常",
    jiaoliudianbaojing:
      ZTBITEC.charAt(5) == "0" && ZTBITEC.charAt(6) == "0" ? "正常" : "异常", //交流电压报警需要判断两个值，上限和下限
    jiaoliudiaodian: ZTBITEC.charAt(7) == "0" ? "正常" : "异常",
    almmenci: ZTBITEC.charAt(0) == "0" ? "关闭" : "开启"
  };
  return obj;
}

//获取开关状态
function getSwitchData(data) {
  var BITValueA = fillDataLength(data.BITValueA);
  var BITValueB = fillDataLength(data.BITValueB);
  var BITValueC = fillDataLength(data.BITValueC);
  var obj = {
    state_12_1: BITValueA[7] === "0" ? false : true,
    state_12_2: BITValueA[6] === "0" ? false : true,
    state_12_3: BITValueA[5] === "0" ? false : true,
    state_12_4: BITValueA[4] === "0" ? false : true,
    state_24_1: BITValueA[3] === "0" ? false : true,
    state_24_2: BITValueA[2] === "0" ? false : true,
    state_220_1: BITValueA[1] === "0" ? false : true,
    state_220_2: BITValueA[0] === "0" ? false : true,
    state_poe_1: BITValueB[7] === "0" ? false : true,
    state_poe_2: BITValueB[6] === "0" ? false : true,
    state_poe_3: BITValueB[5] === "0" ? false : true,
    state_poe_4: BITValueB[4] === "0" ? false : true,
    state_menci: BITValueB[0] === "0" ? false : true,
    //新增 220v-3开关
    state_220_3: BITValueB[3] === "0" ? false : true
  };
  return obj;
}

//将状态二进制编码长度补全
function fillDataLength(data) {
  //获取数据长度
  var dataLength = data.length;
  if (data.length < 8) {
    var lost = 0;
    //计算长度差值
    lost = 8 - data.length;
    //循环差值将数据补完成8位
    for (var i = 0; i < lost; i++) {
      data = "0" + data;
    }
    return data;
  } else return data;
}

function getPM25(data) {}

//todo:下发switch开关控制 对应jq版本 969行
</script>

<style>
.tableTitle > .cell {
  color: #666;
  font-weight: bold;
}
.tableValue > .cell {
  color: #888;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  color: orangered;
}

.el-switch {
  height: 35px;
}

table {
  font-size: 14px;
  color: #5a5a5a;
}

table th {
  height: 50px;
  border-bottom: 1px solid #eeeeee;
}

table td {
  width: 150px;
  border-bottom: 1px solid #eeeeee;
}

.colored {
  background-color: #fafafa;
  /* height: 50px; */
}

.btnDoorOpen {
  float: right;
  margin-top: 5%;
  margin-right: 10%;
}
.equipTable {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 30px 10px 30px 0px;
  /* width: 90%; */
  border-radius: 5px;
  font-family: Microsoft YaHei;
}

.equipTable2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 30px 10px 30px 0px;
  width: 90%;
  border-radius: 5px;
  text-align: left;
  padding-left: 10px;
  font-family: Microsoft YaHei;
  background-color: #ffffff;
}
.equipTable2 > tr{
  height: 50px;
}

</style>