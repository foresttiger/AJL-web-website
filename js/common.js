// 判断是否为手机号  
function isPoneAvailable(pone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(pone)) {
        return false;
    } else {
        return true;
    }
}
// 判断是否为电话号码  
function isTelAvailable(tel) {
    var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (!myreg.test(tel)) {
        return false;
    } else {
        return true;
    }
}
// 判断是否为面积  
function isAreaAvailable(area) {
  // ^[0-9]+(.[0-9]{1,3})?$
    var myreg = /[1-9]+[0-9]{1,2}?$/;
    if (!myreg.test(area)) {
        return false;
    } else {
        return true;
    }
}
/*包含中文*/
function isChineseChar(str){   
   var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
   return reg.test(str);
}