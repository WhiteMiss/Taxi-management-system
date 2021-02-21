/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2020/2/22
 * Description: 文件描述
 */
const modulesFiles = require.context("./apis", true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules = Object.assign(modules, value.default)
  return modules
}, {})

export default modules
