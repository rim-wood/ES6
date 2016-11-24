import 'babel-polyfill';
//解构赋值,参数与值一一对应就能被赋值
let [a,b,c] = [1,2,3];
let [d,[e,[f]]] = [1,[2,[3]]];
let [head,...tail] = [1,2,3,4];
console.log(a+"--"+b+"--"+c);//1--2--3
console.log(c+"--"+d+"--"+e);//1--2--3
console.log(head+"--"+tail);//1--2,3,4
//解构不成功则为undefined
let [g] = [];
console.log(g);//undefined
//不完全解构
let [h,[i],j] = [1,[2,3],4];
console.log(h+"--"+i+"--"+j);//1--2--4

//事实上，只要具有Iterator接口，都可采用数组形式的解构赋值
function* fibs(){
  let a = 0;
  let b = 1;
  while (true){
    yield a;
    [a, b] = [b, a + b];
  }
}
let [one, tow, three, four, fifw, six, seven, eight, nine] = fibs();
console.log(seven); //8
