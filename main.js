

//------Lab Two----------//

// -------function 1 ----------- //

function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(10, 10));


//------funcation 2 ----------//


function pro(num1, num2){
    return num1 - num2;
}
console.log(pro(10, 5));



// -------funcation 3 -------//


function mul(num3, num4){
    return num3 * num4;
}
console.log(mul(10, 5));



//----function 4 ------//

function sum(num1, num2){
    return num1 / num2;
}
console.log(sum(30, 5));



//-----funcation array on the lab two-------//

let funArray = [1, 2 , 3 , 4, 5 ,6 ,7 , 8 ,9 ,10 ,11, 12 ,13 ,14 ,15 ,16 , 17 , 18 , 19 , 20];

function evenNumber (funArray)
 {
    return funArray.filter(number => number % 2 === 0);
  }
  console.log(evenNumber(funArray))


  function oddNumbers(funArray) {
    return funArray.filter(number => number % 2 !== 0);
  }
console.log(oddNumbers(funArray))
  

//-------lab one -----//



 let characters  = [

 ["mashael" , "149" , "Famle", "55", "eye color black"],
 ["Ali" , "170" , "male", "60", "blue"],
 ["malak", "120" , "famele" , "19" , "eye color black"],
 ];

//-----start map ----//


 let allNames = characters.map(function(na){
    return na[0];
 });

 console.log(allNames);


 let allHight= characters.map(function(Hight){
    return Hight[1];
 });

 console.log(allHight);


 //----end map----//

//-----reduce ------// 

  let totalHeight = characters.reduce((all, item) =>{
    return all + item[1];
  },0)
  
  console.log(totalHeight);

//-----filter-----//


let hightFilter = characters.filter(function(hight) {


    return hight[1] < 200;
});

console.log(hightFilter);



let genderFilter = characters.filter(function(gender) {


    return gender[2] === "male";
});

console.log(genderFilter);


//----Sort-----//

let massslow = characters.sort(function(a , b){
    return a[3]- b[3];
 });

 console.log(massslow);


 let low = characters.sort(function(a , b){
    return a[1]- b[1];
 });

 console.log(low);




//-----end sort-----//

//----start Every -----//


let massevery = characters.every(function(a){
    return a[3] > 40;
 });

 console.log( massevery );


 
let  heightEver = characters.every(function(c){
    return c[1]  <200 ;
 });

 console.log( heightEver);



//----end every---//


//-----start Some ----//

let  eyeColor = characters.some(function(a){
    return a[4] === "blue" ;
 });

 console.log(eyeColor);


 
 let  tellar1 = characters.some(function(a){
    return a[1] > 210 ;
 });

 console.log(tellar1);


//---end some----//




//--------Lab Three ---------//

characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];
  
// ------ Q1------//
let colorEye = characters.find(function(colors)
{
return colors.eye_color ===  "blue";
}) .name; 
console.log(colorEye);

//------Q2------//

let firstGender = characters.find(function(gender)
{
return gender.mass ===  190;
}) .name; 
console.log(firstGender);


// -------Q3-------//
let heightLess = characters.filter(function(hightle) {
    return hightle.height < 200;
});
console.log(heightLess);


// -------Q4------//

let allMall = characters.filter(function(mall) {
    return mall.gender === "male";
});
console.log(allMall);

//-------Q5------//

let allNamess = characters.map(function(nam){
    return nam.name ;
 });

 console.log(allNamess);


//-----Q6------//
let hightes = characters.map(function(hi){
    return hi.height ;
 });

 console.log(hightes);


 //-----Q7-----//

//Sort//


let masslow = characters.sort(function(a , b){
    return a.mass- b.mass;
 });

 console.log(masslow);


//----Q8-----//

let highttttlow = characters.sort(function(a , b){
    return a. height - b. height;
 });

 console.log(highttttlow);


//------Q9-----//

let massss = characters.every(function(a){
    return a.mass > 40;
 });

 console.log( massss);


//------Q10-----//

let  heightEvery = characters.every(function(a){
    return a. height <200 ;
 });

 console.log( heightEvery);

//------Q11------//

let  eye = characters.some(function(a){
    return a.eye_color === "blue" ;
 });

 console.log(eye);


 //-----Q12----//

 let  tellar = characters.some(function(a){
    return a. height >210 ;
 });

 console.log(tellar);