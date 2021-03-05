/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2021-01-2
 * Description: 文件描述
 */
const db = require("../database/db")
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize
  const Demander = db.defineModel(app, "Demander", {
    name: STRING,
    des: STRING,
    role: STRING,
    role_id: STRING,
  })
  return Demander
}
