<template>
  <div class="header">
    <el-row>
      <el-col :span="20">
        <div class="title">
          <img class="logo" width="30px" height="30px" src="../../../static/img/logo.png" alt="logo">
          <span class="name">{{name}}</span><span class="s-name">Admin</span>
        </div>
      </el-col>
      <el-col :span="1">
        <el-dropdown>
          <span class="i-size el-dropdown-link">
            <el-badge :value="5"><i class="el-icon-message"></i></el-badge>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              测试用例
            </el-dropdown-item>
            <el-dropdown-item>测试用例</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="1">
        <el-dropdown>
          <span class="i-size el-dropdown-link">
            <el-badge :value="3"><i class="el-icon-menu"></i></el-badge>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              测试用例
            </el-dropdown-item>
            <el-dropdown-item>测试用例</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="1">
        <el-dropdown>
          <span class="head-span el-dropdown-link">
            <img class="head-portrait" src="../../../static/img/headp.jpg" alt="头像">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-star-off"></i> 个人
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-setting"></i> 设置
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-star-on"></i> <span @click="loginOut">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'xiaobog'
      }
    },
    methods:{
      loginOut(){
        this.$confirm('您确定要退出吗？','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          sessionStorage.clear('user');
          this.$router.push('/login');
        });

      }
    }
  }
</script>

<style lang="less" scoped>
.header{
  font-size: 24px;
  height: 50px;
  background-color: #2b83f9;
  background-image: linear-gradient(143deg,#1D8CE0 20%,#20A0FF 51%,#58B7FF);
  .title{
    line-height: 50px;
    margin-left: 20px;
    .logo{
      position: absolute;
      top:10px;
    }
    .name{
      color:#fff;
      margin-left: 35px;
    }
    .s-name{
      color:#58B7FF;
    }
  }
  .i-size{
    font-size: 16px;
    color: #fff;
  }
}
.el-badge{
  margin-top: 15px;
}
.el-dropdown>span{
  cursor: pointer;
}
.head-portrait{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-top: 5px;
}
.head-span{
  display: inline-block;
}
</style>


