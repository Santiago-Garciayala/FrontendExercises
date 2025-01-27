//returns length of string
function f1(str) {
    return str.length;
}
//returns length of string minus leading & trailing whitespace
function f2(str) {
    return str.trim().length;
}
//can do both the things from above
function f3(str, trimFlag) {
    return trimFlag ? str.trim().length : str.length;
}
//test cases
console.log(f1("bogos binted"));
console.log(f2("  bogos binted  "));
console.log(f3("  bogos binted  ", false));
console.log(f3("bogos binted", false));
