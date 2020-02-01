String.prototype.IndexOf=function(str1,n){//n为起始位置
  let i;//循环变量
  let len1=str1.length;//子串长度
  let len2=this.length;//父串长度
  if(n==undefined ||n==null||n<=-1) {//没有传入起始位置时，从第一位开始
      i=0;
  }else if(n>len2-1){//如果起始位置大于字符串最后一位，返回-1，不存在
      return -1; 
  }else{//如果不存在上述2种情况，从第n位开始
      i=n;
  }
  if(len1>len2){//如果子串长大于父串，那么肯定不存在，返回-1
      return -1;
  }else if(len1==len2){//如果相等，就对比2个字符串的内容
      if(str1==this){//如果内容相等，那么就是从第一位开始，返回0
          return 0;
      }else{//长度相等，内容不相等，那么肯定不存在啦
          return -1;
      }
  }else{
      let str21='';
      while(i<len2){
       //拼合对比的父串，i到len1
       str21=this.substr(i,len1);//每次都拿出和子串长度一样的字符串去对比
       if(str21==str1){
          return i;//这里返回的就是第一次子串出现的位置，符合indexOf
       }
       i++;
      }
      if(i==len2){//如果循环到父串最后一位还是没有出现相等，那么就是-1不存在
          return -1;
      }
  }
}



var a = 'sdsdddfdet';
console.log(a.IndexOf('et'))