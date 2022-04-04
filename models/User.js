import mongoose from "mongoose";


const UserModel = new mongoose.Schema({
	firstName:{
		type:String,
		required:true
	},
	lastName:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	area_code:{
		type:String,
		required:true
	},
	phoneNumber:{
		type:String,
		required:true
	},
	company:{
		type:String,
		required:true
	},
	streetAddress1:{
		type:String,
		required:true
	},
	streetAddress2:{
		type:String,
		required:true
	},
	city:{
		type:String,
		required:true
	},
	state:{
		type:String,
		required:true
	},
	zipCode:{
		type:String,
		required:true
	},
	country:{
		type:String,
		required:true
	},
	website:{
		type:String,
		required:true
	},

})

mongoose.models = {};

export default mongoose.model("user",UserModel)
