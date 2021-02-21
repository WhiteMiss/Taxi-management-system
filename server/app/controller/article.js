/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2019-03-18
 * Description: 文件描述
 */
// eslint-disable-next-line strict
const Controller = require("../core/base_controller")

class ArticleController extends Controller {
  // 发表文章
  async addArticle () {
    let result = {}
    const articleData = this.ctx.request.body
    // articleData.id = articleData.id ? articleData.id: null
    articleData.author = this.ctx.session.user.id
    const articleResult = await this.ctx.service.article.seaveOrUpArticle(articleData)
    if (articleResult) {
      result = {
        code: 200,
        message: "文章发布成功",
      }
    } else {
      result = {
        code: 10000,
        message: "文章发布失败,请重试",
      }
    }
    this.ctx.body = result
  }

  // 富文本上传图片
  async uploadImg () {
    const imgurl = await this.ctx.helper.uploadImg()
    this.ctx.body = { errno: 0, data: [ imgurl ] }
  }

  // 查询文章列表
  async articleList () {
    const getListData = this.ctx.request.body
    const list = await this.ctx.service.article.articleList(getListData)

    this.ctx.body = list
  }

  // 文章回显
  async getArticle () {
    const id = this.ctx.request.body.id
    const result = await this.ctx.service.article.getArticle(id)

    this.ctx.body = result
  }

  // 删除文章
  async delArticle () {
    const id = this.ctx.request.body.id
    const result = await this.ctx.service.article.delArticle(id)
    this.ctx.body = result
  }

}

module.exports = ArticleController
