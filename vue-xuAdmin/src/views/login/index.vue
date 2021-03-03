<template>
  <div id="login">
    <div class="loginConbox">
      <div class="header">
        <!--<div class="logo">-->
          <!--<img src="../../assets/logo.png">-->
        <!--</div>-->
      </div>
      <div class="loginBox">
        <div class="loginCon">
          <p class="title">Taxi platform</p>
          <p class="title">出租车志愿者管理</p>
          <p class="title">平台</p>
      <!-- 轮播 -->
  <div class="block title">

    <el-carousel height="150px">
      <el-carousel-item v-for="item in titleList" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>

          <el-card shadow="always" class="login-module" v-if="smdl">
            <div slot="header" class="clearfix formTitlt">
              <span>密码登录</span>
              <span class="titIconbox">
              <i class="iconfont xu-saomadenglu2 fa-lg iconcolor"></i>
              <i class="iconfont xu-saomadenglu01 el-icon--right fa-lg pointer" @click="smdl = !smdl"></i>
            </span>
            </div>
            <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
              <el-form-item>
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入登录账号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" v-model="loginForm.password" auto-complete="off"
                          placeholder="请输入登录密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
              <p class="smalltxt">
                <router-link class="a" to="#">忘记密码</router-link>
                <router-link class="a" to="#">忘记会员名</router-link>
                <router-link class="a" to="#" >免费注册</router-link>
                <!-- <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" @click="addUserFn" plain>添加账号</el-button> -->
              </p>
            </el-form>
          </el-card>
          <el-card shadow="always" class="login-module" v-else>
            <div slot="header" class="clearfix formTitlt">
              <span>扫码登录</span>
              <span class="titIconbox">
              <i class="iconfont xu-mimadenglu1 fa-lg iconcolor"></i>
              <i class="iconfont xu-imagevector el-icon--right fa-lg pointer" @click="smdl = !smdl"></i>
            </span>
            </div>
            <div class="ewmbox">
              <div class="ewm">
                <img src="https://img.alicdn.com/tfscom/TB1ivYYyHvpK1RjSZFqwu3XUVXa.png">
              </div>
              <div class="ewmicon">
                <i class="iconfont xu-saomadenglu fa-2x iconcolor"></i>
                <p>打开 微信 扫一扫登录</p>
              </div>
              <p class="smalltxt">
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
<user-info v-if="dialogVisible" :title="title" :dialogVisible="dialogVisible" :userId="userId" @successCallback="successCallback"/>
  </div>
</template>
<script>
import loginTable from "../../components/login/loginTable"
export default {
  components: { loginTable },
  data () {
    return {
      dialogVisible: false,
      smdl: true,
      loginForm: {
        username: "admin",
        password: "admin"
      },
      titleList: [
        "这晚霞清风，山川河海，所有的温柔陷落都是神明的，神明是你的，我也是你的",
        "神明是你的，我也是你的",
        "还好有生活的烟火，慢慢淡化了对你的思念"
      ]
    }
  },
  methods: {
    successCallback () {
      this.dialogVisible = false
      this.getList()
    },
    addUserFn () {
      this.dialogVisible = true
      this.title = "添加账号"
      this.userId = ""
    },
    submitForm () {
      let that = this
      console.log(this.$axios)
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$message({
          showClose: true,
          message: "账号或密码不能为空",
          type: "error"
        })
        return false
      } else {
        this.$request.fetchLogin({
          username: that.loginForm.username,
          password: that.loginForm.password
        }).then(res => {
          that.$restBack(res.data, () => {
            that.$store.dispatch("setToken", res.data.data.access_token).then(res => {
              that.$router.push({path: "/"})
            })
          }, "登录成功")
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  },
  mounted () {
    sessionStorage.removeItem("addTab")
  }
}
</script>
<style lang="scss">
//轮播
.el-carousel__item h3 {
    color: white;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  .el-carousel__item:nth-child(2n) {
     background-color:rgba(220,220,220,0.1);
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color:rgba(220,220,220,0.1);
  }
  // .block{
  //   float:left
  // }

  #login {
    width: 100%;
    height: 100%;
    // background-color: #2d3a4b;
    background: url('../../assets/login/公路.jpg') center center no-repeat;
    // .loginConbox{
    //   background: #2d3a4b;
    // }
    .header {
      height: 60px;
      position: relative;
      // background: #2d3a4b;
      /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
      .logo{
        margin-left: 30px;
        width: 500px;
        float: left;
        height: 40px;
        padding-top: 10px;
        img{
          height: 100%;
        }
      }
    }

    .loginBox {
      .iconcolor {
        color: #409EFF;
      }

      padding: 74px 0 118px;

      .loginCon {
        width: 990px;
        margin: auto;
        position: relative;
        height: 388px;

        .el-card__header {
          border-bottom: 0px;
        }
        .title{
          font-size: 36px;
          font-weight: 600;
          color: #ffffff;
          width: 500px;
          float: left;
          margin-top: 0px;
          &:first-child{
            font-size: 50px;
            margin-top: 50px;
            margin-bottom: 30px;
          }
        }
        .login-module {
          width: 380px;
          height: 325px;
          margin-top: 60px;
          border: none;
          position: absolute;
          right: 0;

          .formTitlt {
            font-size: 18px;
            font-weight: 400;

            .titIconbox {
              float: right;

              .pointer {
                cursor: pointer;
              }
            }
          }

          .smalltxt {
            text-align: right;

            .a {
              text-decoration: none;
              color: #999999;
              font-size: 12px;
              margin-left: 8px;
            }
          }
        }

        .el-form-item__content {
          margin-left: 0px !important;

          .subBtn {
            width: 100%;
          }
        }
      }

      .el-input__inner, .el-button, .el-card, .el-message {
        border-radius: 0px !important;
      }

      .el-form-item__content .ico {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 999;
        width: 40px;
        height: 39px;
        text-align: center;
        border-right: 1px solid #ccc;
      }

      .ewmbox {
        width: 100%;
        height: 240px;
        margin-top: -25px;

        .ewm {
          width: 140px;
          height: 140px;
          margin: 20px auto;

          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }

        .ewmicon {
          width: 140px;
          margin: 20px auto 0;

          .iconfont {
            float: left;
          }

          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }
      }
    }
  }
</style>
