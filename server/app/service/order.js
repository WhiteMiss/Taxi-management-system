/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2021-01-18
 * Description: 文件描述
 */
const Service = require("egg").Service

class orderService extends Service {


  // 删除
  async delOrder (aId) {
    let results
    await this.ctx.model.Order.destroy({
      where: {
        id: aId,
      },
    }).then(res => {
      console.log(res)
      if (res > 0) {
        results = {
          code: 200,
          message: "删除成功",
        }
      } else {
        results = {
          code: 10000,
          message: "删除失败",
        }
      }
    }).catch(error => {
      console.log(error)
      results = {
        code: 10000,
        message: error,
      }
    })
    return results
  }
}

module.exports = orderService
