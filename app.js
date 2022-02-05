var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User = require("./models/user");
BMI = require("./models/BMI");



var quotes = [("“By choosing healthy over skinny you are choosing self-love over self-judgement.”" + "– Steve Maraboli"), ("“Your diet is a bank account. Good food choices are good investments.” – Bethenny Frankel"), ("“You are what you eat, so don’t be fast, cheap, easy, or fake.” – Unknown"), ("“Healthy eating is a way of life, so it’s important to establish routines that are simple, realistically, and ultimately livable.” – Horace"), ("“Let food be thy medicine, thy medicine shall be thy food.” – Hippocrates")];

mongoose.set('useNewUrlParser', true); //Fix For Deprecation Warning
mongoose.set('useFindAndModify', false); //Fix For Deprecation Warning
mongoose.set('useCreateIndex', true); //Fix For Deprecation Warning
mongoose.set('useUnifiedTopology', true);

//''
mongoose.connect('mongodb+srv://Sapto:Stock@321@sapto.fdrwb.mongodb.net/Sapto?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to the DB!");
}).catch(err => {
    console.log("ERROR!: ", err.message);
});
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
    secret: "Its true...10years for being a billionare",
    resave: false,
    saveUninitialized: false
}));
app.use(flash())

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// var id: req.user._id

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.get("/", (req, res) => {
    res.render("home");
});

//handling user signup
app.post("/register", (req, res) => {
    req.body.username
    req.body.password
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {


            console.log(err);
            req.flash("error", err.message);
            res.render("register");
        }
        passport.authenticate("local")(req, res, () => {
            req.flash("success", "Welcome to Sapto " + user.username);
            res.redirect("/");
        });
    });
});
//AUTH ROUTE
app.get("/register", (req, res) => {
    res.render("register");
});
app.get("/yourInfo", isLoggedIn, (req, res) => {
    res.render("yourInfo");
})

app.post("/yourInfo/:id", isLoggedIn, (req, res) => {
    var id = req.params.id;
    var age = req.body.age;
    var height = req.body.height;
    var weight = req.body.weight;
    var gender = req.body.gender;
    var noMeals = req.body.numberM;
    var newBmi = { age: age, height: height, weight: weight, gender: gender, noMeals: noMeals }

    User.findByIdAndUpdate(id, newBmi, { new: true }, (err, user) => {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            res.redirect("/yourInfo/" + user._id);
        }
    })
})
app.get("/yourInfo/:id", isLoggedIn, (req, res) => {
    console.log("ID" + req.params.id);
    User.findById(req.params.id).exec((err, newData) => {
        if (err) {
            console.log(err);
        } else {
            console.log(newData);


            res.render("data", { userD: newData });
        }
    })
})

app.post("/yourInfo/:id/profile", isLoggedIn, (req, res) => {
    var p1 = req.body.prot0,
        p2 = req.body.prot1,
        p3 = req.body.prot2,
        p4 = req.body.prot3,
        p5 = req.body.prot4,
        p6 = req.body.prot5;

    var c1 = req.body.carbs0,
        c2 = req.body.carbs1,
        c3 = req.body.carbs2,
        c4 = req.body.carbs3,
        c5 = req.body.carbs4,
        c6 = req.body.carbs5;

    var f1 = req.body.fat0,
        f2 = req.body.fat1,
        f3 = req.body.fat2,
        f4 = req.body.fat3,
        f5 = req.body.fat4,
        f6 = req.body.fat5;

    var t1 = req.body.gDate0 + ":00+05:30",
        t2 = req.body.gDate1 + ":00+05:30",
        t3 = req.body.gDate2 + ":00+05:30",
        t4 = req.body.gDate3 + ":00+05:30",
        t5 = req.body.gDate4 + ":00+05:30",
        t6 = req.body.gDate5 + ":00+05:30";


    var plan = req.body.plan;
    console.log(plan)
    console.log(t1)
    var diet = { t1: t1, t2: t2, t3: t3, t4: t4, t5: t5, t6: t6, plan: plan, p1: p1, p2: p2, p3: p3, p4: p4, p5: p5, p6: p6, c1: c1, c2: c2, c3: c3, c4: c4, c5: c5, c6: c6, f1: f1, f2: f2, f3: f3, f4: f4, f5: f5, f6: f6 };
    User.findByIdAndUpdate(req.params.id, diet, (err, user) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/yourInfo/" + user._id + "/profile");

        }
    })

})

app.get("/yourInfo/:id/profile", isLoggedIn, (req, res) => {
    console.log("ID" + req.params.id);
    User.findById(req.params.id, (err, newD) => {
        if (err) {
            console.log(err)
        } else {

            res.render("show", { diet: newD })
        }
    })
})

//LOGIN ROUTES
//render login form
app.get("/login", (req, res) => {
    res.render("login");
});
//login logic

app.post("/login", passport.authenticate("local", {

    successRedirect: "/",
    failureRedirect: "/login"
}), (req, res) => {})

app.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/");
});
//middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to be logged in to do that ");
    res.redirect("/login");
}



app.listen(process.env.PORT || 8000, process.env.IP, () => {
    console.log("app is running!")
})