const adminName=document.querySelector('#adminName');
const admin_deserialized=JSON.parse(localStorage.getItem('admin'));

adminName.innerText=`Hello, ${admin_deserialized.name}`



const lessthan18=document.querySelector('#lessthan18');
const between=document.querySelector('#between');
const morethan50=document.querySelector('#morethan50');

let a=0;
let b=0;
let c=0;

const user_deserialized=JSON.parse(localStorage.getItem('users'));

for(let i=0;i<user_deserialized.length;i++){
    if (user_deserialized[i].age<18){
        a++;
    }
    if(user_deserialized[i].age>=18 && user_deserialized[i].age<=50){
        b++;
    }
    if(user_deserialized[i].age>50){
        c++;
    }
}

lessthan18.innerText=`${a} Users`;
between.innerText=`${b} Users`;
morethan50.innerText=`${c} Users`