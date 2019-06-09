const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema();

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email : {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
});

UserSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
});

module.exports = mongoose.model('User', UserSchema);