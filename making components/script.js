const icons = document.querySelectorAll(".icon");
for (let i = 0, n = icons.length; i < n; i++) {
  icons[i].addEventListener("click", (event) => {
    const accordion = document.querySelectorAll(".accordion");
    accordion[i].classList.toggle("open");
  });
}
