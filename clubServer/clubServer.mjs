import express  from 'express';
import { readFile }  from 'fs/promises';
import bcrypt from 'bcryptjs';


// app.use(express.urlencoded({extended : false}));

let app = express();
app.use(express.json());

const activities = JSON.parse(await readFile(new URL('../clubReact/event_data.json',
    import.meta.url)))
const clubMembers= JSON.parse(await readFile(new URL('./clubUsers3NoPW.json',
import.meta.url)))
let names = clubMembers.map(function(element){
    return {"firstName":element.firstName,"lastName:": element.lastName};
});

app.get('/info',function (req,res){

    res.send({
        "clubName":"Coding Club",
        "ownerName":"Akhila Reddy Bukkasamudram",
        "ownerNetId":"cl2103"
    });
});
app.get('/activities', function(req,res){
    res.send({activities});
});

app.get('/members',function(req,res){
    res.send({names});
});

app.post('/activities', async function(req,res){

    let newdata=req.body;
    activities.push(newdata);
    
    res.send(activities);

});

app.delete('/activities/:index', function(req,res){

    let index=req.params.index;

    activities.splice(index-1,1);
    
    res.send(activities);


} );

let hashed_data = JSON.parse(await readFile(new URL('./clubUsers3Hash.json', import.meta.url)));

app.post('/login', function(req,res){

    let email=req.body.email;
    let pswrd=req.body.password;
    console.log(pswrd)
    console.log(email)
    
    let uservalue={}
    for(let user of hashed_data)
    {
        if(email == user.email)
        {
            
            if(bcrypt.compareSync(pwsrd, user.password)){
                uservalue = {}
                uservalue.firstName = user.firstName;
                uservalue.lastName = user.lastName;
                uservalue.role = user.role;
                uservalue.email = user.email;
                uservalue.error = false
                break
            }
            uservalue = {"error": true, "message": "Password is not correct"}
            break
        }
        uservalue = {"error": true, "message": "User and Password both are incorrect" }
    }
    if(uservalue.error)
    {
        res.status(401);
    }
    else{res.status(200);}
    console.log(uservalue)
    res.json(uservalue)

})



app.listen(2020, () => console.log('running on 2020...'));