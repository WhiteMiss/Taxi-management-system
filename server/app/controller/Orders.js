/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2021/2/8
 * Description: 文件描述
 */
// eslint-disable-next-line strict
const Controller = require("../core/base_controller")

class OrderController extends Controller {


  // 删除
  async delOrder () {
    const id = this.ctx.request.body.id
    const result = await this.ctx.service.article.delOrder(id)
    this.ctx.body = result
  }

}

module.exports = OrderController
