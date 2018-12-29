<template>
  <div>
    <div>{{equipCode}}</div>
    <div>
      <el-row >
        <el-form :v-model="formSwitchObj" ref="formSwitchObj">
          <el-row class="row">
            <el-col :span="8">
              <span>12-1</span>
              <el-switch v-model="DV121STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_12_1.compId" placeholder="请选择" @change="changeSelect($event,'12-1')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_12_1.equipname" placeholder="请选择">
                <el-option v-for="item in options121" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>12-2</span>
              <el-switch v-model="DV122STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_12_2.compId" placeholder="请选择" @change="changeSelect($event,'12-2')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_12_2.equipname" placeholder="请选择">
                <el-option v-for="item in options122" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>12-3</span>
              <el-switch v-model="DV123STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_12_3.compId" placeholder="请选择" @change="changeSelect($event,'12-3')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_12_3.equipname" placeholder="请选择">
                <el-option v-for="item in options123" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>12-4</span>
              <el-switch v-model="DV124STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_12_4.compId" placeholder="请选择" @change="changeSelect($event,'12-4')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_12_4.equipname" placeholder="请选择">
                <el-option v-for="item in options124" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>24-1</span>
              <el-switch v-model="DV241STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_24_1.compId" placeholder="请选择" @change="changeSelect($event,'24-1')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_24_1.equipname" placeholder="请选择">
                <el-option v-for="item in options241" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>24-2</span>
              <el-switch v-model="DV242STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_24_2.compId" placeholder="请选择" @change="changeSelect($event,'24-2')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_24_2.equipname" placeholder="请选择">
                <el-option v-for="item in options242" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>220-1</span>
              <el-switch v-model="DV2201STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_220_1.compId" placeholder="请选择" @change="changeSelect($event,'220-1')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_220_1.equipname" placeholder="请选择">
                <el-option v-for="item in options2201" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>220-2</span>
              <el-switch v-model="DV2202STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_220_2.compId" placeholder="请选择" @change="changeSelect($event,'220-2')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_220_2.equipname" placeholder="请选择">
                <el-option v-for="item in options2202" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>poe-1</span>
              <el-switch v-model="POE1STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_poe_1.compId" placeholder="请选择" @change="changeSelect($event,'poe-1')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_poe_1.equipname" placeholder="请选择">
                <el-option v-for="item in optionsPoe1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>poe-2</span>
              <el-switch v-model="POE2STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_poe_2.compId" placeholder="请选择" @change="changeSelect($event,'poe-2')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_poe_2.equipname" placeholder="请选择">
                <el-option v-for="item in optionsPoe2" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>poe-3</span>
              <el-switch v-model="POE3STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_poe_3.compId" placeholder="请选择" @change="changeSelect($event,'poe-3')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_poe_3.equipname" placeholder="请选择">
                <el-option v-for="item in optionsPoe3" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
              <span>poe-4</span>
              <el-switch v-model="POE4STA" active-text="开启" inactive-text="关闭" @change="changeStatus($event)">
              </el-switch>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">品牌</span>
              <el-select v-model="formSwitchObj.ckb_poe_4.compId" placeholder="请选择" @change="changeSelect($event,'poe-4')">
                <el-option v-for="item in optionsComp" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <span class="selectLabel">型号</span>
              <el-select v-model="formSwitchObj.ckb_poe_4.equipname" placeholder="请选择">
                <el-option v-for="item in optionsPoe4" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item>
              <el-button type="primary" @click="handleSubmit('formObj')">提交</el-button>
              <!-- <el-button @click="dialogVisible = false">取消</el-button> -->
            </el-form-item>
          </el-row>
        </el-form>
      </el-row>

    </div>
  </div>
</template>

<script>
import API from "../../../apis/index.js";

