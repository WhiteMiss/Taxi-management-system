<template>
  <!-- <el-table
    :data="tableData"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="id"
      label="id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="物品名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="支付状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="for"
      label="需要积分"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="handleDelete(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table> -->
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="id"
      label="id"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="物品名称"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="province"
      label="兑换状态"
      :formatter="formatter">
    </el-table-column>
     <el-table-column
      prop="for"
      label="兑换积分"
      :formatter="formatter">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
    // ,
    // handleDelete (index, row) {
    //   console.log(index, row)
    //   let that = this
    //   this.$request.fetchDelOrder({
    //     id: row.id
    //   }).then(response => {
    //     console.log(response)
    //     that.$message({
    //       showClose: true,
    //       message: response.data.message,
    //       type: "success"
    //     })
    //     that.getList({
    //       currentPage: that.currentPage,
    //       pageSize: 10,
    //       sort: null
    //     })
    //   })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  },
  data () {
    return {
      tableData: [{
        id: "0",
        name: "双肩包",
        province: "已支付",
        for: "55.0"
        // order_id: "2021022212345601",
        // order_type: "wechat",
        // order_price: "",
        // order_name: "",
        // pay_status: "",
      }, {
        id: "1",
        name: "水壶1",
        province: "已支付",
        for: "50.0"
      }]
    }
  }
}
</script>
