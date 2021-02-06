const userForm=document.querySelector('#userForm');
const user_deserialized=JSON.parse(localStorage.getItem('users'));


const adminName=document.querySelector('#adminName');
const admin_deserialized=JSON.parse(localStorage.getItem('admin'));
adminName.innerText=`Hello, ${admin_deserialized.name}`

userForm.addEventListener('submit',function(e){
    e.preventDefault();
    const name=userForm.elements.name.value;
    const email=userForm.elements.email.value;
    const password=userForm.elements.password.value;
    const birthdate=userForm.elements.birthdate.value;

    const user={
        name:name,
        email:email,
        password:password,
        birthdate:birthdate
    };

    const tbody = document.getElementById('tbody');
    let tr="<tr>";
    tr+="<td>" + name + "</td>"+ "<td><a href='#'>" + email + "</a></td>"+ "<td>" + password + "</td>"+ "<td>" + birthdate + "</td>"+ "<td>" + 23 + "</td> "+ "<td><a href='#' id='edit'>Edit</a>&nbsp;&nbsp;<a href='#' id='delete'>Delete</a></td>"+"</tr>"; 
    tbody.innerHTML += tr; 

    user_deserialized.push(user);
   localStorage.setItem("users",JSON.stringify(user_deserialized)); 
})