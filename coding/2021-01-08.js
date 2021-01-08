
/**** BAIC DATATYPE OF JAVASCRIPT:Number,String ,Boolean,Null ,Undefined *****/

//Note: In Js we follow camelCasing for variable name and for constant vaiable the variable name should be capital
//1.String
let firstName="Nakul"
let lastName="Pal"

let fullName=firstName+' '+lastName

console.log('The username is:'+fullName);

//2.Number

let salary=10000
let bonus=5000

let totalsalary=salary+bonus

//console.log(fullName+' got a total salary of:'+totalsalary);

//can be rewritten as so from now onward i will be using this ${variable-name} enclosed in ` `
console.log(`${fullName} got a total salary of: ${totalsalary}`);

//3.Boolean
//Boolean can only have two value: true or false
let isMarried=false         //if you write False you will get error
let isAuthenticated=true
let isLoggedIn=true

console.log(`${fullName} is married : ${isMarried}`);
console.log(`${fullName} is authenticated : ${isAuthenticated}`);
console.log(`${fullName} is married : ${isLoggedIn}`);

//let see the boolean in if-else case

if(isLoggedIn){
    console.log('User is logged in');
}else{
    console.log('User is not logged in');
}

//4.Null and undefined
//Undefined-Variables that are declared but not initialized are undefined
let adminName;

console.log(adminName); //you will get undefined bcz it is not initialize

adminName='Navneet'
console.log(adminName);
//Null-null is explicitly nothing
adminName=null
console.log(adminName);


/************************Datatype over here*********************
 ***********************lets start the typeof to know the type of variable***/


 let name="nakul"
 let marks=100
 let isHonest=true
 let salaryEarned
 let won=null
 
 console.log(typeof name);  //string
 console.log(typeof marks);  //number
 console.log(typeof isHonest);   //boolean
 console.log(typeof salaryEarned);  //undefined
 console.log(typeof won);    //output will not be null it will be a object

 console.log(typeof(name)==='string');
 console.log(typeof(marks)==='number');
 console.log(typeof(isHonest)==='boolean');
 console.log(typeof(salaryEarned)==='undefined');
 console.log(typeof(won)==='object');



 /**Coercion and Variable mutation */

 let salary='ten thousand'

 console.log(typeof salary);

 salary=10000       ///here salary type which is string get converted to number type(Coercion) 

 console.log(typeof salary);

 let childName, childBornYear, isIndian ;

 childName="Nakul"
 childBornYear=2000
 isIndian=true

 console.log(`${childName} is born in year ${childBornYear} and is Indian:${isIndian}`);
 
 childName="Navneet"    //we can rename the childname again
 childBornYear=1999
 isIndian=true

 console.log(`${childName} is born in year ${childBornYear} and is Indian:${isIndian}`);

 childName="Michael"
 childBornYear=1978
 isIndian=false

 console.log(`${childName} is born in year ${childBornYear} and is Indian:${isIndian}`);


 /*************CODING CHALLENGE ******************/

let markMass=40
let johnMass=50

let johnHeight=6
let markHeight=5

let isMarkHigherBmi= markMass/(markHeight**2) >johnMass/(johnHeight**2);

console.log(`Is Marks BMI higher than Johns ? ${isMarkHigherBmi}`)

/*************************CODING CALLENGE 2**********************/

let johnScore=[89,95,103];
let mikeScore=[89,95,103];
let maryScore=[89,97,103];

let johnAverage,mikeAverage,maryAverage;

johnAverage=(johnScore[0]+johnScore[1]+johnScore[2])/3;
mikeAverage=(mikeScore[0]+mikeScore[1]+mikeScore[2])/3;
maryAverage=(maryScore[0]+maryScore[1]+maryScore[2])/3;

if(johnAverage>mikeAverage && johnAverage>maryAverage)
   console.log(`John wins the match and the average score is: ${johnAverage}`);
else if(mikeAverage>johnAverage && mikeAverage>maryAverage)
   console.log(`Mike wins the match and the average score is: ${mikeAverage}`);
else if(maryAverage>johnAverage && maryAverage>mikeAverage)
   console.log(`Mary wins the match and the average score is: ${maryAverage}`);
else
 console.log(`Either any two avgScore or all the three avgScore are equal`);


