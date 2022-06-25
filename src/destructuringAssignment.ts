const [a, b] = [1, 2];
console.log(a);
console.log(b);

const obj = {
  foo: "test",
  bar: 20,
};

const { foo, bar } = obj;
console.log(foo);
console.log(bar);

const nested = {
  num: 123,
  obj2: {
    aaa: "hello",
    bbb: "world",
  }
}

const { num, obj2: { aaa }} = nested;
console.log(num);
// console.log(obj2);
console.log(aaa);

const obj3 = {
  arr: [0, 1, 2]
}

const { arr: [arrItem] } = obj3;
console.log(arrItem);

const names = [{ kana: "kana", mei: "mei" }, { kana: "kana2", mei: "mei2" }];
const [{ kana }] = names;
console.log(kana); // names[0].kanaが分割代入される

const [, i2, i3] = [0, 1, 2]; // 一つ目の要素をスキップ
console.log(i2);
console.log(i3);

type Obj = { tel?: number };
const test1: Obj = {};
const test2: Obj = { tel: -1234 };
const { tel = 500 } = test1;
const { tel: tel2 = 500 } = test2;
console.log(tel);
console.log(tel2);

const obj4 = {
  n1: 123,
  n2: "string",
  n3: false,
}

const { n1, ...restObj } = obj4;
console.log(n1);
console.log(restObj); // n1以外の残りが入る
