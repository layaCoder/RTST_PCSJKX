<template>
    <div>
        <el-row>
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">&nbsp;</el-col>
            <h2>
                登录页面
            </h2>
            <el-col :span="4">&nbsp;</el-col>
        </el-row>
        <el-row>

            <el-row class="loginForm">
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="16">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.passwold"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="handleLogin">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="4"></el-col>
            </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        passwold: ""
      }
    };
  },
  created() {
    this.keyupSubmit();
  },
  methods: {
    // todo:后台API对接
    handleLogin() {
    //   if (this.form.name !== "admin" || this.form.passwold !== "123456") {
    //     this.$message({
    //       message: "用户名或密码错误",
    //       type: "warning"
    //     });
    //     return;
    //   }
      
      this.$router.push({
        path: "/main/detail"
      });
    },
    keyupSubmit(){
  document.onkeydown=e=>{
    let _key=window.event.keyCode;
    if(_key===13){
        alert
     this.handleLogin()
    }
  }
},
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-top: 200px;
}

button {
  float: left;
}

.loginForm {
  /* width:80%; */
  margin-top: 100px;
}
</style>
