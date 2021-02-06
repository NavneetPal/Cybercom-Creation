const adminForm=document.querySelector('#adminForm');
const registerBtn=document.querySelector('#registerBtn');



const users=[];
let user_serialized=JSON.stringify(users);
localStorage.setItem("users",user_serialized);


adminForm.addEventListener('submit',function(e){
    e.preventDefault();
    const name=adminForm.elements.name.value;
    const email=adminForm.elements.email.value;
    const password=adminForm.elements.password.value;
    const confirmPassword=adminForm.elements.confirmPassword.value;
    const city=adminForm.elements.city.value;
    const state=adminForm.elements.state.value;

    if(password===confirmPassword){
        let admin={
            name:name,
            email:email,
            password:password,
            city:city,
            state:state
        }
        if(localStorage.getItem('admin')){
            alert("Admin already registered");
        }else{
            let admin_serialized=JSON.stringify(admin);
            localStorage.setItem("admin",admin_serialized);
            registerBtn.style.display="none"
            console.log(admin);
            window.location = "login.html"
        }
        
    }else{
        document.querySelector('#warning').style.display="block";
    }
})