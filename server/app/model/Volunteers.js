/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2021-01-2
 * Description: 文件描述
 */
const db = require("../database/db")
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize
  const Volunteers = db.defineModel(app, "Volunteers", {
    name: STRING,
    des: STRING,
    role: STRING,
  })
  return Volunteers
}
