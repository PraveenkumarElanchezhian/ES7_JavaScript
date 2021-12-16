// Exponentiation operator --> ** 

let base = 2;
let exponent = 3;
   console.log('using Math.pow() => ',Math.pow(base,exponent));
   console.log('using exponentiation operator ** =>',base**exponent);

// Array includes --> Array.includes(value) || Array.includes(value,start_index)

let array = [1,2,3,4,5]
// checked by value
if (array.includes(1)){ 
    console.log("If the given value is there in the array") ;
}
else {
    console.log("If the given value is not there in the array");
}

// checked by value and index
if (array.includes(1,0)){
    console.log("If the given value is there in the array") ;
}
else {
    console.log("If the given value is not there in the array");
}

//check Not a Number(NaN) in an array
console.log([NaN].includes(NaN))

//create an object array
let user1 = {name1 : 'Praveen'};
user2 = {name2 : 'kumar'};
user3 = {name3 : 'Aravind'};
let user = [user1,user2]
console.log(user.includes(user1));
console.log(user.includes(user3));