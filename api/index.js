import ajax from './ajax.js'

// ---------------   期刊   ---------------------
// demo  export const getClassicLatest = () => ajax('/classic/latest', {xx:xx}, 'POST')
// 获取最新一期
export const getClassicLatest = () => ajax('/classic/latest')
// 进行点赞
export const reqLike = (art_id, type) => ajax('/like', { art_id, type }, 'POST')
// 取消点赞
export const reqLikeCancel = (art_id, type) => ajax('/like/cancel', { art_id, type }, 'POST')