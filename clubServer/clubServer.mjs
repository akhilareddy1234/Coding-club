import express from 'express';
import session from 'express-session';
import { readFile } from 'fs/promises'; 
import bcrypt from 'bcryptjs'


const app = express();

app.use(express.json());

const cookieName = "cl2103"; 
app.use(session({
    secret: 'Coding club',
    resave: false,
    saveUninitialized: false,
    name: cookieName 
}));

function setUpSessionMiddleware(req, res, next) {
    console.log(`\nsession object: ${JSON.stringify(req.session)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = { role: "guest" };
    };
    next();
};

// Use this middleware to restrict paths to only logged in users
function checkCustomerMiddleware(req, res, next) {
    if (req.session.user.role === "guest") {
        res.status(401).json({ error: "Not permitted" });;
    } else {
        
        next();
    }
};

// Use this middleware to restrict paths only to admins
function checkAdminMiddleware(req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({ error: "Not permitted" });;
    } else {
        next();
    }
};

app.use(setUpSessionMiddleware);

let activityData = JSON.parse(await readFile(new URL('../clubReact/event_data.json', import.meta.url)));

let memberdata = JSON.parse(await readFile(new URL('./clubUsers3NoPW.json', import.meta.url)));

let hasheddata = JSON.parse(await readFile(new URL('./clubUsers3Hash.json', import.meta.url)));

let membernames = memberdata.map(function(element){
    return {"firstName":element.firstName,"lastName:": element.lastName};
});

app.get('/info', function(req, res) {
    res.send({
        "clubName": "Coding club",
        "ownerName": "Akhila Reddy",
         "ownerNetId": "cl2103"
    });
});

app.get('/activities',async function (req,res){
    res.json(activityData);
});

app.get('/details',checkCustomerMiddleware,async function (req,res){
    res.json(membernames);
});

app.post('/activities',checkAdminMiddleware, function(req,res){

    let newdata=req.body;
    activityData.push(newdata);
    
    res.send(activityData);

});
app.delete('/activities/:index',checkAdminMiddleware,function(req,res){

    let index=req.params.index;

    activityData.splice(index-1,1);
    

    res.send(activityData);


} );

// Available to all visitors, returns user info if successful
app.post('/login', express.json(), function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    // Find user
    let auser = hasheddata.find(function(user) {
        return user.email === email
    });
    if (!auser) { // Not found
        res.status(401).json({ error: true, message: "User/Password error" });
        return;
    }
    let verified = bcrypt.compareSync(password, auser.password);
    if (verified) {
        // Upgrade in priveledge, should generate new session id
        // Save old session information if any, create a new session
        let oldInfo = req.session.user;
        req.session.regenerate(function(err) {
            if (err) {
                console.log(err);
            }
            let newUserInfo = Object.assign(oldInfo, auser);
            delete newUserInfo.passHash;
            req.session.user = newUserInfo;
            res.json(newUserInfo);
        });
    } else {
        res.status(401).json({ error: true, message: "User/Password error" });
    }
});

app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options); // the cookie name and options
        res.json({message: "Goodbye"});
    })
});

app.listen(2020, ()=>console.log("running at 2020"));