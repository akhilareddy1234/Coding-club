import pkg from 'chai';
const { assert } = pkg;
import fetch from 'node-fetch';
//import getCookies from './getCookies.mjs';
//import urlBase from '../testURL.mjs';


let urlBase="http://localhost:2020/"

function getCookies(res) {
    let rawStrings = res.headers.raw()["set-cookie"]
    let cookies = [];
    rawStrings.forEach(function (ck) {
      cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
    });
    return cookies.join(";"); // If more than one cookie join with ;
  }
  
  //module.exports = getCookies;
  export default (getCookies);

describe('Login Tests', function() {
    let res;
    let tours = null;
    let myCookie = null;

    before(async function() {
        console.log("Calling fetch");
        res = await fetch(urlBase + 'login');
        console.log("Back from fetch");
        myCookie = getCookies(res);
    })
    it('Cookie with appropriate name is returned', function() {
        let cookies=getCookies(res);
        assert.include(myCookie, 'cl2103');
    });
    describe('Login Sequence', function() {
        before(async function() {
            res = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "facer1912@yandex.com",
                    "password": "67bLjiOJKjj"
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
        });
        it('Login Good', function() {
            assert.equal(res.status, 200);
        });
        it('User returned', async function() {
            let user = await res.json();
            assert.containsAllKeys(user, ['firstName', 'lastName', 'role']);
        });
        it('Cookie session ID changed', function() {
            let cookie = getCookies(res);
            assert.notEmpty(cookie);
            assert.notEqual(cookie, myCookie);
            //console.log(cookie, myCookie);
        });
        it("logout",async function() {
            console.log("Calling fetch");
            res = await fetch(urlBase + 'logout');
            console.log("Back from fetch");
            myCookie = getCookies(res);
        })
    });
    describe('Bad Logins', function() {
        it('Bad Email', async function() {
            res = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "utilizer1910@hshkilive.com",
                    "password": "BomQVIoNm"
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
            assert.equal(res.status, 401);
        });
        it('Bad Password', async function() {
            before(async function() {
                res = await fetch(urlBase + 'login', {
                    method: "post",
                    body: JSON.stringify({
                        "email": "stedhos1sasr903@yahoo.com",
                        "password": "BnMQs)5Vi"
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        cookie: myCookie
                    },
                });
                assert.equal(res.status, 401);
            });
        })
    })
})