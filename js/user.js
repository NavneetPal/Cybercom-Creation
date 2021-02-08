showUsers();

//To display the admin name
const adminName=document.querySelector('#adminName');
const admin_deserialized=JSON.parse(localStorage.getItem('admin'));
adminName.innerText=`Hello, ${admin_deserialized.name}`;

//Eventlistener for adding the user to the localStorage
const userForm=document.querySelector('#userForm');
userForm.addEventListener('submit',function(e){
    e.preventDefault();
    let name=userForm.elements.name.value;
    let email=userForm.elements.email.value;
    let password=userForm.elements.password.value;
    let birthdate=userForm.elements.birthdate.value;
    let age=getAge(birthdate);

    const user={
        name:name,
        email:email,
        password:password,
        birthdate:birthdate,
        age:age
    }

    let users=localStorage.getItem('users');
    if(users==null){
        usersObj=[];
    }else{
        usersObj=JSON.parse(localStorage.getItem('users'));
    }

    usersObj.push(user);
    localStorage.setItem('users',JSON.stringify(usersObj));
    userForm.elements.name.value='';
    userForm.elements.email.value='';
    userForm.elements.password.value='';
    userForm.elements.birthdate.value='';
    showUsers();
})

//function to show all the user from the localStorage
function showUsers(){
    let users=localStorage.getItem('users');
    if(users==null){
        usersObj=[];
    }else{
        usersObj=JSON.parse(localStorage.getItem('users'));
    }

    let html='';
    usersObj.forEach(function(user,index){
        html+=`
        <tr>
        <td>${user.name}</td>
        <td><a href="#">${user.email}</a></td>
        <td>${user.password}</td>
        <td>${user.birthdate}</td>
        <td>${user.age}</td>
        <td><a href="#" id="${index}" onclick="updateUser(this.id)" class="edit">Edit</a>&nbsp;&nbsp;<a href="#" id="${index}" onclick="deleteUser(this.id)" class="delete">Delete</a></td>
        </tr> 
        `
    })

    const tbody=document.querySelector('#tbody');
    if(usersObj.length!=0){
        tbody.innerHTML=html;
    }else{
        tbody.innerHTML=``;
    }
}


//function to delete a User
function deleteUser(index){
    let users=localStorage.getItem('users');
    if(users==null){
        usersObj=[];
    }else{
        usersObj=JSON.parse(users);
    }

    usersObj.splice(index,1);
    localStorage.setItem('users',JSON.stringify(usersObj));
    showUsers();
}

//function to update user
function updateUser(index){
    let users=localStorage.getItem('users');
    if(users==null){
        usersObj=[];
    }else{
        usersObj=JSON.parse(users);
    }
    document.querySelector('#name').value=usersObj[index].name;
    document.querySelector('#email').value=usersObj[index].email;
    document.querySelector('#password').value=usersObj[index].password;
    document.querySelector('#birthdate').value=usersObj[index].birthdate;

        const btn1=document.querySelector('#btn1');
        const btn2=document.querySelector('#btn2');
        btn1.style.display='none';
        btn2.style.display="block"; 
    
    btn2.addEventListener('click',function(){
        usersObj[index].name=document.querySelector('#name').value;
        usersObj[index].email=document.querySelector('#email').value;
        usersObj[index].password=document.querySelector('#password').value;
        usersObj[index].birthdate=document.querySelector('#birthdate').value;
        localStorage.setItem('users',JSON.stringify(usersObj));
        showUsers();
        btn1.style.display='block';
        btn2.style.display="none"; 
        document.querySelector('#name').value='';
        document.querySelector('#email').value='';
        document.querySelector('#password').value='';
        document.querySelector('#birthdate').value='';
    })
}










//function to get the age of user out of dateofbirth
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
} 