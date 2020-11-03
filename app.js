//----------------------------- GET ELEMENTS----------------------------------------------
const sideBar = document.getElementById('sidebar')
const sideAnchors = document.getElementsByClassName('nav-link')[0].getElementsByTagName('a');
const navbar = document.getElementsByClassName('navbar')[0];
const hoverIcons = document.getElementsByClassName('hover-icon');
const headers = document.getElementsByClassName('section-header');
const activeIcons = document.getElementsByClassName('active-page');
const trainingSubPageDec = document.getElementById('training-subPage-dec');
const workExpSubPageActive1 = document.getElementById('workExp-subPage-activePage1');
const workExpSubPageActive2 = document.getElementById('workExp-subPage-activePage2');
const workExpSubPageActive3 = document.getElementById('workExp-subPage-activePage3');
const workExpSubPageActive4 = document.getElementById('workExp-subPage-activePage4');
const workExpSubPageDec = document.getElementById('workExp-subPage-dec');
const trainingSubPageActive1 = document.getElementById('training-subPage-activePage1');
const trainingSubPageActive2 = document.getElementById('training-subPage-activePage2');
const opsExpSubPageDec = document.getElementById('opsExp-subPage-dec');
const opsExpSubPageActive1 = document.getElementById('opsExp-subPage-activePage1');
const opsExpSubPageActive2 = document.getElementById('opsExp-subPage-activePage2');
const humburger = document.getElementsByClassName('fa-bars')[0];
const closeSidebar = document.getElementsByClassName('fa-times')[0];
const emIconsSs = document.getElementsByClassName('em-social-icons-ss')[0]
const inIconsSs = document.getElementsByClassName('in-social-icons-ss')[0]

//------------------------------SUPPORT FUNCTION------------------------------------------
function nonActivePage(navLink, activeIcons, index) {
  for (let i = 0; i < navLink.length; i++) {
    if (i != index) {
      navLink[i].style.color = 'white';
      navLink[i].style.fontSize = '1.8rem';
      navLink[i].style.fontWeight = '400';
      activeIcons[i].style.opacity = 0;
    }
  }
}

function activePage(navLink, activeIcons, hoverIcons) {
  navLink.setAttribute('style', 'transition:0.25s;')
  activeIcons.setAttribute('style', 'transition:1s;')
  navLink.style.color = '#A90202';
  navLink.style.fontSize = '2.2rem';
  navLink.style.fontWeight = '600';
  activeIcons.style.opacity = 1;
  hoverIcons.style.opacity = 0;
}

function navHover(navLink, hoverIcons) {
  navLink.setAttribute('style', 'transition:0.25s;')
  hoverIcons.setAttribute('style', 'transition:0.5s;')
  navLink.style.color = "#91B5DF";
  navLink.style.fontSize = '2.2rem'
  navLink.style.fontWeight = '600'
  hoverIcons.style.opacity = 1;
}

function navOut(navLink, hoverIcons) {
  navLink.setAttribute('style', 'transition:0.25s;')
  hoverIcons.setAttribute('style', 'transition:1s;')
  navLink.style.color = "#FFF";
  navLink.style.fontSize = '1.8rem'
  navLink.style.fontWeight = '400'
  hoverIcons.style.opacity = 0;
}

function actualScrollY(index) {
  return ((headers[index].getBoundingClientRect().y + window.scrollY) - (headers[index].getBoundingClientRect().height)) - 100;
}


// CICLE CONSTRUCTION
for (let i = 0; i < sideAnchors.length; i++) {
  sideAnchors[i].addEventListener('mouseover', () => {
    if (getComputedStyle(sideAnchors[i]).color != 'rgb(169, 2, 2)') {
      navHover(sideAnchors[i], hoverIcons[i])
    }
  });
}

for (let i = 0; i < sideAnchors.length; i++) {
  sideAnchors[i].addEventListener('mouseout', () => {
    if (getComputedStyle(sideAnchors[i]).color != 'rgb(169, 2, 2)') {
      navOut(sideAnchors[i], hoverIcons[i])
    }
  });
}

// --------------------------------EVENTS LISTENER----------------------------------------
// ACTIVE PAGE ANIMATION
window.addEventListener('scroll', () => {
  let index = 0;
  if (scrollY >= actualScrollY(index)) {
    activePage(sideAnchors[index], activeIcons[index], hoverIcons[index]);
    nonActivePage(sideAnchors, activeIcons, index);
    index += 1
  }
  if (scrollY >= actualScrollY(index)) {
    activePage(sideAnchors[index], activeIcons[index], hoverIcons[index]);
    nonActivePage(sideAnchors, activeIcons, index);
    index += 1
  }
  if (scrollY >= actualScrollY(index)) {
    activePage(sideAnchors[index], activeIcons[index], hoverIcons[index]);
    nonActivePage(sideAnchors, activeIcons, index);
    index += 1
  }
  if (scrollY >= actualScrollY(index)) {
    activePage(sideAnchors[index], activeIcons[index], hoverIcons[index]);
    nonActivePage(sideAnchors, activeIcons, index);
    index += 1
  }
  if (scrollY >= actualScrollY(index)) {
    activePage(sideAnchors[index], activeIcons[index], hoverIcons[index]);
    nonActivePage(sideAnchors, activeIcons, index);
    index += 1
  }
  if (scrollY >= actualScrollY(index)) {
    activePage(sideAnchors[index], activeIcons[index], hoverIcons[index]);
    nonActivePage(sideAnchors, activeIcons, index);
    index += 1
  }
  if (scrollY >= actualScrollY(index)) {
    activePage(sideAnchors[index], activeIcons[index], hoverIcons[index]);
    nonActivePage(sideAnchors, activeIcons, index);
    index += 1
  }
  if (scrollY >= actualScrollY(index)) {
    activePage(sideAnchors[index], activeIcons[index], hoverIcons[index]);
    nonActivePage(sideAnchors, activeIcons, index);
    index += 1
  }


});

// HUMBURGER ANIMATION
humburger.addEventListener('click', () => {
  sideBar.style.display = 'block'
  sideBar.style.opacity = 0.9
  humburger.style.display = 'none'
  closeSidebar.style.display = 'block'
  closeSidebar.style.marginLeft = `${sideBar.getBoundingClientRect().width}px`
  emIconsSs.style.display = 'none'
  inIconsSs.style.display = 'none'
})

//CLOSE SIDEBAR ANIMATION
closeSidebar.addEventListener('click', () => {
  sideBar.style.display = 'none'
  humburger.style.display = 'block'
  closeSidebar.style.display = 'none'
  emIconsSs.style.display = 'block'
  inIconsSs.style.display = 'block'
})

// ACTIVE PAGE ON START
activePage(sideAnchors[0], activeIcons[0], hoverIcons[0])

console.log(emIconsSs)
