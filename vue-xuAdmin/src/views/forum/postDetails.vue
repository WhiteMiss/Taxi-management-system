<template>
  <div>
    <div class="box">
      <div>
        <!-- <h3>{{ info.title }}</h3>
      <p>{{ info.content }}</p> -->
        <el-row>
          <el-col
            :span="24"
            v-for="(o, index) in 1"
            :key="o"
            :offset="index > 0 ? 1 : 0"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img src="@/assets/details/001.jpg" class="image" />
              <div style="padding: 14px">
                <span
                  ><h3>{{ info.title }}</h3></span
                >
                <p>{{ info.content }}</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button
                    type="text"
                    class="button"
                    @click.native="showToggle"
                    >回复</el-button
                  >
                </div>
                <!-- 输入框 -->
                <div v-show="isShow">
                  <h3>发表评论</h3>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入内容"
                    v-model="textarea"
                  >
                  </el-input>
                  <button
                    type="primary"
                    style="margin-left: 9px; width: 100px"
                    plain
                    @click="adddetail()"
                    >发表</button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px">
                <span><h3>评论列表</h3></span>
                <div class="demo-type">
                  <div style="width: 40px">
                    <el-avatar
                      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    ></el-avatar>
                    <h6 style="text-align: center">谢浩</h6>
                  </div>
                </div>
                <div style="margin:0px 60px">斑驳的夜色撞进了少年的心房，古木下秋千晃荡，破败的栅栏围着原野。我聆听着风的吟唱。指尖轻划过野草，张开双手风与我撞了满怀。静谧的夜笼罩着苍穹，点点星光映照着苍茫大道，抬眸望一片星海灿烂，望一片前途无量</div>
               <div>
                <ul  class="box">
            <li v-for="(item,index) in detailList" :key="index"  @click="choose(index)" :class="{active: index == current && current !== ''}">
                <div>
                    <p>{{item.textarea}}</p>
                </div>
            </li>
        </ul>
        </div>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button
                    type="text"
                    class="button"
                    @click.native="showToggle"
                    >回复</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="btn" @click="back()">返回</div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js"
export default {
  data () {
    return {
      currentDate: new Date(),
      isShow: false,
      textarea: ""
    }
  },
  name: "Info",
  computed: {
    info () {
      return store.state.lists[store.state.index]
    },
    detailList () {
      return store.state.detaillists
    }
  },
  methods: {
    back () {
      this.$router.push("/forumindex")
    },
    showToggle () {
      this.isShow = !this.isShow
      console.log(this.isShow)
    },
    adddetail () {
      store.commit("addDetail", {
        textarea: this.textarea
      })
      this.textarea = ""
    }
  }
}
</script>

<style scoped>
.box {
  margin: 20px 5%;
}
.box div {
  /*border: 1px solid #ccc;*/
  border-radius: 2px;
  line-height: 30px;
  /* margin: 20px 0; */
  padding: 10px;
}
.box h3 {
  border-bottom: 1px solid #ccc;
  height: 30px;
}
.btn {
  height: 30px;
  background-color: #42b983;
  color: #fff;
  border-radius: 2px;
  text-align: center;
  margin: 0 30px;
}
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
  clear: both;
}
</style>
