export {};

// _________________
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let number: number[] = [1, 2, 3, 4, 5];
let string: string[] = ["ad", "ac", "be"];
let person: [string, number, boolean] = ["lal", 20, true];
enum colors {
  red,
  gree,
  blue,
}
let favColor = colors.red;
let dynamicValue: any = 30;
let unknown: unknown = true;
function names(params: string): number {
  return 123;
}
function throwError(message: string): never {
  throw new Error();
}
function logMessage(message: string): void {
  console.log(123);
}

interface person {
  name: string;
  age: number;
  isActive: boolean;
}
let personObj: person = {
  name: "",
  age: 10,
  isActive: false,
};
