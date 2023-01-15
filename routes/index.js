const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');


console.log("Its Working now");

router.get('/',homeController.home);
// router.get('/about',homeController.About);
router.use('/user',require('./user'));
router.use('/box',require('./box'));


// for any further routes access from her
// router.use('/routername',require('./routerfile))



module.exports=router;