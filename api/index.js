import ajax from './ajax.js'

// ---------------   期刊   ---------------------
// demo  export const getClassicLatest = () => ajax('/classic/latest', {xx:xx}, 'POST')
// 获取最新一期
export const getClassicLatest = () => ajax('/classic/latest')
// 进行点赞
export const reqLike = (art_id, type) => ajax('/like', { art_id, type }, 'POST')
// 取消点赞
export const reqLikeCancel = (art_id, type) => ajax('/like/cancel', { art_id, type }, 'POST')
// 获取当前一期的上一期
export const getClassicPrevious = (index) => ajax('/classic/' + index + '/previous')
// 获取当前一期的下一期
export const getClassicNext = (index) => ajax('/classic/' + index + '/next')