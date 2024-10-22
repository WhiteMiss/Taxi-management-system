/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2021-02-08
 * Description: 文件描述
 */
module.exports = () => {
  return async function (ctx, next) {
    const ver = await ctx.helper.verifyToken()
    if (ver) {
      await next()
    }
  }
}
