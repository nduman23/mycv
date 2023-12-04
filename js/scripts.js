window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

let prevSection =
  window.location.href.split("#").length > 0
    ? window.location.href.split("#")[1]
    : undefined;

setInterval(() => {
  const currUrl = window.location.href;
  let newSection =
    currUrl.split("#").length > 0 ? currUrl.split("#")[1] : undefined;
  if (newSection != prevSection) {
    prevSection = newSection;
    document.title = `${newSection[0].toUpperCase()}${newSection.slice(
      1
    )} - Duman`;
  }
}, 60);
