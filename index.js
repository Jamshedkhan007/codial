const express=require('express');
const app=express();
const port=8000;
const expressLayout=require('express-ejs-layouts');

// use express layouts
app.use(expressLayout);

// extract style and script form sub pages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use assests folder
app.use(express.static('./assests'))

// use express router
app.use('/',require('./routes'));


// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error Found in running the server : ${err}`);
    }
    console.log(`Server Running on port : ${port}`);
})