const express = require('express');
const app =express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const courses = require('./data/courses.json');

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})