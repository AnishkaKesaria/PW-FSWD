const mongoose = require('mongoose');
const {Schema} = mongoose;
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// require('dotenv').config()


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is Required'],
        minLength: [5, 'Name must be at least 5 char'],
        maxLength: [20, 'Name must be at max of 50 char'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        unique: true,
        lowecase: true,
        unique: [true, 'Already registered']
    },
    password: {
        type: String,
        select: false
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordExpiryDate: {
        type: Date
    }

}, {
    timestamps: true
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
})

userSchema.methods = {
    jwtToken() {
        return JWT.sign(
            {_id: this._id, email: this.email},
            process.env.vidly_jwtPrivateKey,
            {expiresIn: '24h'}
        );
    }
};

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;