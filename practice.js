//array declaration
var myName = 'Mizanur Rahman';
var fruitsName = ['mango', 'lichie', 'jackfruit', 'berry'];
var numbers = [2, 5, 7, 8];

// array index 
var secondFruit = fruitsName[1];
var fruitIndex = fruitsName.indexOf('mango');

// push pop shift unshift concat
fruitsName.push('mamla');
numbers.pop();
fruitsName.shift();//for removing first index element
fruitsName.unshift('khalato' , 'fufato');
var mergeBoth = fruitsName.concat(numbers); //merging two strings

// comparison 
console.log(1 > 1);
console.log(1 < 1);
console.log(1 == 1);
console.log(1 >= 1);
console.log(1 <= 1);
console.log(1 != 1);

// nested multiple conditions 
var gotJob = false;
var salaryAmount = 45000;
var hasFlat = true;
var isMarried = false;

if((gotJob == true && salaryAmount > 20000) && isMarried == false){
    console.log('Biya korar shomoy hoise');
}
else if(hasFlat == true && salaryAmount > 35000){
    if(isMarried == false){
        console.log('polar boyosh hoise taratari biya koray daw');
    }
}
else{
    console.log('tui joggo na');
}