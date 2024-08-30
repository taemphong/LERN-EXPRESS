const express = require('express');
const path = require('path')
const app = express();
const users = require('./Users.js');

const logger = (req, res, next) => {
    console.log('Hello!');
    next();
}

//init middleware
app.use(logger); 

//get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

//set static users
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('sever is running  '));