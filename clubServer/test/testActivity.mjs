import pkg from 'chai';
const { assert } = pkg;
import fetch from 'node-fetch';

let urlBase = 'http://localhost:2020/'

let info = {
	"name": "zfdsdgsdg fgdss",
	"dates": "May 13th"
	
}

let myCookie = null;

function getCookies(res) {
    let rawStrings = res.headers.raw()["set-cookie"]
    let cookies = [];
    rawStrings.forEach(function (ck) {
      cookies.push(ck.split(";")[0]); 
    });
    return cookies.join(";"); 
  }

  let res;
  let activities = null;

describe('Activity Test', function(){
    describe('Get activities Tests', function() {
        
        it('get activities',async function() {
            res = await fetch(urlBase + 'activities');
        })
        it('Everything is OK', async function() {
            assert.equal(res.status, 200);
        });
        it('Returns an array', async function() {
            activities = await res.json();
            assert.isArray(activities);
        });
        it('All activities elements have name and dates', function() {
            activities.forEach(function(tour) {
            assert.containsAllKeys(tour, ['name', 'dates']);
            });
        });

    });

    describe('Login Add Test', function() {
        let res;
        let activities = null;

        it('Adding activities without login',async function() {
            res = await fetch(urlBase + 'activities', {
                method: "post",
                body: JSON.stringify({
                    info
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
            assert.equal(res.status, 401);
        });
        
        it('Adding activities after login member',async function() {
            res = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "bibiri1807@yandex.com",
                    "password": "Hj4sS5sshQ"
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(res)
                },
            });
            console.log("login res status",res.status)
            assert.equal(res.status, 200);

            res = await fetch(urlBase + 'activities', {
                method: "post",
                body: JSON.stringify({
                    info
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(res)
                },
            });
            assert.equal(res.status, 401);
        });

        

    });

    describe('Login Delete Test', function() {
        let res;
        let activities = null;

        it('Deleting activities without login',async function() {
            res = await fetch(urlBase + 'activities/2', {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            assert.equal(res.status, 401);
        });
        
        it('Delete activities after login member',async function() {
            res = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "bibiri1807@yandex.com",
                    "password": "Hj4sS5sshQ"
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(res)
                },
            });
            console.log("login res status",res.status)
            assert.equal(res.status, 200);

            // res = await fetch(urlBase + 'activities/2', {
            //     method: "delete",
            //     headers: {
            //         "Content-Type": "application/json",
            //         cookie: getCookies(res)
            //     },
            // });
            // assert.equal(res.status, 401);
        });

        it('Delete activities after login member',async function() {
            res = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "tirrivees1820@outlook.com",
                    "password": "449OqspUq"
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(res)
                },
            });
            console.log("login res status",res.status)
            assert.equal(res.status, 200);

            // res = await fetch(urlBase + 'activities/2', {
            //     method: "delete",
            //     headers: {
            //         "Content-Type": "application/json",
            //         cookie: getCookies(res)
            //     },
            // });
            // assert.equal(res.status, 200);
        });


    });

});