export default {
  props: {
    equipCode: {
      type: String,
      required: true
    }
  },
  data() {
    return {

      optionsComp: [],

      options121: [],
      options122: [],
      options123: [],
      options124: [],
      options241: [],
      options242: [],
      options2201: [],
      options2202: [],
      optionsPoe1: [],
      optionsPoe2: [],
      optionsPoe3: [],
      optionsPoe4: [],

      DV121STA: false,
      DV122STA: false,
      DV123STA: false,
      DV124STA: false,
      DV241STA: false,
      DV242STA: false,
      DV2201STA: false,
      DV2202STA: false,
      // DV2203STA: false,
      // DV2204STA: false,
      POE1STA: false,
      POE2STA: false,
      POE3STA: false,
      POE4STA: false,
     
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
      //axios post 给后台的data对象
      postForm: {

        WS_Code: "",
        DV121STA: "",
        DV121SXJCOMID: "",
        DV121SXJID: "",

        DV122STA: "",
        DV122SXJCOMID: "",
        DV122SXJID: "",

        DV123STA: "",
        DV123SXJCOMID: "",
        DV123SXJID: "",

        DV124STA: "",
        DV124SXJCOMID: "",
        DV124SXJID: "",

        DV241STA: "",
        DV241SXJCOMID: "",
        DV241SXJID: "",

        DV242STA: "",
        DV242SXJCOMID: "",
        DV242SXJID: "",

        DV2201STA: "",
        DV2201SXJCOMID: "",
        DV2201SXJID: "",

        DV2202STA: "",
        DV2202SXJCOMID: "",
        DV2202SXJID: "",

        POE1STA: "",
        POE1SXJCOMID: "",
        POE1SXJID: "",

        POE2STA: "",
        POE2SXJCOMID: "",
        POE2SXJID: "",

        POE3STA: "",
        POE3SXJCOMID: "",
        POE3SXJID: "",

        POE4STA: "",
        POE4SXJCOMID: "",
        POE4SXJID: "",
      }
    };
  },
  methods: {
    //loading
   openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 4000);
      },


    changeStatus(evnent) {
      console.log(evnent);
    },
    changeSelect(event, params) {
      let url = API.getCameraAll.devUrl + "&where=SCJComID=" + event.toString();
      switch (params) {
        case "12-1":
          this.$axios.get(url).then(res => {
            this.options121 = getNameOptions(res.data);
          });
          break;
        case "12-2":
          this.$axios.get(url).then(res => {
            this.options122 = getNameOptions(res.data);
          });
          break;
        case "12-3":
          this.$axios.get(url).then(res => {
            this.options123 = getNameOptions(res.data);
          });
          break;
        case "12-4":
          this.$axios.get(url).then(res => {
            this.options124 = getNameOptions(res.data);
          });
          break;
        case "24-1":
          this.$axios.get(url).then(res => {
            this.options241 = getNameOptions(res.data);
          });
          break;
        case "24-2":
          this.$axios.get(url).then(res => {
            this.options242 = getNameOptions(res.data);
          });
          break;
        case "220-1":
          this.$axios.get(url).then(res => {
            this.options2201 = getNameOptions(res.data);
          });
          break;
        case "220-2":
          this.$axios.get(url).then(res => {
            this.options2202 = getNameOptions(res.data);
          });
          break;
        case "poe-1":
          this.$axios.get(url).then(res => {
            this.optionsPoe1 = getNameOptions(res.data);
          });
          break;
        case "poe-2":
          this.$axios.get(url).then(res => {
            this.optionsPoe2 = getNameOptions(res.data);
          });
          break;
        case "poe-3":
          this.$axios.get(url).then(res => {
            this.optionsPoe3 = getNameOptions(res.data);
          });
          break;
        case "poe-4":
          this.$axios.get(url).then(res => {
            this.optionsPoe4 = getNameOptions(res.data);
          });
          break;
      }
    },
    handleSubmit() {
      this.postForm.WS_Code=this.equipCode

      this.postForm.DV121STA=this.DV121STA===false?0:1
      this.postForm.DV121SXJCOMID=this.formSwitchObj.ckb_12_1.compId===''?0:this.formSwitchObj.ckb_12_1.compId
      this.postForm.DV121SXJID=this.formSwitchObj.ckb_12_1.equipname===''?0:this.formSwitchObj.ckb_12_1.equipname

      this.postForm.DV122STA=this.DV122STA===false?0:1
      this.postForm.DV122SXJCOMID=this.formSwitchObj.ckb_12_2.compId===''?0:this.formSwitchObj.ckb_12_2.compId
      this.postForm.DV122SXJID=this.formSwitchObj.ckb_12_2.equipname===''?0:this.formSwitchObj.ckb_12_2.equipname

      this.postForm.DV123STA=this.DV123STA===false?0:1
      this.postForm.DV123SXJCOMID=this.formSwitchObj.ckb_12_3.compId===''?0:this.formSwitchObj.ckb_12_3.compId
      this.postForm.DV123SXJID=this.formSwitchObj.ckb_12_3.equipname===''?0:this.formSwitchObj.ckb_12_3.equipname

      this.postForm.DV124STA=this.DV124STA===false?0:1
      this.postForm.DV124SXJCOMID=this.formSwitchObj.ckb_12_4.compId===''?0:this.formSwitchObj.ckb_12_4.compId
      this.postForm.DV124SXJID=this.formSwitchObj.ckb_12_4.equipname===''?0:this.formSwitchObj.ckb_12_4.equipname

      this.postForm.DV241STA=this.DV241STA===false?0:1
      this.postForm.DV241SXJCOMID=this.formSwitchObj.ckb_24_1.compId===''?0:this.formSwitchObj.ckb_24_1.compId
      this.postForm.DV241SXJID=this.formSwitchObj.ckb_24_1.equipname===''?0:this.formSwitchObj.ckb_24_1.equipname

      this.postForm.DV242STA=this.DV242ST===false?0:1
      this.postForm.DV242SXJCOMID=this.formSwitchObj.ckb_24_2.compId===''?0:this.formSwitchObj.ckb_24_2.compId
      this.postForm.DV242SXJID=this.formSwitchObj.ckb_24_2.equipname===''?0:this.formSwitchObj.ckb_24_2.equipname

      this.postForm.DV2201STA=this.DV2201STA===false?0:1
      this.postForm.DV2201SXJCOMID=this.formSwitchObj.ckb_220_1.compId===''?0:this.formSwitchObj.ckb_220_1.compId
      this.postForm.DV2201SXJID=this.formSwitchObj.ckb_220_1.equipname===''?0:this.formSwitchObj.ckb_220_1.equipname

      this.postForm.DV2202STA=this.DV2202STA===false?0:1
      this.postForm.DV2202SXJCOMID=this.formSwitchObj.ckb_220_2.compId===''?0:this.formSwitchObj.ckb_220_2.compId
      this.postForm.DV2202SXJID=this.formSwitchObj.ckb_220_2.equipname===''?0:this.formSwitchObj.ckb_220_2.equipname

      this.postForm.POE1STA=this.POE1STA===false?0:1
      this.postForm.POE1SXJCOMID=this.formSwitchObj.ckb_poe_1.compId===''?0:this.formSwitchObj.ckb_poe_1.compId
      this.postForm.POE1SXJID=this.formSwitchObj.ckb_poe_1.equipname===''?0:this.formSwitchObj.ckb_poe_1.equipname

      this.postForm.POE2STA=this.POE2STA===false?0:1
      this.postForm.POE2SXJCOMID=this.formSwitchObj.ckb_poe_2.compId===''?0:this.formSwitchObj.ckb_poe_2.compId
      this.postForm.POE2SXJID=this.formSwitchObj.ckb_poe_2.equipname===''?0:this.formSwitchObj.ckb_poe_2.equipname

      this.postForm.POE3STA=this.POE3STA===false?0:1
      this.postForm.POE3SXJCOMID=this.formSwitchObj.ckb_poe_3.compId===''?0:this.formSwitchObj.ckb_poe_3.compId
      this.postForm.POE3SXJID=this.formSwitchObj.ckb_poe_3.equipname===''?0:this.formSwitchObj.ckb_poe_3.equipname

      this.postForm.POE4STA=this.POE4STA===false?0:1
      this.postForm.POE4SXJCOMID=this.formSwitchObj.ckb_poe_4.compId===''?0:this.formSwitchObj.ckb_poe_4.compId
      this.postForm.POE4SXJID=this.formSwitchObj.ckb_poe_4.equipname===''?0:this.formSwitchObj.ckb_poe_4.equipname

      let url=API.addOrUpdateEquipSwitchState.devUrl
      this.$axios({
        url: url,
        method: "post",
        data: this.postForm,
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
      }).then(
        this.$message({
            type: "success",
            message:this.formType===0? "添加成功":"修改成功"
          })
      ).catch(function(response){
        console.log(response)
      })
      this.$emit('closeDialog')
    }
  },
  mounted: function() {

    //加载品牌selcet框数据
    let url = API.getSXJCompanyAll.devUrl;
    this.$axios.get(url).then(res => {
      console.log(res.data);
      for (let item of res.data) {
        this.optionsComp.push({
          label: item.SXJCom,
          value: item.ID
        });
      }
    });
 
   let url2=API.getEquipSwitchStateConfigList.devUrl+'&WS_Code='+this.equipCode
    this.$axios.get(url2).then(res => {
       let switchState=res.data[0]
      console.log('---------开光状态表数据-------------')
      console.log(res.data)
      if(res.data.length>0){
 //switch开关赋值
      this.DV121STA=res.data[0].DV121STA==="1"?true:false
      this.DV122STA=res.data[0].DV122STA==="1"?true:false
      this.DV123STA=res.data[0].DV123STA==="1"?true:false
      this.DV124STA=res.data[0].DV124STA==="1"?true:false
      this.DV241STA=res.data[0].DV241STA==="1"?true:false
      this.DV242STA=res.data[0].DV242STA==="1"?true:false
      this.DV2201STA=res.data[0].DV2201STA==="1"?true:false
      this.DV2202STA=res.data[0].DV2202STA==="1"?true:false
      this.POE1STA=res.data[0].POE1STA==="1"?true:false
      this.POE2STA=res.data[0].POE2STA==="1"?true:false
      this.POE3STA=res.data[0].POE3STA==="1"?true:false
      this.POE4STA=res.data[0].POE4STA==="1"?true:false

      //品牌select框赋值
      this.formSwitchObj.ckb_12_1.compId=res.data[0].DV121SXJCOMID===0?'':res.data[0].DV121SXJCOMID
      this.formSwitchObj.ckb_12_2.compId=res.data[0].DV122SXJCOMID===0?'':res.data[0].DV122SXJCOMID
      this.formSwitchObj.ckb_12_3.compId=res.data[0].DV123SXJCOMID===0?'':res.data[0].DV123SXJCOMID
      this.formSwitchObj.ckb_12_4.compId=res.data[0].DV124SXJCOMID===0?'':res.data[0].DV124SXJCOMID
      this.formSwitchObj.ckb_24_1.compId=res.data[0].DV241SXJCOMID===0?'':res.data[0].DV241SXJCOMID
      this.formSwitchObj.ckb_24_2.compId=res.data[0].DV242SXJCOMID===0?'':res.data[0].DV242SXJCOMID
      this.formSwitchObj.ckb_220_1.compId=res.data[0].DV2201SXJCOMID===0?'':res.data[0].DV2201SXJCOMID
      this.formSwitchObj.ckb_220_2.compId=res.data[0].DV2202SXJCOMID===0?'':res.data[0].DV2202SXJCOMID
      this.formSwitchObj.ckb_poe_1.compId=res.data[0].POE1SXJCOMID===0?'':res.data[0].POE1SXJCOMID
      this.formSwitchObj.ckb_poe_2.compId=res.data[0].POE2SXJCOMID===0?'':res.data[0].POE2SXJCOMID
      this.formSwitchObj.ckb_poe_3.compId=res.data[0].POE3SXJCOMID===0?'':res.data[0].POE3SXJCOMID
      this.formSwitchObj.ckb_poe_4.compId=res.data[0].POE4SXJCOMID===0?'':res.data[0].POE4SXJCOMID

      //型号selcet框赋值
      let  dv121 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_12_1.compId
            this.$axios.get(dv121).then(res => {
            this.options121 = getNameOptions(res.data);
            this.formSwitchObj.ckb_12_1.equipname=switchState.DV121SXJID
          });
       
      let dv122 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_12_2.compId
       this.$axios.get(dv122).then(res => {
            this.options122 = getNameOptions(res.data);
            this.formSwitchObj.ckb_12_2.equipname=switchState.DV122SXJID
          });
      
      if(this.formSwitchObj.ckb_12_3.compId!==''){
        console.log(this.formSwitchObj.ckb_12_3.compId)
 let dv123 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_12_3.compId
       this.$axios.get(dv123).then(res => {
            this.options123 = getNameOptions(res.data);
            this.formSwitchObj.ckb_12_3.equipname=switchState.DV123SXJID
          });
      }
     
      if(this.formSwitchObj.ckb_12_4.compId!==''){
 let dv124 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_12_4.compId
       this.$axios.get(dv124).then(res => {
            this.options124 = getNameOptions(res.data);
            this.formSwitchObj.ckb_12_4.equipname=switchState.DV124SXJID
          });
      }
     
      if(this.formSwitchObj.ckb_24_1.compId!==''){
   let dv241 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_24_1.compId
       this.$axios.get(dv241).then(res => {
            this.options241 = getNameOptions(res.data);
            this.formSwitchObj.ckb_24_1.equipname=switchState.DV241SXJID
          });
      }
   
      
       if(this.formSwitchObj.ckb_24_2.compId!==''){
      let dv242 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_24_2.compId
       this.$axios.get(dv242).then(res => {
            this.options242 = getNameOptions(res.data);
            this.formSwitchObj.ckb_24_2.equipname=switchState.DV242SXJID
          });
       }
       
      if(this.formSwitchObj.ckb_220_1.compId!==''){
      let dv2201 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_220_1.compId
       this.$axios.get(dv2201).then(res => {
            this.options2201 = getNameOptions(res.data);
            this.formSwitchObj.ckb_220_1.equipname=switchState.DV2201SXJID
          });
      }
      
     if(this.formSwitchObj.ckb_220_2.compId!==''){
    let dv2202 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_220_2.compId
       this.$axios.get(dv2202).then(res => {
            this.options2202 = getNameOptions(res.data);
            this.formSwitchObj.ckb_220_2.equipname=switchState.DV2202SXJID
          });
     }
     
    if(this.formSwitchObj.ckb_poe_1.compId!==''){
     let poe1 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_poe_1.compId
       this.$axios.get(poe1).then(res => {
            this.optionsPoe1 = getNameOptions(res.data);
            this.formSwitchObj.ckb_poe_1.equipname=switchState.POE1SXJID
          });
    }
     
    if(this.formSwitchObj.ckb_poe_2.compId!==''){
    let poe2 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_poe_2.compId
       this.$axios.get(poe2).then(res => {
            this.optionsPoe2 = getNameOptions(res.data);
            this.formSwitchObj.ckb_poe_2.equipname=switchState.POE2SXJID
          });
    }
      
    if(this.formSwitchObj.ckb_poe_3.compId!==''){
       let poe3 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_poe_3.compId
       this.$axios.get(poe3).then(res => {
            this.optionsPoe3 = getNameOptions(res.data);
            this.formSwitchObj.ckb_poe_3.equipname=switchState.POE3SXJID
          });
    }
     if(this.formSwitchObj.ckb_poe_4.compId!==''){
      let poe4 = API.getCameraAll.devUrl + "&where=SCJComID=" + this.formSwitchObj.ckb_poe_4.compId
       this.$axios.get(poe4).then(res => {
            this.optionsPoe4 = getNameOptions(res.data);
            this.formSwitchObj.ckb_poe_4.equipname=switchState.POE4SXJID
          });
     }
      }
     
     
    });
  }
};

//根据品牌id获取型号select框选项
function getNameOptions(data) {
  let dataArray = [];
  for (let item of data) {
    dataArray.push({
      label: item.SXJName,
      value: item.ID
    });
  }
  return dataArray;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.row {
  margin-bottom: 10px;
}
</style>