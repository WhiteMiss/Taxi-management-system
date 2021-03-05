<template>
  <el-table
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
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  },
  data () {
    return {
      tableData: [{
        id: "0",
        name: "双肩包",
        province: "已支付",
        for: "55.0"
       
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
