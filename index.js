const express = require('express');
const app =express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const courses = require('./data/courses.json');
const details = require('./data/details.json');

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})



// Dynamic Routing Server Side
app.get('/details/:id', (req, res)=>{
    const id = req.params.id;
    const selectedDetails = details.find(detail => detail.id == id);
    // console.log(req.params.id);
    res.send(selectedDetails)
})

// Dynamic Routing and category sorting
app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    // console.log(id);
    const selectedCategory = details.filter(detail => detail.category === id);
    res.send(selectedCategory)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})