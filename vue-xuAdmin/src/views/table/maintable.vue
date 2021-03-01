<template>
    <div>
      <p class="title"><i class="el-icon-tickets"></i>最新6条等待处理订单</p>
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          sortable
          prop="odd"
          label="订单号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="收货人">
        </el-table-column>
        <!-- <el-table-column
          prop="status"
          label="积分状态"
          width="130">
        </el-table-column> -->
        <el-table-column
          prop="amount"
          label="积分">
        </el-table-column>
        <el-table-column
          prop="date"
          label="下单时间"
          sortable
          :filters="[{text: '2018-01-01', value: '2018-01-01'}, {text: '2018-01-02', value: '2018-01-02'}, {text: '2018-01-03', value: '2018-01-03'}, {text: '2018-01-04', value: '2018-01-04'}, {text: '2018-01-05', value: '2018-01-05'}]"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="tag"
          label="订单分类"
          width="150"
          :filters="[{ text: '已完成', value: '已完成' }, { text: '进行中', value: '进行中' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '已完成' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">详情</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: "maintable",
  data () {
    return {
      tableData: [{
        odd: "2021022212345601",
        name: "王小虎",

        amount: "580分",
        date: "2021-02-22",
        tag: "已完成"
      }, {
        odd: "2021022212345602",
        name: "王小",

        amount: "130分",
        date: "2021-02-22",
        tag: "进行中"
      }, {
        odd: "2021022212345603",
        name: "小虎",

        amount: "680分",
        date: "2021-02-22",
        tag: "已完成"
      }, {
        odd: "2021022212345604",
        name: "王三",

        amount: "190分",
        date: "2021-02-22",
        tag: "进行中"
      }, {
        odd: "201801012345605",
        name: "王五",

        amount: "170分",
        date: "2018-01-04",
        tag: "已完成"
      }, {
        odd: "201801012345606",
        name: "王虎",

        amount: "670分",
        date: "2018-01-04",
        tag: "已完成"
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
      this.$message({
        showClose: true,
        message: index,
        row,
        type: "success"
      })
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.$message({
        showClose: true,
        message: index,
        row,
        type: "success"
      })
    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column["property"]
      return row[property] === value
    }
  }
}
</script>

<style scoped>

</style>
