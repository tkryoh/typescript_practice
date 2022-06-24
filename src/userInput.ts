import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください:', (line) => {
  // 文字列が入力されるとここが実行される
  // console.log(`${line}が入力されました`);
  // const result = line + 1000; // 文字列
  // console.log(result);
  const num = Number(line); // 文字列を数値型に変換
  console.log(num + 1000);
  rl.close();
});
