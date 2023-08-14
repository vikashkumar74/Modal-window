const BtnBoxEl = document.querySelectorAll(".btnbox");

// open model

for (let i = 0; i <= BtnBoxEl.length - 1; i++) {
  BtnBoxEl[i].addEventListener("click", function () {
    document.querySelector(".overly").classList.remove("hidden");
  });
}
// close modal

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".overly").classList.add("hidden");
});
