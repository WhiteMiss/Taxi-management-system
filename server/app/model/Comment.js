/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2021-03-1
 * Description: 文件描述
 */
const db = require("../database/db")

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize

  const Comment = db.defineModel(app, "comments", {
    content: { type: TEXT("long"), allowNull: false }, // 评论内容
    author_id: {
      type: STRING,
      allowNull: false,
    }, // 角色id
    author_name: {
      type: STRING,
      allowNull: false,
    }, // 角色id
    article_id: {
      type: STRING,
      allowNull: false,
    }, // 文章id
    praise_num: {
      type: INTEGER,
      defaultValue: 0,
    }, //  点赞数
    // author: {
    //   type: STRING,
    //   allowNull: false,
    // },
    // title: { type: STRING, allowNull: false },
  })

  return Comment
}
