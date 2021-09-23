import { readFile } from 'fs/promises'; // promise based file reading 
const clubEvents = JSON.parse(await readFile(new URL('./event_data.json',
    import.meta.url))); // URL for relative file location, regular JSON parsing

clubEvents.forEach(function(event) { //Look at data
    console.log(event);
});