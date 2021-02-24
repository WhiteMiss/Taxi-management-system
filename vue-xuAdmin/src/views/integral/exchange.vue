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

      </div>

    </el-col>
  </el-row>
<dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
  </div>
</template>
<script>
export default {
  name: "exchange",
  data () {
    return {
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
          },
          {
            name: "驻马店",
            value: 63411
          },
          {
            name: "新乡",
            value: 44231
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
</style>
