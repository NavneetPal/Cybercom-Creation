const adminName=document.querySelector('#adminName');
const admin_deserialized=JSON.parse(localStorage.getItem('admin'));

adminName.innerText=`Hello, ${admin_deserialized.name}`