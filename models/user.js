var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number,
    weight: Number,
    height: Number,
    gender: String,
    bmr: Number,
    bmi: Number,
    noMeals: Number,
    day: Date,
    plan: String,
    p1: Number,
    p2: Number,
    p3: Number,
    p4: Number,
    p5: Number,
    p6: Number,
    c1: Number,
    c2: Number,
    c3: Number,
    c4: Number,
    c5: Number,
    c6: Number,
    f1: Number,
    f2: Number,
    f3: Number,
    f4: Number,
    f5: Number,
    f6: Number,
    t1: String,
    t2: String,
    t3: String,
    t4: String,
    t5: String,
    t6: String,

});


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);