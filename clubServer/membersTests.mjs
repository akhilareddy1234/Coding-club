import fetch from "node-fetch";

let urlBase="http://localhost:2020/"

function extractCookies(rawStrings) {
    let cookies = [];
    rawStrings.forEach(function(ck) {
        cookies.push(ck.split(";")[0]); 
    });
    return cookies.join(";"); 
}

let membertest = {
    url: urlBase + "user",
    options: {
        method: "get",
        headers: {"Content-Type": "application/json"},
    },
};

let loginAdmin = {
    url: urlBase + "login",
    options: {
        method: "POST",
        body: JSON.stringify({
            
            email: "tirrivees1820@outlook.com",
            password: "449OqspUq",
        }),
        headers: { "Content-Type": "application/json" },
    },
};

let loginCust = {
    url: urlBase + "login",
    options: {
        method: "POST",
        body: JSON.stringify({
            
            email: "chihuahua1899@gmail.com",
            password: "9E3423Gj3iJ",
        }),
        headers: { "Content-Type": "application/json" },
    },
};

async function someTests() {
    console.log("Try accessing information without logging in");
    try {
        let res = await fetch(membertest.url, membertest.options);
        console.log(`information fetch result: ${res.status}`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    

    console.log("Login as member, then fetch information");
    try {
        let res = await fetch(loginCust.url, loginCust.options);
        console.log(`login results: ${res.status}`);
        // Look at the cookie
        let savedCookie = extractCookies(res.headers.raw()["set-cookie"]);
        console.log(`Saved cookie: ${savedCookie}`);
        membertest.options.headers.cookie = savedCookie;
        // User info from login
        let userInfo = await res.json();
        console.log(userInfo);
        res = await fetch(membertest.url, membertest.options);
        console.log(`information fetch result: ${res.status}\n`);
      
    } 
    catch (e) {
        console.log(`Error: ${e}\n`);
    }

    console.log("Login as admin, then fetch information");
    try {
        let res = await fetch(loginAdmin.url, loginAdmin.options);
        console.log(`login results: ${res.status}`);
        // Look at the cookie
        let savedCookie = extractCookies(res.headers.raw()["set-cookie"]);
        console.log(`Saved cookie: ${res.headers.raw()["set-cookie"]}`);
        membertest.options.headers.cookie = savedCookie;
        // User info from login
        let userInfo = await res.json();
        console.log(userInfo);
        res = await fetch(membertest.url, membertest.options);
        console.log(`information fetch result: ${res.status}\n`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }
}

someTests();