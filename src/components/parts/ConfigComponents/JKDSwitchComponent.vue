<template>
   <div >
     <div>switch components</div>
     <div>{{equipCode}}</div>
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