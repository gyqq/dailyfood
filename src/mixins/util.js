import wepy from 'wepy'
function getPublicData() {
  var globalData = wepy.$instance.globalData
  var access_token = wepy.getStorageSync('loginInfo').access_token ||''
  var publicStr='?language='+globalData.language+'&platform='+globalData.platform+'&access_token='+access_token
  console.log('公共参数获取')
  return publicStr
}
module.exports = {
  getPublicData:getPublicData
}
