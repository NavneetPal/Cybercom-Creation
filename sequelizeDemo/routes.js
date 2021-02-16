const express=require('express');
const router=express.Router();
const {Sequelize,Model,DataTypes}=require('sequelize');



//Connection with mysql database
const sequelize=new Sequelize('demo','root','nakulpal619',{
    host:'localhost',
    dialect:'mysql'
});

//check database connection
sequelize.authenticate()
.then(()=>{
    console.log('Connection has been established successfully.');
})
.catch((err)=>{
    console.error('Unable to connect to the database:', err.message);
})

//create model => First way to create models in sequelize
const User = sequelize.define("user", {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING
    },
    rollNo:{
        type:DataTypes.INTEGER
    },
    status:{
        type:DataTypes.ENUM('1','0'),
        defaultValue:'1'
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt:{
        type:DataTypes.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
    }
  },{
      modelName:'User',
      timestamps:false 
  }); 


  const Employee = sequelize.define("employee", {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    firstname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact_number:{
        type:DataTypes.STRING,
        allowNull:false
    },
    alternate_contact_number:{
        type:DataTypes.STRING
    },
    designation:{
        type:DataTypes.STRING,
        allowNull:false
    },
    years_of_experience:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    joining_date:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    current_address:{
        type:DataTypes.STRING,
    },
    city:{
        type:DataTypes.STRING,
    },
    state:{
        type:DataTypes.STRING,
    },
    pincode:{
        type:DataTypes.INTEGER,
    },
    pan_number:{
        type:DataTypes.STRING,
        allowNull:false
    },
    adhar_number:{
        type:DataTypes.STRING,
        allowNull:false
    },
    passport_number:{
        type:DataTypes.STRING
    }
  },{
      modelName:'Employee',
      timestamps:false 
  }); 

//Synnc Model
(async()=>{
  await User.sync();
})(); 



router.post('/user',(req,res)=>{

    /* User.create({
        name:'Navneet Pal',
        email:'nav@gmail.com',
        rollNo:54,
        status:1
    }).then(()=>{
        res.status(200).json({
            status:1,
            message:"User has been created successfully"
        })
    }).catch(err=>{
        console.log(err.message);
    }) */

    User.create(req.body)
    .then(()=>{
        res.status(200).json({
            status:1,
            message:"User has been created successfully"
        })
    })
    .catch((err)=>{
        console.log(err.message);
    })

})
 

//bulk create method()
router.post('/bulk-user',(req,res)=>{

    User.bulkCreate([
        {
            name:'User1',
            email:'user1@gmail.com',
            rollNo:51,
            status:1
        },
        {
            name:'User2',
            email:'user2@gmail.com',
            rollNo:52,
            status:1
        },
        {
            name:'User3',
            email:'user3@gmail.com',
            rollNo:53,
            status:1
        },
        {
            name:'User4',
            email:'user4@gmail.com',
            rollNo:54,
            status:1
        },
        {
            name:'User5',
            email:'user5@gmail.com',
            rollNo:55,
            status:1
        }
    ])
    .then(()=>{
        res.status(200).json({
            status:1,
            message:"user has benn created successfully"
        })
    })
    .catch(err=>{
        console.log(err);
    })

});

//get all user
router.get('/users',(req,res)=>{
    User.findAll({
        where:{
            status:"1",
            name:'User1'
        }
    })
    .then(users=>{
        res.status(200).json({
            status:1,
            message:"All User found",
            data:users
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

//Update api method
router.put("/user",(req,res)=>{
    const{name,email,rollNo,id}=req.body;
    User.update({
        email:email,
        name:name,
        rollNo:rollNo,
    },{
        where:{
            id:id
        }
    })
    .then(()=>{
        res.status(200).json({
            status:1,
            message:"User updated sucessfully"
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:0,
            message:"Failed to update user",
            data:err
        })
    })
})

//delete api method
router.delete('/user/:id',(req,res)=>{
    const {id}=req.params;
    User.destroy({
        where:{
            id:id
        }
    })
    .then(()=>{
        res.status(200).json({
            status:1,
            message:"User deleted successfully"
        });
    })
    .catch(err=>{
        res.status(500).json({
            status:0,
            message:"Failed to delete user",
            data:err
        })
    })
})

//raw query to select the data
router.get("/user-raw",(req,res)=>{
    //select
    sequelize.query('select * from users',{
        type:sequelize.QueryTypes.SELECT
    })
    .then((users)=>{
        res.status(200).json({
            status:1,
            message:"Users Found",
            data:users
        })
    })
    .catch(err=>{
        console.log(err);
    })
})
//raw query to update the data
router.put('/user-update-raw',(req,res)=>{
    sequelize.query(`update users set name="${req.body.name}",email="${req.body.email}" where id=${req.body.id}`,{
        type:sequelize.QueryTypes.UPDATE
    })
    .then(()=>{
        res.status(200).json({
            status:1,
            message:"Users updated sucessfully"
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

//raw query to delete the data
router.delete('/user-delete-raw/:id',(req,res)=>{
    sequelize.query(`delete from  users where id=${req.params.id}`,{
        type:sequelize.QueryTypes.DELETE
    })
    .then(()=>{
        res.status(200).json({
            status:1,
            message:"Users deleted successfully"
        })
    })
    .catch(err=>{
        console.log(err);
    })
})


//to add an employee to the database
router.post('/employee',(req,res)=>{
    const{firstname,lastname,email,contact_number,designation,years_of_experience,joining_date,pan_number,adhar_number}=req.body;
    
    console.log("helloo hello"+firstname);

    if(firstname.trim() && lastname.trim() && email.trim() && contact_number.trim() && designation.trim() && years_of_experience.trim() && joining_date.trim() && pan_number.trim() && adhar_number.trim()){
        Employee.create(req.body)
        .then(()=>{
            console.log("Employee created successfully");
            res.status(200).json({
                status:1,
                message:"Employee Created successfully"
            })
        })
        .catch(err=>{
            console.log("Employees is unable to be created");
            res.status(500).json({
                status:1,
                message:"Unable to create employee",
                data:err
            })
        })
    }
    else{
        res.json({
            status:0,
            message:"Please fill out the required field"
        })
    }
})


//Homepage
router.get('/',(req,res)=>{
    res.status(200).json({
        name:'Navneet',
        college:'gec modasa'
    });
})


module.exports=router;