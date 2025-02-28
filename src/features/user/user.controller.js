import UserModel from "./user.model.js";
import  jwt  from "jsonwebtoken";

export default class UserController{

    postSignup(req, res) {
        const {name, email, password} = req.body
        const user = UserModel.singUp(name, email, password);
            if(user) {
                res.status(200).send(user);
            } else {
                res.status(500).send("Something went wrong");
        }
    }

    getUser(req,res){
        const user = UserModel.getall();
        res.status(200).send(user);
    }

    postSignin(req,res){
        const {email, password} = req.body
        const userToAuthenticate = UserModel.login(email, password);
        // console.log("userAuth", userToAuthenticate);
        if(!userToAuthenticate) {
            res.status(401).send("user not found please register again");
        }else if(userToAuthenticate?.email === email && userToAuthenticate?.password === password) {
            const token = jwt.sign({
                userID :userToAuthenticate.id, email :userToAuthenticate.email},
                "taraIn!123j%6j##$G",
                {expiresIn : '1h'}
            );
            res.status(200)
            .cookie("jwt-token", token,  { maxAge: 900000, httpOnly: false })
            .cookie("userId", userToAuthenticate.id, { maxAge: 900000, httpOnly: false })
            .send({user: userToAuthenticate, token});
        }else{
           res.status(401).send("Invalid credentials");
        }
    }

    
}