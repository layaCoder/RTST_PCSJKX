<template>
 <div class="loading" >
    <el-button
    type=""
    @click="openFullScreen"
    element-loading-text="拼命加载中"
    v-loading.fullscreen.lock="fullscreenLoading"
    >
    
  </el-button>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        fullscreenLoading: true
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .loading{
   background-color: #e0e0e0
 }   

</style>