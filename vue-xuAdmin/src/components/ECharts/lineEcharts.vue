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
            data: [8, 6, 5, 4, 3, 2, 1]
          },
          {
            name: "注册车主",
            type: "line",
            stack: "总量",
            data: [2, 3, 1, 2, 4, 3, 1]
          },
          {
            name: "注册用户",
            type: "line",
            stack: "总量",
            data: [2, 1, 5, 2, 6, 5, 6]
          },
          {
            name: "评论数量",
            type: "line",
            stack: "总量",
            data: [5, 7, 9, 6, 5, 4, 1]
          },
          {
            name: "帖子数量",
            type: "line",
            stack: "总量",
            data: [8, 1, 5, 7, 2, 3, 8]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
