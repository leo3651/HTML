// mobile nav
document.querySelector(".mobile-nav-btn").addEventListener("click", () => {
  document.querySelector(".primary-header").classList.toggle("nav-open");
});

// current year
const currentYear = new Date().getFullYear();
document.querySelector(".year").innerHTML = currentYear;

// scroll animations
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

// sticky nav
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHero);
