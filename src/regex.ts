const r = /ab+c/;
console.log(r.test("abbbc"));
console.log(r.test("Hello, abc world!"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは"));

const r2 = /^abc/;
console.log(r2.test("abcdefg"));
console.log(r2.test("Heelo, abcdefg"));

console.log("Hello, abbbbbbc world abbc".replace(/ab+c/, "foobar"));
console.log("Hello, abbbbbbc world abbc".replace(/ab+c/g, "foobar"));

const result = "Hello, abbbbbc world! abc".match(/a(b+)c/);
if (result !== null) {
  console.log(result[0]);
  console.log(result[1]); // キャプチャリンググループで指定した値だけがまとめられる
}

const result2 = "Hello, abbbbbc world abc".match(/a(?<worldName>b+)c/);
if (result2 !== null) {
  console.log(result2.groups);
}
