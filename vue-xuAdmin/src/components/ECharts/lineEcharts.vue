<template>
    <div>
      <div :id="id" :style="{width: width, height: height}"></div>
    </div>
</template>

<script>
import westeros from "./theme/westeros"
export default {
  name: "lineEcharts",
  props: {
    id: {
      type: String,
      default: "myChart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = this.$echarts.init(document.getElementById(this.id), "westeros")

      this.chart.setOption({
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["订单数量", "注册车主", "注册用户", "评论数量", "帖子数量"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "订单数量",
            type: "line",
            stack: "总量",
            data: [8200, 6320, 5010, 4340, 3400, 2300, 1100]
          },
          {
            name: "注册车主",
            type: "line",
            stack: "总量",
            data: [2200, 3820, 1910, 2340, 4900, 3300, 1100]
          },
          {
            name: "注册用户",
            type: "line",
            stack: "总量",
            data: [2500, 4302, 5010, 2540, 6900, 5300, 6410]
          },
          {
            name: "评论数量",
            type: "line",
            stack: "总量",
            data: [5320, 7332, 9301, 6334, 5390, 4330, 1320]
          },
          {
            name: "帖子数量",
            type: "line",
            stack: "总量",
            data: [8820, 1932, 5901, 7304, 2900, 3300, 8200]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
