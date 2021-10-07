import React from "react";
import ReactDOM from "react-dom";
import neptune from "./images/coding_image.jpg";
import neptune1 from "./images/group-study.jpg";


function Home(props){
    return (<><main>
    <p>Coding Club aims to establish a coding culture on campus, reaching every student
      passionate about coding.</p>
    <img src={neptune} alt="Coding" width="800" height="400"/><br/>
    <p>Coding Club is a fun way to learn the basics of computer programming, gain problem solving and logical thinking skills, and make friends.  The purpose of this club is to build interest in coding and requires no prior coding experience.<td>&#128522;</td></p>  
    <img src={neptune1} alt="group_study" width="400" height="300"/>
    <h2>Choose your level</h2>
      
      <p>Enroll yourself in the level you want to enhance your skills on.<td>&#128071;</td></p>
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
    </footer></>);
}
export default Home;