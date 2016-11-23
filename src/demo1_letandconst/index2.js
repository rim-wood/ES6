/*利用let的代码块特性，下面程序就是一个闭包函数
  a[5]() ====> 5
  a[6]() ====> 6
*/
const a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[5]();
a[6]();
/*
  平常var的写法，就是一个普通函数
  b[5]() ====> 10
  b[6]() ====> 10
*/
var b = [];
for(var j = 0; j < 10; j++){
  b[j] = function () {
    console.log(j);
  };
}
b[5]();
b[6]();
