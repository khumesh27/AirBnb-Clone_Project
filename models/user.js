const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

// ✅ Apply plugin to the schema (not the model)
userSchema.plugin(passportLocalMongoose);

// ✅ Export the model AFTER defining the schema and applying the plugin
module.exports = mongoose.model('User', userSchema);
