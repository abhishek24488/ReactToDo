var person =['MIshra',27];
var person2= ['Mama', 26];

function addName(name,age){
    return "Hi" +" "+name + "!!you are" + age;
}
console.log(addName(...person2));
console.log(addName(...person));
// Hi abhsihek you are 27

var names= ['anup','kslaye','prashant'];
var final = ['lipakshi', ...names];

final.forEach(function(name) {
    console.log("Hi"+" "+ name);
}, this);