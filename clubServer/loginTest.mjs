import fetch from 'node-fetch';

let user1 = {
    email: "tirrivees1820@outlook.com",
    password: "449OqspUq"
}

let user2 = {
    email: "tulya1801@yahoo.com",
    password: "thikajstfop"
}

let user3 = {
    email: "minligkjkh ",
    password: "nvkamsanyfgne"
}


async function trigger() {
    let logindata1 = await fetch("http://localhost:2020/login", {
        method: "POST",
        body: JSON.stringify(user1),
        headers: { 'Content-Type': 'application/json' }
    }
    );
    let resultdata1 = await logindata1.json();
    console.log(resultdata1)
    if (resultdata1.error) {
        console.log("bad error");
    }
    else {
        console.log(resultdata1.firstName, resultdata1.email, resultdata1.role)
    }

    let logindata2 = await fetch("http://localhost:2020/login", {
        method: "POST",
        body: JSON.stringify(user2),
        headers: { 'Content-Type': 'application/json' }
    }
    );
    resultdata1 = await logindata2.json();
    if (resultdata1.error) {
        console.log(resultdata1.message);
    }
    else {
        console.log(resultdata1.firstName, resultdata1.email, resultdata1.role)
    }

    const logindata3 = await (await fetch("http://localhost:2020/login", {
        method: "POST",
        body: JSON.stringify(user3),
        headers: { 'Content-Type': 'application/json' }
    })).json();
    if (resultdata1.error) {
        console.log(logindata3.message);
    }
    else {
        console.log(resultdata1.firstName, resultdata1.email, resultdata1.role)
    }

}
trigger();