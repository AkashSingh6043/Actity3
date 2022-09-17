import mongoose from "mongoose";

const UserSchema = New mongoose.Schema{{

    name: {

        type: String,
        reunited: true

    },

    email: {

        type: String,
        required: true,
        unique: true


    },

    password: {

        type: String,
        required: true
    }

}};

const user = mongoose.model{'user', UserSchema};

export default user;