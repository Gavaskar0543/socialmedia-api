const User  = require('../../../model/userData');

module.exports.signup =async function(req,res){
    if(req.body.password != req.body.confirmpassword){
        console.log('password and cpassword mismatch');
        return;
    }
    const user = await User.findOne({email:req.body.eamil});
    if(!user){
    
   newUser = await User.create(req.body);
   console.log('user created successfully!')
   return res.json(200,{
    message:"user created",
   data:newUser
})
    }
    return res.json(200,{
        message:'user Already exists'
    })
}

module.exports.signin = async function(req,res){
    const checkUser = await User.findOne({email:req.body.email});
    if(checkUser){
      if(req.body.password != checkUser.password){
          console.log('password mismatch');
          return;
      }
        return res.json(200,{
            message:'sign in successfully',
            data:checkUser
        })
            
    }
}



