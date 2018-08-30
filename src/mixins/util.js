import wepy from 'wepy'
// function getPublicData() {
//   var globalData = wepy.$instance.globalData
//   var access_token = wepy.getStorageSync('loginInfo').access_token ||''
//   var publicStr='?language='+globalData.language+'&platform='+globalData.platform+'&access_token='+access_token
//   console.log('公共参数获取')
//   return publicStr
// }
function clearStorageData(){
  //订单确认页 confirmOrder
  wepy.removeStorageSync('invoice')//清除发票信息
  wepy.removeStorageSync('addr_id')//清除所选地址id
  //团购详情页 groupDetails
  wepy.removeStorageSync('imglist')//详情页存储的介绍信息

}
module.exports = {
  // getPublicData:getPublicData
  clearStorageData:clearStorageData
}
