**Student Name**:  Akhila Reddy Bukkasamudram

**NetID**: cl2103

# Homework 12
## (1)
### (a)
```javascript
import DataStore from "nedb-promises";

import { readFile } from "fs/promises";



const activitydb = DataStore.create("./activityDB");

const memberdb = DataStore.create("./memberDB");

const activitiesFile = JSON.parse(

    await readFile(new URL("./activity.json", import.meta.url))

  );

const memberFile = JSON.parse(

    await readFile(new URL("./clubUsers3Hash.json", import.meta.url))

  );



async function clearInsert(){    

    await activitydb.remove({}, { multi: true });

    await memberdb.remove({}, { multi: true });  

    await activitydb.insert(activitiesFile)

    await memberdb.insert(memberFile)

}  



clearInsert()
```

### (b)
```javascript
app.get('/members', adminMiddleware, async function (req, res) {
    let firstAndLast = await membersDB.find({},{firstName: 1, lastName:1});
    res.json(firstAndLast);
});
```

### (c)
```javascript
// display the activities on server
app.get('/activities',jsonParsor, async function (req, res) {
    let activities = await activitiesDB.find({});
    res.json(activities);
});

// post the updated activities after adding a new activity
app.post('/activities', userMiddleware, adminMiddleware, jsonParsor, async function (req, res) {
    console.log('adding an activity received:  ${JSON.stringyfy(req.body)}');
    let activity = req.body;

    let valid = activityValidate(activitySchema, activity);
    //hw12 insert activity into database
    if(!valid){
        console.log(activityValidate.errors);
        res.status(400).json({error: "bad activity"});
        return;
    } 
    await activitiesDB.insert(activity);
    let activities = await activitiesDB.find({});
    res.json(activities);   
}, jsonErrors);


app.delete("/activities/:id", adminMiddleware,jsonParsor, async function (req, res) {
    console.log("req params", req.params.id)
    // let index = parseInt(req.params.id);
    // activities.splice(index,1);
    //hw12
    await activitiesDB.remove({_id: req.params.id});
    let activities = await activitiesDB.find({});
    res.json(activities);
});
```

## (2)

### (a)
No modifications
![](images/image11_1a.png)
### (b)
No modifications
![](images/image11_4b.jpeg)

## (3)
### (a)
1. clubReact development Parcel bundler is running on `http://localhost:1234` with host - `localhost` and TCP port - `1234`

2. clubServer development Parcel bundler is running on `http://localhost:2020` with host - `localhost` and TCP port - `2020` (This is explicitely specified).

### (b)
```
{
    "/activities": {
        "target": "http://127.10.41.5:2050"
    }
}
```

