// module.exports.home=function(req,res){
//     return res.end('<h1>This Is Jamshed Khan!</h1>');
// }
// module.exports.About=function(req,res){
//     return res.end('<h1>My Server Is working Fine In codial!</h1>');
// }


module.exports.home=function(req,res){
    return res.render('home',{
        title:"home"
    });
}