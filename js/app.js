/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list') ;
const secTions = document.querySelectorAll('section');
const fraGment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNavigationMenu(){
secTions.forEach(function(section){
    const sectionID =section.id;
    const conTent =section.dataset.nav;
    const sectionItem = document.createElement('li');
    const sectionLink = document.createElement('a');
    sectionLink.href =`#${sectionID}`;
    sectionLink.classList ='menu__link';
    sectionLink.textContent =conTent;
    sectionLink.addEventListener('click',function(e){
        e.preventDefault(); 
        section.scrollIntoView({
            behavior:'smooth',
        });
    });
    sectionItem.appendChild(sectionLink);
    fraGment.appendChild(sectionItem);
});
navBar.appendChild(fraGment);
}
window.addEventListener('load',buildNavigationMenu);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

function activeSection(entries) {
    const activeLink = document.querySelector (`a[href="#${entries[0].target.id}"]`);
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add("your-active-class")
        activeLink.classList.add("active-link")
    }else{
        entries[0].target.classList.remove("your-active-class")
        activeLink.classList.remove("active-link")

    };
}
    const options = {
        root:null,
        rootMargin:'0px',
        threshold: 0.65,
    };
    
    const obserVing = new IntersectionObserver(activeSection,options);
    window.addEventListener('scroll',function(){
        for (const section of secTions){
            obserVing.observe(section);
        }
    });

// Set sections as active


