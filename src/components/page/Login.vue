<template>
  <div class="login">
    <el-row style="margin-left:0;margin-right:0;" :gutter="20">
      <el-col :span="8" :offset="8">
        <el-card>
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <h3 class="login-title">系统登录</h3>
            <el-form-item prop="username">
              <el-input type="text" v-model="loginForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:100%;" @click="Login" :loading="logining">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {fetchLogin} from '../../api/loginAPI'
export default {
  data(){
    return{
      logining:false,
      loginForm:{
        username:"xiaobog",
        password:"123456"
      },
      checked:true,
      rules:{
        username:[{required:true,message:'请输入账号',trigger:'blur'}],
        password:[{required:true,message:'请输入密码',trigger:'blur'}]
      }
    }
  },
  methods:{
    Login(){
      this.$refs.loginForm.validate((valid)=>{
        if(valid){
          this.logining = true;
          var loginParams = { username: this.loginForm.username, password: this.loginForm.password };
          fetchLogin(loginParams).then(data=>{
            this.logining=false;
            let { msg, code, user } = data.data;
            if(code!=200){
              this.$message({
                  message: msg,
                  type: 'error'
                });
            }else{
              sessionStorage.setItem('user', JSON.stringify(user));
              this.$router.push({ path: '/HomePage' });
            }
          });
        }else{
          this.$message({
            message:'登录失败！',
            type:'warning'
          });
        }
      });
    }
  }
}
</script>
<style lang='less' scoped>
.login{
  .el-card{
    box-shadow: 0 0 25px #cac6c6;
    padding: 10px 20px;
  }
  .login-title{
    margin-bottom: 40px;
    text-align: center;
  }
  .el-row{
   position: absolute;
   left:0;
   right:0;
   top:0;
   bottom:0;
   margin: auto;
   height: 50%;
  }
}
</style>


