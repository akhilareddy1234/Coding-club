**Student Name**:  Akhila Reddy Bukkasamudram

**NetID**: cl2103

# Homework 3
## (1)

### (a)
Included images in index.html
![Image on webpage](images/image3_1a.png)

### (b)

Emojis used in my club website

* &#128522
* &#128071

![Emoji on webpage](images/image3_1b.png)

## (2)
### (a)

### (b)
```
<table>
  <thead>
    <tr>
      <th>Name</th>
        <th>Date</th>
        <th>Description</th>
    </tr>      
  </thead>
  <tbody>
    <tr>
      <td>Workshop </td>
      <td>9/9/21</td>
      <td>This workshop is for beginner level programmers.</td>
    </tr>

    <tr>
      <td>Group project session</td>
      <td>9/10/21</td>
      <td>Groups that are randomly formed work on a project assigned together.</td>
    </tr>

    <tr>
      <td>Hacakthon</td>
      <td>9/11/21</td>
      <td>This hackathon is for individuals.</td>
    </tr>
  </tbody>
</table>
```

### (c)
![Styled table](images/image3_2c.png)

```
tbody tr:nth-child(odd) {
    background-color: rgb(119,136,153);
  }
  
  tbody tr:nth-child(even) {
    background-color: rgb(192,192,192);
  }
  
  table {
    background-color: rgb(47,79,79);
  }
```

## (3)

### (a)

![club site](images/image3_3a.png)

### (b)

[link to the club site](http://csweb01.csueastbay.edu/~cl2103/clubProjectHW3/clubProject/)

## (4)

### (a)

```
states.length

```
![State Count](images/image3_4a.png)

### (b)

```
function total_US_Population(total_population, current_value){
    return total_population + current_value.population
}


states.reduce(total_US_Population,0)

```
![Total US Population](images/image3_4b.png)

### (c)

```
function compare_states(state1,state2){
    return state2.population - state1.population
}
states.sort(compare_states)
state_names = states.map(state => state.state)
console.log(state_names.slice(0,5))

```
![Array of 5 most populous](images/image3_4c.png)