/**
 * Created by WebStorm.
 * User: xiehao
 * Date: 2021/1/20
 * Description: 文件描述
 */
import axios from "../axios"
import orderUrls from "../urls/order"

export default {

  // 删除
  fetchDelOrder (data) {
    return axios.post(orderUrls.delComment, data)
  }

}
