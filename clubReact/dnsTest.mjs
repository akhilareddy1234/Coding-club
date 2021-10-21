import dns from 'dns';
const { Resolver } = dns.promises;
const resolver = new Resolver();
let servers = resolver.getServers();
console.log("DNS Servers:");
console.log(servers);
resolver.resolve4('www.shein.com').then((addresses) => {
    console.log('Address for www.shein.com')
    console.log(addresses);
});