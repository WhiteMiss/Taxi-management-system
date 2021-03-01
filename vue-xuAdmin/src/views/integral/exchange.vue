<template>
<div class="exchange">
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="card dbsx">
        <dv-border-box-1 :reverse="true">
            <div class="left">
          <p class="title"><i class="fa fa-file-text-o"></i>积分数值</p>
          <dv-decoration-9 style="width: 150px; height: 150px ;margin-left:40%"
            >66</dv-decoration-9
          ></div>
          </dv-border-box-1
        >
      </div>
    </el-col>
       <el-col :span="12">
        <div class="card bbxx">
           <dv-border-box-1 :reverse="true">
               <div class="left">
          <p class="title"><i class="fa fa-server"></i>积分奖励商城</p>
          <div class="table">
            <p><span class="tit">公告</span>疫情物流公告</p>
            <p>
              <span class="tit">用户</span>用户
            </p>
          </div>
               </div>
           </dv-border-box-1>
        </div>
      </el-col>
    <!-- <el-col :span="12">
      <div class="card bbxx">
        <p class="title"><i class="fa fa-server"></i>账户信息</p>
<dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
      </div>
    </el-col> -->
  </el-row>
<el-row>
  <div class="card">
  <el-col :span="6">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../../assets/exchange/手环.jpg" class="image">
      <div style="padding: 14px;">
        <span>手环（100积分）</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" :plain="true" @click="open4">兑换</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
    <el-col :span="6">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../../assets/exchange/双肩包.jpg" class="image">
      <div style="padding: 14px;">
        <span>双肩包（20积分）</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" :plain="true" @click="open2">兑换</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
     <el-col :span="6">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../../assets/exchange/积分卡.jpg" class="image">
      <div style="padding: 14px;">
        <span>积分卡（1000积分）</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" :plain="true" @click="open4 ">兑换</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
      <el-col :span="6">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../../assets/exchange/水壶1.jpg" class="image">
      <div style="padding: 14px;">
        <span>水壶1（50积分）</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" :plain="true" @click="open2">兑换</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
  </div>
</el-row>
  </div>
</template>
<script>
export default {
  name: "exchange",
  data () {
    return {
      currentDate: new Date()
      // "config": {
      //   "data": [
      //     {
      //       name: "周口",
      //       value: 55123
      //     },
      //     {
      //       name: "南阳",
      //       value: 12022
      //     },
      //     {
      //       name: "西峡",
      //       value: 78932
      //     }

      //   ],
      //   unit: "单位",
      //   valueFormatter ({ value }) {
      //     console.warn(arguments)
      //     const reverseNumber = (value + "").split("").reverse()
      //     let valueStr = ""

      //     while (reverseNumber.length) {
      //       const seg = reverseNumber.splice(0, 3).join("")
      //       valueStr += seg
      //       if (seg.length === 3) valueStr += ","
      //     }

      //     return valueStr.split("").reverse().join("")
      //   }
      // }
    }
  },
  methods: {
    open2 () {
      this.$message({
        message: "恭喜你，兑换成功",
        type: "success"
      })
    },
    open4 () {
      this.$message.error("不好意思，积分不够")
    }
  }
}
</script>
<style>
.exchange .card{
  border-radius: 30px;
}
.card .el-card{
 margin: 10px;
}

.left .title{
padding-left: 30px;
padding-top: 15px;

}
/* 卡片 */
 .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
