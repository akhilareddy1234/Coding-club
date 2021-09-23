**Student Name**:  Akhila Reddy Bukkasamudram

**NetID**: cl2103

# Homework 5
## (1)
### (a)
![Horizontal menu](images/image5_1a.png)

### (b)
```html
<nav>
        <ul>
            <li class="active"><a href="./index.html">Home</a></li>
            <li><a href="./login.html">Login</a></li>
            <li><a href="./club_activities.html">Activities</a></li>
            <li><a href="./application_page.html">Membership</a></li>
        </ul>
    </nav>
```
```css
nav {
    max-width: 100%;
    border-style: inset;
    position: sticky;
    top: 0;
}

```
![Scrolling with menu at the top](images/image5_1b.png)

## (2)

### (a)
```css
main{
  max-width : 1000px;
  align-items: center;
  flex-direction: column;
  display : flex;
  margin : 0 auto;
}
```
![width limited and centered](images/image5_2a.png)

### (b)

```css
.container {
  display:grid;
  grid-template-columns: 1fr 2fr;
  grid-row-gap: 10px;
  grid-column-gap:20px;
}
```
![form layout with grid](images/image5_2b.png)

### (c)

[link to updated website](http://csweb01.csueastbay.edu/~cl2103/clubProjectHW5/clubProject/)

## (3)

### (a)
![repo directory](images/image5_3a.png)

### (b)
```javascript
import fs from 'fs'; // File system module
let file_name = 'index.html';
var file_path = process.argv[2];
var file_buffer =  fs.readFileSync(file_name);
var to_string = file_buffer.toString();
var split_lines = to_string.split("\n");
console.log(split_lines.length-1);
```
![console program run](images/image5_3b.png)

### (c)
javascript is more restrictive.

```json
[{"name": "Workshop",
    "dates": ["Sept 16th", "Sept 26th", "Oct 6th", "Oct 16th",
              "Oct 26th", "etc..."]},

  {"name": "Group Project Session",
   "dates": ["Sept 23rd", "Oct 1st", "Oct 14th",
             "Oct 27nd"]},
  {"name": "Hackathon", "dates": ["Every Sunday every month"]}]
```

### (d)

```javascript
import { readFile } from 'fs/promises'; // promise based file reading 
const clubEvents = JSON.parse(await readFile(new URL('./event_data.json',
    import.meta.url))); // URL for relative file location, regular JSON parsing

clubEvents.forEach(function(event) { //Look at data
    console.log(event);
});

```
![data dump](images/image5_3d.png)

## (4)

### (a)
we can create package.json using the command : npm init

### (b)
![contents of package.json](images/image5_4b.png)

### (c)

### (d)

###(e)
![console running Parcel.js](images/image5_4d1.png)
![Browser view](images/image5_4d2.png)

## (5)

### (a)
![react with imported data check](images/image5_5a.png)

### (b)
![react with imported data check](images/image5_5b.png)
