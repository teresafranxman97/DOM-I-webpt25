const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];

// Adding nav items
const nav = document.querySelector('nav');
nav.style.borderBottom = '2px solid lightgrey';


const navItem = document.querySelectorAll('a')
  navItem[0].textContent = siteContent["nav"]["nav-item-1"];
  navItem[1].textContent = siteContent["nav"]["nav-item-2"];
  navItem[2].textContent = siteContent["nav"]["nav-item-3"];
  navItem[3].textContent = siteContent["nav"]["nav-item-4"];
  navItem[4].textContent = siteContent["nav"]["nav-item-5"];
  navItem[5].textContent = siteContent["nav"]["nav-item-6"]; 

navItem.forEach((item) => {
  item.style.color = "green"
});


const newNavItem = document.createElement('a'); // Created new nav item + appended new item to nav
  newNavItem.textContent = "Our Team";
  newNavItem.style.color = "green";
  document.querySelector("nav").appendChild(newNavItem); 

const newNavItem2 = document.createElement('a'); // Created new nav item + appended new item to nav
  newNavItem2.textContent = "Charity";
  newNavItem2.style.color = "green";
  document.querySelector("nav").prepend(newNavItem2);   

// Adding h1 
const hOne = document.querySelector('h1');
hOne.textContent = siteContent["cta"]["h1"];


// Adding Button 
const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];
button.style.color = 'green';
button.style.fontWeight = 'bolder';
button.style.borderRadius = '15px';

// Adding header img 
const headerImg = document.getElementById("cta-img");
headerImg.src = siteContent["cta"]["img-src"];


// MAIN CONTENT 
const midImg = document.getElementById('middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];


// H4's
const addHeaders = document.querySelectorAll('h4');
  addHeaders[0].textContent = siteContent["main-content"]["features-h4"];
  addHeaders[1].textContent = siteContent["main-content"]["about-h4"];
  addHeaders[2].textContent = siteContent["main-content"]["services-h4"];
  addHeaders[3].textContent = siteContent["main-content"]["product-h4"];
  addHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
  addHeaders[5].textContent = siteContent["contact"]["contact-h4"];

addHeaders.forEach((item) => {
  item.style.fontSize = '22px';
})  

// PARAGRAPHS
const addContent = document.querySelectorAll('p');
  addContent[0].textContent = siteContent["main-content"]["features-content"];
  addContent[1].textContent = siteContent["main-content"]["about-content"];
  addContent[2].textContent = siteContent["main-content"]["services-content"];
  addContent[3].textContent = siteContent["main-content"]["product-content"];
  addContent[4].textContent = siteContent["main-content"]["vision-content"];
  addContent[5].textContent = siteContent["contact"]["address"];
  addContent[6].textContent = siteContent["contact"]["phone"];
  addContent[7].textContent = siteContent["contact"]["email"];
  addContent[8].textContent = siteContent["footer"]["copyright"];
  addContent[8].style.color = 'green';