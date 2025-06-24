//arithmetic
let a =10;
let b=5;
console.log("arthimetic");
console.log("a=",a,"b=",b);
let sum = a+b;
let difference =a-b;
let product =a*b;
let quotient=a/b;
let remainder=a%b;
let exponent=a**b;
console.log("arthimetic");
console.log("sum:",sum);
console.log("difference:",difference);
console.log("product:",product);
console.log("quotient:",quotient);
console.log("remainder:",remainder);
console.log("exponent:",exponent);

//assignemnt operatotrs
let x=10;
x +=5;
x -=3;
x *=2;
x /=5;
x %=3;
console.log("assignemnt");
console.log("x after qassignemtns:",x);
console.log("/n");

//comparsion
let isEqual =(a == b);
let isStrictEqual =( a === b);
let isNotEqual =(a != b);
let isStrictNotEqual =(a !== b);
let isGreaterThan =(a > b);
let isLessthan =(a < b);
let isGreaterThenOrEqual=(a >= b);
let islessthenOrEqual =(a <= b);
console.log("Is Equal:",isEqual);
console.log("Is Strict Equal:",isStrictEqual);
console.log("Is Not Equal:",isNotEqual);
console.log("Is Strict NOt Equal:",isStrictNotEqual);
console.log("Is Greater Then:",isGreaterThan);
console.log("Is Less Then:",isLessthan);
console.log("Greater Then Or Equal:",isGreaterThenOrEqual);
console.log("Less Then Or Equal:",islessthenOrEqual);

//logical
let andOperator=(a > 0 && b > 0);
let orOperator=( a> 0 || b < 0);
let notOperator=!(a < b);
console.log("logical");
console.log("and:",andOperator);
console.log("or:",orOperator);
console.log("not:",notOperator);

//bitwise
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor =a ^ b;
let bitwiseNot = ~a;
let leftShift = a << 1;
let rightShift = a >> 1;
console.log("bitwise");
console.log("and:",bitwiseAnd);
console.log("or:",bitwiseOr);
console.log("xor",bitwiseXor);
console.log("not:",bitwiseNot);
console.log("leftshift:",leftShift);
console.log("rightshift:",rightShift);

//ternary operators
let age= 18;
let eligibility =(age >=18) ?"eligible to vote": "not eligible to vote";
console.log("ternay operators");
console.log("eligibility:",eligibility)

//Typeof operstors
let variableType=typeof a;
console.log("types of operators");
console.log("types of variables 'a':",variableType);
console.log("\n");
