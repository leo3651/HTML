const btns = document.querySelectorAll(".btn");

for (let i = 0, n = btns.length; i < n; i++) {
  btns[i].addEventListener("click", (event) => {
    if (event.target.id === "right") {
      const dots = document.querySelectorAll(".dot");
      for (let j = 0, t = dots.length; j < t; j++) {
        if (dots[j].classList.contains("dot-fill") && j != t - 1) {
          dots[j + 1].classList.add("dot-fill");
          dots[j].classList.remove("dot-fill");
          break;
        }
      }
    } else {
      const dots = document.querySelectorAll(".dot");
      for (let j = 0, t = dots.length; j < t; j++) {
        if (dots[j].classList.contains("dot-fill") && j != 0) {
          dots[j - 1].classList.add("dot-fill");
          dots[j].classList.remove("dot-fill");
          break;
        }
      }
    }
  });
}
