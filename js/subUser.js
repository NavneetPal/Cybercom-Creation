

const userName=document.querySelector('#userName');
const subUser_deserialized=JSON.parse(localStorage.getItem('subUser'));

userName.innerText=`Hello, ${subUser_deserialized.name}`;