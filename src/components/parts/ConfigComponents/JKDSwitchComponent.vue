<template>
   <div >
     <div>{{equipCode}}</div>
     <div>
       <el-row>
<el-form :v-model="formSwitchObj" ref="formSwitchObj">
          <el-row>
            <el-col :span="8">
              <span>12-1</span>
              <el-switch v-model="switch_12_1" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_12_1.compId" placeholder="请选择">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_12_1.equipname" placeholder="请选择">
                <el-option v-for="item in optionsEquipName" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <span>12-2</span>
              <el-switch v-model="switch_12_2" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_12_2.compId" placeholder="请选择">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_12_2.equipname" placeholder="请选择">
                <el-option v-for="item in optionsEquipName" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-form>
       </el-row>
       
     </div>
   </div>
</template>

<script>
 export default {
     props: {
    equipCode: {
      type: String,
      required: true
    }
  },
    data() {
      return {
       switch_12_1: false,
      switch_12_2: false,
      formSwitchObj: {
        ckb_12_1: {
          active: "",
          compId: "",
          equipname: ""
        },
        ckb_12_2: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_12_3: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_12_4: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_24_1: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_24_2: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_220_1: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_220_2: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_poe_1: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_poe_2: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_poe_3: {
          active: false,
          compId: "",
          equipname: ""
        },
        ckb_poe_4: {
          active: false,
          compId: "",
          equipname: ""
        }
      },
      };
    },
    methods: {
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>