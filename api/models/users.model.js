const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_deleted: {
        type: Number,
        default: 0
    }
});

User.plugin(mongoosePaginate);

User.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

module.exports = mongoose.model("User", User);