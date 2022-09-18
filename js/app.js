// */ 
//  * 
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 
// */
// counter to specify attributes and number of section
let conuter = 0;

const createNewSection = () => {
    conuter++;
    // section HTML Content
    const content =`<section id="section${conuter}" data-nav="Section ${conuter}">
    <div class="landing__container">
    <h2>Section ${conuter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>

    </div>
    </section> `;
    document.querySelector('main').insertAdjacentHTML("beforeend",content);
};

// make list items equal to the number of sections by iterate on them
// but i need to remove all items to avoid the duplicating
const navBar= document.getElementById("navbar__list");
const createListItem = () =>{
    navBar.innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
        const listItem = `<li> <a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a> </li>`;
        navBar.insertAdjacentHTML("beforeend",listItem);

    });
 

};

// Scroll to section on link click

// Set sections as active
// function to observe the section to specify which section on the viewport and its link

const observingSection = () => {
    const observer = new IntersectionObserver(
        function (entries){
            // loop over entries "sections"

            entries.forEach((entry) => {
                // get active link by using the id of the section viewport 

                let activeSection= navBar.querySelector(`[data-nav=${entry.target.id}]`);
                // add active class to the section on viewport and the sections link

                if (entry.isIntersecting){
                    entry.target.classList.add("your-active-class");
                    activeSection.classList.add("active-link");

                   // edit the hash of loction manual cause i prevent default behavior , and remove active classes
                }else{ location.hash =`${entry.target.id}`;
                    entry.target.classList.remove("your-active-class");
                    activeSection.classList.remove("active-link");
                }
                
            });
        },
        {
            // option
            threshold:.7,
        }

    );
    // return this part of code because i will use it twice
    return document.querySelectorAll("section").forEach((section) =>{
        observer.observe(section);
    });
    
};













// Build menu 
// Create Four Sections As Dynamic
for (let i = 1; i <5; i++) {createNewSection();}
// Call Function For Create List  Items in Navbar
createListItem();
// Call Function  For Set sections as active
observingSection();
// Add New Section By Button
document.getElementById("btn").addEventListener("click",() =>{
    createNewSection();
    createListItem();
    observingSection();
})



