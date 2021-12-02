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