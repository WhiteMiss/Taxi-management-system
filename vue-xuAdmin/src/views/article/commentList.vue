<template>
  <div>
    <el-table
      :data="commentData"
      style="width: 100%"
      max-height="550">
      <el-table-column
        fixed
        prop="created_at"
        label="投诉时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="article_id"
        label="所属帖子">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
      <el-table-column
        prop="author_name"
        label="评论人"
        width="150">
      </el-table-column>
      <el-table-column
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="currentChange"
      @prev-click="currentChange"
      @next-click="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "commentList",
  data () {
    return {
      total: 0,
      currentPage: 1,
      sort: null,
      commentData: [

      ]
    }
  },
  methods: {
    handleDelete (index, row) {
      console.log(index, row)
      let that = this
      this.$request.fetchDelComment({
        id: row.id
      }).then(response => {
        console.log(response)
        that.$message({
          showClose: true,
          message: response.data.message,
          type: "success"
        })
        that.getList({
          currentPage: that.currentPage,
          pageSize: 10
        })
      })
        .catch(err => {
          console.log(err)
        })
    },
    currentChange (page) {
      console.log(page)
      this.currentPage = page
      this.getList({
        currentPage: page,
        pageSize: 10
      })
    },
    getList (postdata) {
      let that = this
      this.$request.fetchCommentList(postdata)
        .then(function (response) {
          for (let i = 0; i < response.data.rows.length; i++) {
            let d = new Date(response.data.rows[i].createdAt)
            let moth = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)
            let date = d.getDate() < 10 ? "0" + d.getDate() : d.getDate()
            let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
            let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
            let seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
            response.data.rows[i].createdAt = d.getFullYear() + "-" + moth + "-" + date + " " + hours + ":" + minutes + ":" + seconds

            if (response.data.rows[i].content.length > 22) {
              response.data.rows[i].content = response.data.rows[i].content.substring(0, 22) + "..."
            }
            // if (response.data.rows[i].article_title.length > 22) {
            //   response.data.rows[i].article_title = response.data.rows[i].article_title.substring(0, 22) + "..."
            // }
          }

          // console.log(response)
          // console.log(postdata)
          that.total = response.data.count
          that.commentData = response.data.rows
          console.log(postdata)
          console.log(response.data.rows)
        })
        // .catch(function (error) {
        //   console.log(error)
        // })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.getList({
      currentPage: 1,
      pageSize: 10
    })
  }
}
</script>

<style scoped>

</style>
