<template>
  <div>
    <el-alert
      title="紧急预案提示"
      type="warning"
      description="行程平台全程监控，保证安全，有事可拨打热线12345678901"
      show-icon
    >
    </el-alert>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="card kjfs">
          <p class="title"><i class="fa fa-th-large fa-lg"></i>快捷方式</p>
          <ul>
            <li>
              <router-link to="/addArticleEditor" class="kjfs kjfs-bluee"
                ><span><i class="el-icon-tickets fa-2x"></i></span
                ><span>发起订单</span></router-link
              >
            </li>
            <li>
              <router-link to="/articleList" class="kjfs kjfs-pinkk"
                ><span><i class="fa fa-hand-stop-o fa-2x"></i></span
                ><span>订单列表</span></router-link
              >
            </li>
            <li>
              <router-link to="/roleManage" class="kjfs kjfs-yelloww"
                ><span><i class="fa fa-universal-access fa-2x"></i></span
                ><span>权限测试</span></router-link
              >
            </li>
          </ul>
          <ul>
            <li @click="drawer1 = true">
              <router-link to="" class="kjfs kjfs-grennn"
                ><span><i class="el-icon-location-information fa-2x"></i></span
                ><span>当前位置 </span></router-link
              >
            </li>
            <el-drawer
              title="地图"
              :visible.sync="drawer1"
              :with-header="false"
            >
             <div class="amap-page-container">
    <div :style="{width:'100%',height:'300px'}">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
    </div>


    <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
      <span v-else>正在定位</span>
    </div>
    <div
      v-on:click="req_post()"
    >
      查询周边
    </div>
  </div>
            </el-drawer>
            <!-- <li><router-link to="/navClassifies" class="kjfs kjfs-purplee"><span><i class="fa el-icon-menu fa-2x"></i></span><span>查看日历</span></router-link></li> -->
            <li @click="drawer = true">
              <router-link to="" class="kjfs kjfs-purplee"
                ><span><i class="fa el-icon-menu fa-2x"></i></span
                ><span>查看日历</span></router-link
              >
            </li>
            <el-drawer
              title="我是标题"
              :visible.sync="drawer"
              :with-header="false"
            >
              <el-calendar v-model="value"> </el-calendar>
            </el-drawer>
            <li>
              <router-link to="/markdown" class="kjfs kjfs-lightBluee"
                ><span><i class="fa fa-file-code-o fa-2x"></i></span
                ><span>编辑器</span></router-link
              >
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card dbsx">
          <p class="title"><i class="fa fa-file-text-o"></i>待办事项</p>
          <ul>
            <li>
              <router-link to="#"
                ><span>待审评论</span><span class="num">23</span></router-link
              >
            </li>
            <li>
              <router-link to="#"
                ><span>待审帖子</span><span class="num">0</span></router-link
              >
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="#"
                ><span>待审订单</span><span class="num">2</span></router-link
              >
            </li>
            <li>
              <router-link to="#"
                ><span>待审事故</span><span class="num">01</span></router-link
              >
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card bbxx">
          <p class="title"><i class="fa fa-server"></i>版本信息</p>
          <div class="table">
            <p><span class="tit">当前版本</span>v1.0.0</p>
            <p>
              <span class="tit">基于框架</span>vue2.0+element+es6+egg
            </p>
            <p>
              <span class="tit">主要特色</span>为志愿者车主以及需求者提供平台
            </p>
            <p>
              <span class="tit">反馈渠道</span>
              <span class="gitbox"> www.xie-hao.xyz </span>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <line-echarts
          id="lineEcharts"
          height="300px"
          ref="echarts"
        ></line-echarts>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <maintable id="maintable"></maintable>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineEcharts from "../../components/ECharts/lineEcharts"
import Maintable from "../table/maintable"
// import { AMapManager } from 'vue-amap';
// eslint-disable-next-line no-undef

