import {UsersService} from "../services/users.service.js";

export class UsersController{
    static getprofile = async(req,res)=>{
        try {
            const userEmail = req.user.email;
            const user = await UsersService.getUserByEmail(userEmail);
            res.json({status:"success",data:user});
        } catch (error) {
            res.status(500).json({status:"error", message:error.message});
        }
    };
}