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
    tr+="<td>" + name + "</td>"+ "<td><a href='#'>" + email + "</a></td>"+ "<td>" + password + "</td>"+ "<td>" + birthdate + "</td>"+ "<td>" + 23 + "</td> "+ "<td><a href='#' class='edit'>Edit</a>&nbsp;&nbsp;<a href='#' class='delete'>Delete</a></td>"+"</tr>"; 
    tbody.innerHTML += tr; 

    user_deserialized.push(user);
   localStorage.setItem("users",JSON.stringify(user_deserialized)); 
})

const edits=document.querySelectorAll('.edit');
const deletedata=document.querySelectorAll('.delete');

for(let edit of edits){
    edit.addEventListener('click',function(){
        const btn=document.querySelector('#btn1');
        btn.innerText='Update User';
        const data=edit.parentElement.parentElement;
        document.querySelector('#name').value=data.querySelector('.name').innerText;
        document.querySelector('#email').value=data.querySelector('.email').innerText;
        document.querySelector('#password').value=data.querySelector('.password').innerText;
        document.querySelector('#birthdate').value=data.querySelector('.birthdate').innerText;

        btn.addEventListener('click',function(){
            data.querySelector('.name').innerText=document.querySelector('#name').value;
            data.querySelector('.email').innerText=document.querySelector('#email').value;
            data.querySelector('.password').innerText=document.querySelector('#password').value;
            data.querySelector('.birthdate').innerText=document.querySelector('#birthdate').value
        })

       
    })
}


for(let data of deletedata){
    data.addEventListener('click',function(){
        data.parentElement.parentElement.remove();
    })
}

