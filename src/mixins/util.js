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
//时间戳转时间格式==开始
function getMyDate(str){
  var oDate = new Date(str*1000),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth()+1,
    oDay = oDate.getDate(),
    oHour = oDate.getHours(),
    oMin = oDate.getMinutes(),
    oSen = oDate.getSeconds(),
    oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间
  return oTime;
};
function getzf(num){//补0操作
  if(parseInt(num) < 10){
    num = '0'+num;
  }
  return num;
}
//时间戳转时间格式==结束
//强制保留两位小数
function toDecimal2(x) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x * 100) / 100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}
module.exports = {
  // getPublicData:getPublicData
  clearStorageData:clearStorageData,
  getMyDate:getMyDate,
  toDecimal2:toDecimal2
}
