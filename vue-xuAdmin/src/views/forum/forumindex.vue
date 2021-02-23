<template>
    <div>
        <ul  class="box">
            <li v-for="(item,index) in pageList" :key="index"  @click="choose(index)" :class="{active: index == current && current !== ''}">
                <div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                    <p>{{time | formatDate}}<span @click="toInfo(index)" class="detail">查看详情</span></p>
                </div>
            </li>
        </ul>
          <div class="box1">
        <p>标题</p>
        <input  class="tit" type="text" v-model="title">
        <p>内容</p>
        <textarea  class="con" type="text" v-model="content"/>
        <!--        <div class="btn" @click="add()">添加</div>-->
        <div class="footer"><button type="button" class="btn1 active"  @click="add()">发布</button>
            </div>
    </div>
    </div>
</template>

<script>
import store from "@/store/index.js"
export default {
  name: "List",
  computed: {
    pageList () {
      return store.state.lists
    }
  },
  data () {
    return {
      current: "",
      time: Date.parse(new Date()),

      title: "",
      content: ""
    }
  },
  // 时间戳
  filters: {
    formatDate (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ("0" + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ("0" + d) : d
      let h = date.getHours()
      h = h < 10 ? ("0" + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ("0" + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ("0" + s) : s
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s
    }
  },
  methods: {
    add () {
      store.commit("addItem", {
        title: this.title,
        content: this.content
      })
      this.title = ""
      this.content = ""
    },
    choose (index) {
      this.current = index
      console.log(index, this.current)
    },
    toInfo (index) {
      store.commit("setIndex", index)
      this.$router.push("/postDetails")
    }
  }
}
</script>

<style scoped>
    .box {
        margin: 20px 5%;
    }
    .box li{
        border: 1px solid #ccc;
        border-radius: 2px;
        line-height: 30px;
        margin: 20px 0;
        padding: 10px;
    }
    .box h3{
        border-bottom: 1px solid #ccc;
        height: 30px;
    }
    li.active{
        background-color: #42b983;
        color: #fff;
    }
    .detail{
        float: right;
    }
     .box1{
        margin: 0 5%;
    }
    .box1 p{
        margin-top: 20px;
    }
    .box1 input{
        border-radius: 2px;
        border: 1px solid #42b983;
    }
    .tit{
        width: 100%;
        height: 30px;
    }
    .con{
        border-radius: 2px;
        border: 1px solid #42b983;
        width: 100%;
        height: 200px;
    }
    .footer{
      text-align: center;
    }
    .footer button{
        margin-top: 30px;
        width: 48%;
        height: 30px;
        line-height: 30px;
        border-radius: 2px;
        border: 1px solid #42b983;
        background-color: #fff;
    }
    .btn1{
        margin-right: 4%;
    }
    .active{
        color: #fff;
        background-color: #42b983 !important;
    }
</style>
