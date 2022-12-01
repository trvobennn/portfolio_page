import React from "react";

function Navbar (){
    return (
<nav id="navbar">
<h3>Trevor's Portfolio</h3>
    <ul>
    <li><a href="#virtualcard">Virtual Business Card</a></li>
    <li><a href="#markdown">Markdown Previewer</a></li>
    <li><a href="#quote">Quote Machine</a></li>
    <li><a href="#calculator">Calculator</a></li>
    </ul>
</nav>
    )}

function Main (){
    return (
<div class="main">
  <section id="welcome-section">
    <h2>Welcome! This page has some of my web-based projects. 
        I have other non-web based things on my GitHub as well. 
        I have done a bit of Python, Java, and Javascript stuff.</h2>
  </section>

  <section class="projects" id="projects">
    <div class="project-tile" id="virtualcard">
        <a href="https://codepen.io/trvobennn/pen/QWxEWRB" target="_blank">
            <img src="https://shots.codepen.io/trvobennn/pen/QWxEWRB-512.jpg?version=1669831421" />
        </a></div>
    <div class="project-tile" id="markdown">
        <a href="https://codepen.io/trvobennn/pen/KKedMpb" target="_blank">
            <img src="https://shots.codepen.io/trvobennn/pen/KKedMpb-512.jpg?version=1667318906" />
        </a></div>
    <div class="project-tile" id="quote">
        <a href="https://codepen.io/trvobennn/pen/zYaGmYm" target="_blank">
            <img src="https://shots.codepen.io/trvobennn/pen/zYaGmYm-512.jpg?version=1667092220" />
        </a></div>
    <div class="project-tile" id="calculator">
        <a href="https://codepen.io/trvobennn/pen/NWzGwRB" target="_blank">
            <img src="https://shots.codepen.io/trvobennn/pen/NWzGwRB-512.jpg?version=1668982673" />
        </a></div>
  </section>
</div>
    )}

function Footer(){
    return (
<footer>
    <div id="footer-links">
        <a id="profile-link" target="_blank" href="https://www.linkedin.com/in/trvr-benntt/">
            My LinkedIn <img src="./In-White-48.png" alt="LinkedIn logo" />
        </a>
        <a id="profile-link" target="_blank" href="https://github.com/trvobennn">
            My GitHub <img src="./GitHub-Mark-Light-64px.png" alt="Github logo" />
        </a>
        <a id="profile-link" target="_blank" href="https://trev-site.herokuapp.com/">
            My Personal Site
        </a>
    </div>
</footer>
    )}

export default function App() {
    return (
<div id="App"   >
    <Navbar />
    <Main />
    <Footer />
</div>
    )}