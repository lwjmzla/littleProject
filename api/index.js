import ajax from './ajax.js'

// ---------------   期刊   ---------------------
// demo  export const getClassicLatest = () => ajax('/classic/latest', {xx:xx}, 'POST')
// 获取最新一期
export const getClassicLatest = () => ajax('/classic/latest')