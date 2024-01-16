document.querySelector(".mobile-nav-btn").addEventListener("click", () => {
  document.querySelector(".primary-header").classList.toggle("nav-open");
});

const currentYear = new Date().getFullYear();
document.querySelector(".year").innerHTML = currentYear;

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behaviour: "smooth" });
    }

    if (href != "#" && href[0] === "#") {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      document.querySelector(".primary-header").classList.toggle("nav-open");
    }
  });
});
