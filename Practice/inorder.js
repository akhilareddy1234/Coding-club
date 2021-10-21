import fetch from 'node-fetch';
let site1 = {
  url: "https://www.linkedin.com/",
  options: {method: "HEAD"}
};

let site2 = {
  url: "https://www.youtube.com/",
  options: {method: "HEAD"}
};

let site3 = {
  url: "https://www.flipkart.com",
  options: {method: "HEAD"}
};

let start = new Date();
async function inOrder() {
    let res = await fetch(site1.url, site1.options);
    let time = (new Date() - start)/1000;
    console.log(`linkedin status: ${res.statusText}, time: ${time}`);
    res = await fetch(site2.url, site2.options);
    time = (new Date() - start)/1000;
    console.log(`Youtube status: ${res.statusText}, time: ${time}`);
    res = await fetch(site3.url, site3.options);
    time = (new Date() - start)/1000;
    console.log(`Flipkart status: ${res.statusText}, time: ${time}`);
}
console.log("Starting my web requests:");
inOrder();