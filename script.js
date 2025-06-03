document.addEventListener("DOMContentLoaded", function (e) {
  //create toggle experience on nav links menu bar for mobile/tablet users
  // display none for desktop screen
  const mobileLinks = document.getElementById("mobile-container");

  // create menu bar elements 3 bars
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  const hr1 = document.createElement("hr");
  const hr2 = document.createElement("hr");
  const hr3 = document.createElement("hr");
  span1.appendChild(hr1);
  span2.appendChild(hr2);
  span3.appendChild(hr3);
  mobileLinks.appendChild(span1);
  mobileLinks.appendChild(span2);
  mobileLinks.appendChild(span3);

  // create red x mark to close menu bar
  let xMark = document.getElementById("xMark");

  // event listener for handling clicking on menu bar, once clicked on create inner elements
  // home, about, experience, projects, and contact section
  mobileLinks.addEventListener("click", function (e) {
    xMark.style.display = "block";
    mobileLinks.innerHTML = "";
    mobileLinks.appendChild(home);
    mobileLinks.appendChild(about);
    mobileLinks.appendChild(experience);
    mobileLinks.appendChild(projects);
    mobileLinks.appendChild(contact);
  });

  // create inner text for each nav link inside menu bar
  const home = document.createElement("a");
  home.innerText = "Home";
  home.href = "#home";
  const about = document.createElement("a");
  about.innerText = "About";
  about.href = "#about";
  const experience = document.createElement("a");
  experience.innerText = "Experience";
  experience.href = "#experience";
  const projects = document.createElement("a");
  projects.innerText = "Projects";
  projects.href = "#projects";
  const contact = document.createElement("a");
  contact.innerText = "Contact";
  contact.href = "#contact";

  // event listener for clicking on red x to close menu bar, toggle back to 3 bars
  xMark.addEventListener("click", function (e) {
    xMark.style.display = "none";
    mobileLinks.innerHTML = "";
    mobileLinks.appendChild(span1);
    mobileLinks.appendChild(span2);
    mobileLinks.appendChild(span3);
  });
});
