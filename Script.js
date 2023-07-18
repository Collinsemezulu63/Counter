let Increase = document.querySelector(".increase"),
  Reset = document.querySelector(".reset"),
  Decrease = document.querySelector(".decrease"),
  Head = document.querySelector("h2"),
  count = 0;

Increase.addEventListener("click", function () {
  count = count + 1;
  Head.innerHTML = count;
});
Decrease.addEventListener("click", function () {
  count = count - 1;
  Head.innerHTML = count;
});
Reset.addEventListener("click", function () {
  Head.innerHTML = 0;
});
