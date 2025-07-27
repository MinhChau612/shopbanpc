
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salts = await bcrypt.genSalt(9)
    this.password = await bcrypt.hash(this.password, salts)
})
//Export the model
export default mongoose.model('User', userSchema);