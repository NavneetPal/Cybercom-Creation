const loginForm=document.querySelector('#loginForm');

const user_deserialized=JSON.parse(localStorage.getItem('users'));



loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    const email=loginForm.elements.email.value;
    const password=loginForm.elements.password.value;

    let admin_deserialized=JSON.parse(localStorage.getItem('admin'));
    if(email===admin_deserialized.email && password==admin_deserialized.password){
        window.location = "dashboard.html"
    }

    for(let i=0;i<user_deserialized.length;i++){
        if(user_deserialized[i].email===email && user_deserialized[i].password===password){
            let subUser=user_deserialized[i];
            let subUser_serialized=JSON.stringify(subUser);
            localStorage.setItem('subUser',subUser_serialized);
            window.location="sub-user.html";
        }
    }

})