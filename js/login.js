const loginForm=document.querySelector('#loginForm');

loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    const email=loginForm.elements.email.value;
    const password=loginForm.elements.password.value;

    let admin_deserialized=JSON.parse(localStorage.getItem('admin'));
    if(email===admin_deserialized.email && password==admin_deserialized.password){
        window.location = "dashboard.html"
    }
})