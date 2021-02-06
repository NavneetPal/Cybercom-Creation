const userForm=document.querySelector('#userForm');



const adminName=document.querySelector('#adminName');
const admin_deserialized=JSON.parse(localStorage.getItem('admin'));
adminName.innerText=`Hello, ${admin_deserialized.name}`

userForm.addEventListener('submit',function(e){
    e.preventDefault();
    const name=userForm.elements.name.value;
    const email=userForm.elements.email.value;
    const password=userForm.elements.password.value;
    const birthdate=userForm.elements.birthdate.value;

    const user=[{
        name:name,
        email:email,
        password:password,
        birthdate:birthdate
    }];

    const tbody = document.getElementById('tbody');
    let tr="<tr>";
    tr+="<td>" + name + "</td>"+ "<td>" + email + "</td>"+ "<td>" + password + "</td>"+ "<td>" + birthdate + "</td>"+ "<td>" + 23 + "</td> "+ "<td><a href='#'>" + Edit +"</a>&nbsp;&nbsp;<a href='#'>"+Delete+"</a></td>"+"</tr>"; 
    tbody.innerHTML += tr;

    const users=[];
    let user_serialized=JSON.stringify(user);

    localStorage.setItem("user",user_serialized);
})