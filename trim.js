let str = 'a d sdfd sdds';
function trim(str) {
  let reg = /\s+/ig
  str=str.replace(reg,'')

  return str
  
}

console.log(trim(str))