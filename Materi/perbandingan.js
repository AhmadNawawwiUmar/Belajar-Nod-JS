//equals
var num = 100;
console.log(num == 100);//true
console.log(num == 20);//false

//not equals
var sifat = "rajin";
console.log(sifat != "Malas");//true
console.log(sifat != "bandel");//true

//strict equals
var num = 8;
console.log(num == "8"); //true, padahal "8" adalah string
console.log(num === "8");//false, karena tipe data nya beda
console.log(num === 8);//true

//not strict equals
var num = 11;
console.log(num != "11");//false, padahal "11" adalah string
console.log(num !== "11");//true, karena tipe data nya beda
console.log(num !== 11);//false

var number = 17;
console.log(number < 20); //true
console.log(number > 17); //true
console.log(number >= 17); //true
console.log(number <= 20); //true