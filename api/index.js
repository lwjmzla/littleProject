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
// 获取热门书籍(概要)
export const getBookHotList = () => ajax('/book/hot_list')
// 获取书籍详细信息
export const getBookDetail = (id) => ajax(`/book/${id}/detail`)
// 获取书籍点赞情况
export const getBookFavor = (id) => ajax(`/book/${id}/favor`)
// 获取书籍短评
export const getBookComment = (id) => ajax(`/book/${id}/short_comment`)