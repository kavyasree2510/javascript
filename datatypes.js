//data types in js

//1.primitive types
//number: represents both integer and float no.
//boolean:represents a logical entity and can have to values:true or false
//string:represent a sequence of characters
//undefined:a variable that has been declared but not assigned a value
//null:reprents the intentional absence of any object value
//symbol:a unique and imutable primtive value, often used as object propertykeys
//bigint:represents integer with arbitary precision,useful for large integers

//2.non primitive data types
//object:a collection of properities,where each property is a key-value pair
//array:a special type of object used to store ordered collection of values
//function:

//primitive data types
let number=111;
let string="kavya sree";
let boolean= true;
let undefined;
let nullvar=null;
let symbolVar=Symbol("unique");
let bigIntVar=BigInt(123456789123456789);

let objectVar={key:"value"};
let arrayVar=[1,2,3,4,5];
let functionVar=function(){return "I am Sindhu"};
let object2={
    name: "kavya sree",
    age:20,
    isEmployed:true,
    hobbies:["reading","sleeping","eating"],
}
console.log("Number:",number);
console.log("String:",string);
console.log("boolean:",boolean);
console.log("undefined:",undefined);
console.log("nullVar:",nullvar);
console.log("SymbolVar:",symbolVar);
console.log("bigInt:",bigIntVar);
console.log("ObjectVar:",objectVar);
console.log("arrayVar:",arrayVar);
console.log("functionVar:",functionVar);
console.log("object2:",object2);

