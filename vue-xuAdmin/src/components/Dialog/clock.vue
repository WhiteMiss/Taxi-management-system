<template>
    <div class="clock">
      <el-card class="box-card">
         <div slot="header" class="clearfix">
    <h style="font-size:15px;color:#409EFF;font-weight:bold">小巧时钟</h>
  </div>
         <div class="time">
        <clock :time="time"></clock>
    </div>
      </el-card>
    </div>
</template>

<script>
import clock from "vue-clock2"

export default {
  components: {clock},

  name: "myclock",
  data () {
    return {
      time: "10:40"
    }
  },
  methods: {
    fun () {
      let date = new Date()
      let h = date.getHours()
      h = h < 10 ? ("0" + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ("0" + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ("0" + s) : s
      this.time = h + ":" + m + ":" + s
    }
  },
  mounted () {
    window.setInterval(() => {
      setTimeout(this.fun, 0)
    }, 1000)
  }
}


</script>
<style scoped>
    .time{
        height: 160px;
        width: 100%;
    }
    .time >div{
      margin-left: 100px;
      margin-top: 10px
    }
</style>
<style>
 .clock
    .el-card__body{
      height: 200px;
    }
</style>
