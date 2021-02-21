/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2019-03-18
 * Description: 文件描述
 */
const Controller = require("../core/base_controller")

class CommentController extends Controller {
  // 发表评论
  async addComment () {
    let result = {}
    const commentData = this.ctx.request.body
    commentData.author_id = this.ctx.session.user.id
    const commentResult = await this.ctx.service.comment.addComment(commentData)
    if (commentResult) {
      result = {
        code: 200,
        message: "评论成功",
      }
    } else {
      result = {
        code: 10000,
        message: "评论失败,请重试",
      }
    }
    this.ctx.body = result
  }

  // 回复评论
  async replyComment () {
    let result = {}
    const replyData = this.ctx.request.body
    replyData.from_user_id = this.ctx.session.user.id
    const replyResult = await this.ctx.service.comment.replyComment(replyData)
    if (replyResult) {
      result = {
        code: 200,
        message: "回复成功",
      }
    } else {
      result = {
        code: 10000,
        message: "回复失败,请重试",
      }
    }
    this.ctx.body = result

  }

  // 评论列表
  async commentList () {
    const getListData = this.ctx.request.body
    const list = await this.ctx.service.comment.commentList(getListData)

    this.ctx.body = list
  }

  // 删除评论
  async delComment () {
    const id = this.ctx.request.body.id
    const result = await this.ctx.service.comment.delComment(id)
    this.ctx.body = result
  }

}
module.exports = CommentController
