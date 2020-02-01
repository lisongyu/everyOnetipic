var name = 'user_name_id';
var name1 = 'user_name_id';

function toCamelCase(name) {
  //正则
  let getArr = name.split('_');
  let getResult = getArr.map(v => {
    return v.charAt(0).toUpperCase() + v.slice(1)
  }).join('')
  return getResult

}

function toCamelCaseReg(str) {
  //正则
  str = str.replace(/_(\w)/g, (match, $1) => `${$1.toUpperCase()}`)

  return str.substr(0, 1).toUpperCase() + str.substr(1);


}

console.log(toCamelCase(name))
console.log(toCamelCaseReg(name1))