export default {
  name: "mainIndex",
  components: { Maintable, LineEcharts },
  data () {
    const self = this
    return {
      drawer: false,
      drawer1: false,
      value: new Date(),

      // 地图
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [{
        enableHighAccuracy: true, // 是否使用高精度定位，默认:true
        timeout: 100, // 超过10秒后停止定位，默认：无穷大
        maximumAge: 0, // 定位结果缓存0毫秒，默认：0
        convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true, // 显示定位按钮，默认：true
        buttonPosition: "RB", // 定位按钮停靠位置，默认：'LB'，左下角
        showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
        extensions: "all",
        pName: "Geolocation",
        events: {
          init (o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              console.log(result)
              if (result && result.position) {
                self.lng = result.position.lng
                self.lat = result.position.lat
                self.center = [self.lng, self.lat]
                self.loaded = true
                self.$nextTick()
              }
            })
          }
        }
      }]


    }
  },
  mounted () {
    this.selfAdaption()
  },
  methods: {


    // echart自适应
    selfAdaption () {
      let that = this
      setTimeout(() => {
        window.onresize = function () {
          if (that.$refs.echarts) {
            that.$refs.echarts.chart.resize()
          }
        }
      }, 10)
    }
  }
}
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
$pinkk: #eec2d3;
$bluee: #409eff;
$yelloww: #f4d884;
$grennn: #89dda0;
$purplee: #78a2ea;
$lightBluee: #b8d6ff;

$list: bluee pinkk yelloww grennn purplee lightBluee;
$list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
%shadow {
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  .title {
    font-size: 14px;
    padding: 10px;
    i {
      margin-#{$right}: 5px;
    }
  }
}

@mixin flex($direction: row, $content: space-between) {
  display: flex;
  flex-direction: $direction;
  justify-content: $content;
}
.card {
  color: #666;
  @extend %shadow;

  ul {
    @include flex;
    li {
      flex: 1;
      a {
        color: #666666;
        align-items: center;
        padding-#{$top}: 20px;
        padding-#{$bottom}: 20px;
        @include flex(column);
        span {
          height: 44px;
        }
        .num {
          line-height: 44px;
          font-size: 42px;
          color: $bluee;
          margin: 0px;
        }
      }
      .kjfs-bluee {
        color: $bluee;
      }
      .kjfs-pinkk {
        color: $pinkk;
      }
      .kjfs-yelloww {
        color: $yelloww;
      }
      .kjfs-grennn {
        color: $grennn;
      }
      .kjfs-purplee {
        color: $purplee;
      }
      .kjfs-lightBluee {
        color: $lightBluee;
      }
      &:hover {
        .kjfs-bluee {
          color: #ffffff;
          background: $bluee;
        }
        .kjfs-pinkk {
          color: #ffffff;
          background: $pinkk;
        }
        .kjfs-yelloww {
          color: #ffffff;
          background: $yelloww;
        }
        .kjfs-grennn {
          color: #ffffff;
          background: $grennn;
        }
        .kjfs-purplee {
          color: #ffffff;
          background: $purplee;
        }
        .kjfs-lightBluee {
          color: #ffffff;
          background: $lightBluee;
        }
      }
    }
  }
  .table {
    padding: 21px;
    p {
      height: 52px;
      line-height: 52px;
      border: 1px solid #cccccc;
      overflow: hidden;
      border-#{$top}: none;
      @include flex(null, start);
      &:first-child {
        border-#{$top}: 1px solid #cccccc;
      }
      span {
      }
      .tit {
        width: 90px;
        min-width: 90px;
        height: 100%;
        text-align: center;
        border-#{$right}: 1px solid #cccccc;
        margin-#{$right}: 18px;
      }
      span.gitbox {
        flex: 1;
        height: 100%;
        overflow: hidden;
        @include flex(row, start);
        a {
          &:first-child {
            margin-#{$right}: 30px;
          }
        }
      }
    }
  }
}
#lineEcharts {
  margin-#{$top}: 30px;
  padding-#{$top}: 30px;
  @extend %shadow;
}
#maintable {
  margin-#{$top}: 30px;
  padding-#{$top}: 10px;
  @extend %shadow;
}
//地图
   .map {
        width: 100%;
        height: 400px;
    }
</style>
