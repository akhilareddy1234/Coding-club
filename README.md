**Student Name**:  Akhila Reddy Bukkasamudram

**NetID**: cl2103

# Homework 2
## (1)

### (a)

### (b)

(i) No. Site wide navigation should not be in the <main> element.

(ii) No. Common Banners must not be kept in the <main> element.

(iii) No. Copyright notices are not kept in the <main> element. It is kept in footer.

The file names are :

* index.html
* login.html
* club_activities.html

### (c)

### (d)

### (e)

## (2)

### (a) 
We should put header outside the main.

### (b)
No. We should not use site-wide footer inside the main element. I prefer using footer as the last element to using as site-wide footer such as copyrights notice.

### (c)

### (d)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home page</title>
  </head>
  <body>
    <nav>
      <ul>
          <li class="active"><a href="./index.html">Home</a></li>
          <li><a href="./login.html">Login</a></li>
          <li><a href="./club_activities.html">Activities</a></li>
      </ul>
    </nav>
    <header>
      <h1>Coding club</h1>
    </header>
    <main>
      <p>Coding Club aims to establish a coding culture on campus, reaching every student
        passionate about coding.</p>
      <h2>Choose your level</h2>
        
        <p>Enroll yourself in the level you want to enhance your skills on.</p>
        <ul>
          <li>Beginner</li>
          <li>Intermediate</li>
          <li>Advanced</li>
        </ul>
        <h2>Hackathons</h2>
        <nav>
          <ul>
            <li><a href="#individual">Check the upcoming individual hackathons here.</a></li>
            <li><a href="#team">Check the upcoming team hackathons here.</a></li>
          </ul>
        </nav>
        <p></p>
      </main>
      <footer>
        &copy;2021 - Coding Club
      </footer>
    </body>
   </html>
```

## (3)

### (a)
parseInt('hello'); // NaN -> (i) Why and What is a NaN? - The given argument is a string and not an integer. NaN means not a number.
parseInt('12hello'); // 12 -> (ii)
parseInt('1010', 2);  // 10 -> (iii) What does this do? - parseInt converts binary to decimal.
parseInt('hi5'); // NaN -> (iii) Is this the same as (ii) - No, because the integer is prefixed by a character

parseFloat('3.145AkhilaReddyBukkasamudram'); // 3.145
parseFloat('AkhilaReddyBukkasamudram2112'); // NaN

### (b)
pi = Math.PI;
h = 6.62607004e-34;
mpg = 343/11.8;
mpg.toString(); // Example, gives full "precision"
// (i) Use toFixed to get a string of the first 5 digits of pi - "3.14159"
// (ii) Use toPrecision to get h (planck's constant) to 3 sig figs - "6.63e-34"
// (iii) Use toFixed to get the mpg to a tenth of a gallon - "29.0"

### (c)
a = "AkhilaReddyBukkasamudram"; 
b = 'AkhilaReddyBukkasamudram'; 
console.log(a === b); // Check if these are equal -> true
// Why bother with two string delimiters? -> a single quoted string can have double quotes within it without having escaping them and a double quoted string can have single quotes without escaping them.
test = "It's a pain to always escape quotes"; // (i) does this work -> yes, it works.
console.log(test);
test = 'It's a pain to always escape quotes'; // (ii) why not this? -> It raises syntax error. The test variable is delimited because of a single quote.
console.log(test2);
test3 = 'It\'s a pain to always escape quotes'; // (iii) What is going on here -> It's a pain to always escape quotes. Quotes within a string should be denoted by backslash.
console.log(test3);

### (d)
name = "Akhila Reddy Bukkasamudram"
uname = name.toUpperCase(); // (i) What? -> converts into uppercase\
console.log(uname);
lname = name.toLowerCase(); // (ii) What? -> converts into lowercase\
console.log(lname);
// Explain what the following two lines do and show a screenshot
// of the results. -> The following lines check if the uname has 'A' in it and if the lname has 'i' in it
console.log("Your name includes an 'a': " + uname.includes('A'));
console.log("Your name includes an 'i': " + lname.includes('i'));

### (e)

## (4)

### (a)
sentence = "A long, long, time ago in a galaxy"; // A string
myArray = sentence.split(' '); // (i) what does this do? - splits the sentence string into an array of substrings
console.log("The number of words is: " + myArray.length); 
myArray.push("far"); // (ii) what do each of these calls do? - inserts the string "far" at the end of the array
myArray.push("far");
myArray.push("away");
console.log("The number of words is: " + myArray.length);
console.log(myArray.join('_')); // (iii) what does join do? - concatenates all the array elements within myArray with the value in paranthesis.
tempIndex = myArray.indexOf('galaxy'); // (iv) What does this do? - returns the index value of the parameter 'galaxy'.
myArray[tempIndex] = "college"; // (v) did I change an element? - yes, the element college replaced the array element galaxy.
console.log(myArray.join(' '));
myArray.pop(); // (vi) what does this do? - removes the last element from the array.
console.log("The number of words is: " + myArray.length);

### (b)
sentence2 = "Whereas recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world";
myArray2 = sentence2.split(" ");

function upper(xString) {
  return xString.toUpperCase();
}
// (i) What does this function do? -> converts string to uppercase.

myArray3 = myArray2.map(upper); //(ii) What does map do? -> This function creates a new array with the results of called function on every element in the myArray2.

function noCaseSort(x, y) {
  if (x.toLowerCase() < y.toLowerCase()) { 
    return -1;
  } else {
    return 1;
  }
  return 0;
}
// (iii) why would I do this? -> This function compares 2 elements and sorts them in ascending order.

myArray2.sort(noCaseSort);
// (iv) what is the purpose of passing this function here? -> sorts the elements of the array with respect to the function. 

### (c)
