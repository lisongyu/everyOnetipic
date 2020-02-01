Array.prototype.indexof = function (searchElement, fromIndex) {
  var len = this.length;
  if (!fromIndex) {
    fromIndex = 0;
  }
  if (fromIndex < 0) {
    fromIndex=len-1
  }
  //循环遍历searchElement是否与组内的元素相等
  for (var i = fromIndex; i < len; i++){
    if (searchElement === this[i]) {
      return i
    }
  }
  return -1
}