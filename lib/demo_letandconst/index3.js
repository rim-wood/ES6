"use strict";

/*const声明一个只读的常量，一旦定义不可修改，也是块级作用域*/
var PI = 3.1415926;
console.log(PI);
//const PI;
//未初始化会报错
//PI = 3;
//赋值会报错

/*当用const定义对象或数组时，对象地址是不可修改的，但对象本身可以修改*/
var foo = {};
foo.asd = "123";
//foo = {"123"}; 报错
var a = [];
a.push('Hello'); // 可执行
a.length = 0; // 可执行
//a = ['Dave'];    // 报错