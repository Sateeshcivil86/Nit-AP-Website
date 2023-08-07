// DOM ==> Document object model
function int() {
  const hamburger = document.querySelector(".hamburger");
  const sidebarCloseButton = document.querySelector(".close-button");
  const sidebarContainer = document.querySelector(".sidebar-container");
  console.log(sidebarContainer);

  const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
  };

  const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar");
  };

  hamburger.addEventListener("click", openSidebar);
  sidebarCloseButton.addEventListener("click", closeSidebar);
}
int();

function navRelatedcode() {
  const navbarContainer = document.querySelector(".nav-container");
  window.addEventListener("scroll", function () {
    //   console.log(windows.scrollY);
    const scrollNumber = window.scrollY;
    //   console.log(window.innerWidth);
    const targetNumber = window.innerWidth >= 992 ? 70 : 50;
    if (scrollNumber >= targetNumber) {
      navbarContainer.classList.add("sticky-nav");
    } else {
      navbarContainer.classList.remove("sticky-nav");
    }
  });
}
navRelatedcode();
