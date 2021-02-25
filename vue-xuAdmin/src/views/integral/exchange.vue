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
        <p class="title"><i class="fa fa-server"></i>账户信息</p>
<dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
      </div>
    </el-col>
  </el-row>
<el-row>
  <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">兑换</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>
<script>
export default {
  name: "exchange",
  data () {
    return {
      currentDate: new Date(),
      "config": {
        "data": [
          {
            name: "周口",
            value: 55123
          },
          {
            name: "南阳",
            value: 12022
          },
          {
            name: "西峡",
            value: 78932
          }

        ],
        unit: "单位",
        valueFormatter ({ value }) {
          console.warn(arguments)
          const reverseNumber = (value + "").split("").reverse()
          let valueStr = ""

          while (reverseNumber.length) {
            const seg = reverseNumber.splice(0, 3).join("")
            valueStr += seg
            if (seg.length === 3) valueStr += ","
          }

          return valueStr.split("").reverse().join("")
        }
      }
    }
  }
}
</script>
<style>
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
