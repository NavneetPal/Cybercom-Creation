const loginForm=document.querySelector('#loginForm');


const users=[];
let user_serialized=JSON.stringify(users);
localStorage.setItem("users",user_serialized);


loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    const email=loginForm.elements.email.value;
    const password=loginForm.elements.password.value;

    let admin_deserialized=JSON.parse(localStorage.getItem('admin'));
    if(email===admin_deserialized.email && password==admin_deserialized.password){
        window.location = "dashboard.html"
    }
})