// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongodb";
import UserModel from "../../models/User";

const  handler = async (req, res) => {
	if (req.method === "GET"){
		const users = await UserModel.find()
		return res.json({
			users
		})
	}else if (req.method ==="POST"){

		const newUser = new UserModel({ ...req.body })
		newUser.save()
		.then(() => {
			return  res.json({
				success:true,
				msg:"User added successfully",

			})
		})
		.catch((err)=> {
			console.log(err)
			return res.json({
				msg:"An unexpected error occurred",
				success:true
			})
		})
	}else if (req.method ==="PUT"){
	}else if (req.method ==="DELETE"){

	}

}
export default connectDB(handler)
