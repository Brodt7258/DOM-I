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
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Nav
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((e, i) => e.textContent = siteContent.nav[`nav-item-${i}`]);


// CTA
document.querySelector('.cta-text h1')
  .textContent = siteContent.cta.h1;

document.querySelector('.cta-text button')
  .textContent = siteContent.cta.button;

document.getElementById('cta-img')
  .setAttribute('src', siteContent.cta['img-src']);


// Main Content
const mainContent = document.getElementsByClassName('main-content')[0];

const h4Vals = Object.keys(siteContent['main-content']) // Create a new array of all the textContent relevant to the h4 elements
  .filter(e => e.includes('h4'))
  .map(e => siteContent['main-content'][e]);

mainContent.querySelectorAll('h4')
  .forEach((e, i) => e.textContent = h4Vals[i]);

const contentVals = Object.keys(siteContent['main-content'])
  .filter(e => e.includes('content'))
  .map(e => siteContent['main-content'][e]);

mainContent.querySelectorAll('p')
  .forEach((e, i) => e.textContent = contentVals[i]);

document.getElementById('middle-img')
  .setAttribute('src', siteContent['main-content']['middle-img-src']);


// Contacts
const contactInfo = Object.values(siteContent.contact);
[...document.querySelector('.contact').children]
  .forEach((e, i) => e.textContent = contactInfo[i]);


// Footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;


// "New Content"
navLinks.forEach(e => e.style.color = 'green');

const nav = document.querySelector('nav');

const prepend = document.createElement('a');
prepend.textContent = 'Prepend';
nav.prepend(prepend);

const append = document.createElement('a');
append.textContent = 'Append';
nav.appendChild(append);


// Stretch
mainContent.style.marginBottom = '4rem';

document.getElementById('theme-change').onclick = (() => {
  let toggle = false;
  return () => {
    const dark = 'background: #222; color: #ddd;';
    toggle = !toggle;
    document.body.style.cssText = toggle ? dark : '';
  }
})();
