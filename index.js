const express=require('express');
const app=express();
const port=8000;



app.listen(port,function(err){
    if(err){
        console.log(`Error Found in running the server : ${err}`);
    }
    console.log(`Server Running on port : ${port}`);
})