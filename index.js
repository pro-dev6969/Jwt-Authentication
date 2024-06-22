const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const jwtpassword = '123456';

const app = express();

const ALL_USERS = [
    {
    "username": "Vedant",
    "password": "123",
    "email": "ved123@gmail.com",
},
{
    "username": "Anjali",
    "password": "123456",
    "email": "anj123@gmail.com",
},
{
    "username": "Aranya",
    "password": "abcdef",
    "email": "aryan123@gmail.com",
}
]

app.use(express.json());
// app.use(bodyParser.json());

function checkUser(username,password){
    
}
app.post('/signin', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    // if(!checkUser(username,password)){
    //     res.status(403).send('user not in db');
    //     return ;
        
    // }

    // var token = jwt.sign({username:username},jwtpassword);
    //     return res.json({
    //         token,
    //     });
});

app.get('/user',(req,res)=>{
    
});

app.listen(3000,(req,res)=>{
    console.log('server up and running on 3000');
})