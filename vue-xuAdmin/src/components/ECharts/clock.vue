<template>
    <div>
         <div :id="id" :style="{width: width, height: height}"></div>
    </div>
</template>

<script>
import * as echarts from "echarts"
export default {


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
  }

}
</script>
