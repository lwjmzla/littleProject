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
// 新增短评
export const reqAddComment = (book_id, content) => ajax('/book/add/short_comment', { book_id, content }, 'POST')
// 书籍搜索
export const getBookSearch = (obj) => ajax('/book/search', {
  start: obj.start || 0, // 开始记录数
  count: obj.count || 20, // 记录条数
  summary: obj.summary || 0, // 0为完整内容,1为简介
  q: obj.q, // 搜索内容 必填
})
// 获取热搜关键字
export const getBookHotKeyword = () => ajax('/book/hot_keyword')