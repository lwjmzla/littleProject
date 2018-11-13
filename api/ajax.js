/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import { BASE_URL, appkey, codeTips } from '../config.js'
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    const header = {
      'content-type': 'application/json',
      'appkey': appkey
    }
    wx.request({
      url: BASE_URL + url,
      data,
      method: type,
      header,
      success: (res) => {
        const codeStr = res.statusCode.toString()
        if (codeStr.startsWith('2')) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: codeTips[res.data.error_code],
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
