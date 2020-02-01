function idnexOf(a, b) {
  var reg = new RegExp(`${b}`, 'gi');
  var c = reg.exec(a);
  console.log(c ? c.index : -1)
}

var a = 'abcdefghijkl'
b = 'jkl'
idnexOf(a, b)



