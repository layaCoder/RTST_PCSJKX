<template>
  <div>
    <el-row>
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.zuoyouqingxie.name" :stateValue="this.state.zuoyouqingxie" :stateImg="this.mediaTitle.zuoyouqingxie.url"></equipListMedia>
      </el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.qianhouqinxie.name" :stateValue="this.state.qianhouqinxie" :stateImg="this.mediaTitle.qianhouqinxie.url"></equipListMedia>
      </el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.shuijin.name" :stateValue="this.state.shuijin" :stateImg="this.mediaTitle.shuijin.url"></equipListMedia>
      </el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.menci.name" :stateValue="this.state.menci" :stateImg="this.mediaTitle.menci.url"></equipListMedia>
      </el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.fengji.name" :stateValue="this.state.fengji" :stateImg="this.mediaTitle.fengji.url"></equipListMedia>
      </el-col>
      
    </el-row>
<el-row>
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.led.name" :stateValue="this.state.led" :stateImg="this.mediaTitle.led.url"></equipListMedia>
      </el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.fanglei.name" :stateValue="this.state.fanglei" :stateImg="this.mediaTitle.fanglei.url"></equipListMedia>
      </el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.jldbj.name" :stateValue="this.state.jldbj" :stateImg="this.mediaTitle.jldbj.url"></equipListMedia>
      </el-col>
      <el-col :span="4">
     <equipListMedia :stateName="this.mediaTitle.jldd.name" :stateValue="this.state.jldd" :stateImg="this.mediaTitle.jldd.url"></equipListMedia>
      </el-col>
     
      
    </el-row>


    <div>节点编号 {{this.$route.params.wsCode}}</div>
    <div>节点ip {{this.$route.params.ipAddress}}</div>
    <el-button round type="warning" @click="hanleClick">测试loading</el-button>
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

export default {
  components: { equipListMedia },
  data() {
    return {
      data: "",
      state:{
        zuoyouqingxie:1,
        qianhouqinxie:0,
        shuijin:0,
        menci:0,
        fengji:3,
        led:5,
        fanglei:0,
        jldbj:0,
        jldd:0
      },
      mediaTitle:{
        zuoyouqingxie:{name:'左右倾斜',url:zuoyouqingxieUrl},
        qianhouqinxie:{name:'前后倾斜',url:qianhouqingxieUrl},
        shuijin:{name:'水浸',url:shuijinUrl},
        menci:{name:'门磁',url:menciUrl},
        fengji:{name:'风机',url:fengjiUrl},
        led:{name:'led照明',url:ledUrl},
        fanglei:{name:'防雷',url:fangleiUrl},
        jldbj:{name:'交流电报警',url:jiaoliudianbaojingUrl},
        jldd:{name:'交流掉电',url:jiaoliudiaodianUrl}
      }
    };
  },
  methods: {
    hanleClick() {
      //调出loading界面
      this.$store.commit("showLoadingBar", { flag: true });
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