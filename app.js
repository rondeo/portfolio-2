const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine','hbs');

app.use('/public',express.static('public'));


app.get('/', (req,res) =>{

    res.render('index.hbs');
    
});

app.get('*', (req,res) =>{

    res.render('404.hbs');
    
});

app.listen(3000, ()=> {

    console.log('App is listening to port 3000');
});
