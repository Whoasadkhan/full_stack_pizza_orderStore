import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email : {
        type : String, required : true, unique : true
    },
    password: {
        type : String,
        required : true,
        unique : true,

        validate : pass => {
            if(!pass?.length || pass.length < 5){
                new Error ('password must be at least 5 character');
                return false;
            }
        },
    },
},
{timestamps : true}
);

export const User = models?.User || model('User', UserSchema);