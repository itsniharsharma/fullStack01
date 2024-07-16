//since, user input data is needed in a schema, 

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    EnrollmentNumber:{
        type: String,
        required: true
    },
    Hostel:{
        type: String,
        required: true
    },
    DOB:{
        type: String,
        required: true
    },
    Department:{
        type: String,
        required: true
    },
    EmailId:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: Date.now
    }
});

module.exports=mongoose.model('user', UserSchema)

//data is inserted/created/read/updated using model, 