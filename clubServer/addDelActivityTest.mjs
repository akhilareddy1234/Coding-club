import fetch from 'node-fetch';

const user={"name": " Weekly contest",
"dates": " Mondays"}

let site1 = {
    url: "http://localhost:2020/activities",
    options: {method: "GET" }
    };

let site2 = {
    url: "http://localhost:2020/activities",
    options: { 
        method: "POST" , 
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}
    }
  };

 let site3 = {
    url: "http://localhost:2020/activities",
     options: {method: "DELETE"}
   };

async function triger(){
    let data = await (await fetch(site1.url, site1.options)).json();
    console.log("No:of Activities are "+data.length);

    const newdata = await (await fetch(site2.url, site2.options)).json();
    console.log("No:of Activities after adding "+newdata.length);

    const data_del = await (await fetch(site3.url + '/2', site3.options)).json();
    console.log("No:of Activities after deleting "+data_del.length);


}


triger()