
console.log('load06');
            
//Ham Script
const centerNavOverlay = document.getElementById('centerNavOverlay');
const centerNavPanel = document.getElementById('centerNavPanel');
const navHam = document.getElementById('navHam');
const closeNav = document.getElementById('closeNav');
const graySidePanel = document.getElementById('graySidePanel');


const navFirstPage = document.getElementById('navFirstPage');
const navSecondPage = document.getElementById('navSecondPage');
const navSplitLogo = document.getElementById('navSplitLogo');
const backToPrimary = document.getElementById('backToPrimary');
const secondaryPageLists = document.querySelectorAll('.second-page-list');
const sideChangingIcon = document.querySelector('#sideChangingIcon i');

const connectTab = document.getElementById('connectTab');
const eventsTab = document.getElementById('eventsTab');


// Secondary Page Nav
function secondPageOpen(panel) {

    navSecondPage.classList.add('center-secondary-menu-panel-visible');
    navFirstPage.classList.add('center-nav-mobile-primary-ul-collapsed');
    graySidePanel.classList.add('gray-side-panel-open');
    navSplitLogo.classList.add('center-nav-mobile-primary-ul-collapsed');

    for (var i=0; i<secondaryPageLists.length; i++) {
        secondaryPageLists[i].style.display = "none";
    }

    switch(panel) {
        case 'connect':
            secondaryPageLists[0].style.display = "block";
            sideChangingIcon.setAttribute("class", "fa-solid fa-users");
            break;

        case 'events':
            secondaryPageLists[1].style.display = "block";
            sideChangingIcon.setAttribute("class", "fa-sharp fa-solid fa-calendars");

    }
}

function secondPageClose() {

    navSecondPage.classList.remove('center-secondary-menu-panel-visible');
    navFirstPage.classList.remove('center-nav-mobile-primary-ul-collapsed');
    graySidePanel.classList.remove('gray-side-panel-open');
    navSplitLogo.classList.remove('center-nav-mobile-primary-ul-collapsed');
    sideChangingIcon.setAttribute("class", "fa-solid fa-users");
}

connectTab.addEventListener("click", function() {secondPageOpen('connect') });
eventsTab.addEventListener("click", function() {secondPageOpen('events') });
backToPrimary.addEventListener("click", secondPageClose);


// Dropdown
const getMinistriesDD = document.querySelectorAll('.li-content-with-dropdown');

// closes all dropdown menus
function closeAllDropdowns() {
    for (var i=0; i<getMinistriesDD.length; i++) {
        var ministryDropdown = getMinistriesDD[i].querySelector('.center-nav-dropdown');
        var ministryChev = getMinistriesDD[i].querySelector('.chevron-icon');

        if (ministryDropdown != null) {
            ministryDropdown.classList.remove('center-nav-dropdown-open');
        }
        if (ministryChev != null) {
            ministryChev.classList.remove('chevron-icon-open');
        }
    }
}

// toggles dropdown for clicked ministry
var dropDownTrigger = function(num) {
    return function() {

        var ministryDropdown = getMinistriesDD[num].querySelector('.center-nav-dropdown');
        var ministryChev = getMinistriesDD[num].querySelector('.chevron-icon');

        if (ministryDropdown.classList.contains('center-nav-dropdown-open') ) {
            ministryDropdown.classList.remove('center-nav-dropdown-open');

            if (ministryChev != null) {
                    ministryChev.classList.remove('chevron-icon-open');
            }

        } else {

            closeAllDropdowns();
            if (ministryDropdown != null) {
                ministryDropdown.classList.add('center-nav-dropdown-open');

                if (ministryChev != null) {
                    ministryChev.classList.add('chevron-icon-open');
                }

            }
        }

    }
}

for (var mdVar=0; mdVar<getMinistriesDD.length; mdVar++) {
    if (getMinistriesDD[mdVar].id == "ministryTab" + mdVar) {
        getMinistriesDD[mdVar].addEventListener("click", dropDownTrigger(mdVar));
    }
}

// Open and Close Menu
function toggleNavMenu() {
    console.log('opened');
    centerNavOverlay.classList.toggle('center-mobile-nav-overlay-open');
    centerNavPanel.classList.toggle('center-mobile-nav-panel-open');
    secondPageClose();
    closeAllDropdowns();
}
navHam.addEventListener("click", toggleNavMenu);
//navHam.addEventListener("click", function() {console.log('clicked here'); });
closeNav.addEventListener("click", toggleNavMenu);
centerNavOverlay.addEventListener("click", toggleNavMenu);