/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2021/1/20
 * Description: 文件描述
 */
import axios from "../axios"
import roleUrls from "../urls/role"

export default {
  // 获取权限列表
  fetchGetRoleList () {
    return axios.post(roleUrls.getRoleList)
  },
  // 增加角色
  fetchAddRole (data) {
    return axios.post(roleUrls.addRole, data)
  },
  // 删除角色
  fetchDelRole (data) {
    return axios.post(roleUrls.delRole, data)
  },
  // 分配角色权限
  fetchRolePermissions (data) {
    return axios.post(roleUrls.rolePermissions, data)
  },
  // 查询角色的所有权限
  fetchSearchRolePermissions (data) {
    return axios.post(roleUrls.searchRolePermissions, data)
  }
}

