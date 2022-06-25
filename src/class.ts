import { moveCursor } from "readline";

class car<T> {
  car_name: T;
  car_age: number;
  car_option?: string;
  readonly car_sec: string;

  constructor(car_name: T, car_age: number) {
    this.car_name = car_name;
    this.car_age = car_age;
    this.car_sec = "秘密";
  }

  isAdult(): boolean {
    return this.car_age >= 20;
  }

  setAge(newAge: number) {
    this.car_age = newAge;
  }
}

const move = new car<string>("move", 18);
console.log(move.car_name);
console.log(move.car_age);
console.log(move.car_option);

console.log(move.isAdult());
move.setAge(20);
console.log(move.isAdult());
