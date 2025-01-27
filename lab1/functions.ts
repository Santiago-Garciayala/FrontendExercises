//returns length of string
function f1(str: string): number {
  return str.length;
}

//returns length of string minus leading & trailing whitespace
function f2(str: string): number {
  return str.trim().length;
}

//can do both the things from above
function f3(str: string, trimFlag: boolean): number {
  return trimFlag ? str.trim().length : str.length;
}

//test cases
console.log(f1("bogos binted"));
console.log(f2("  bogos binted  "));
console.log(f3("  bogos binted  ", false));
console.log(f3("bogos binted", false));
