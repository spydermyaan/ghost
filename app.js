var cart = document.querySelector(".cart");
var cartDetails = document.querySelector(".cart__details");

cart.addEventListener("click", () => {
  if (cartDetails.classList.contains("shown")) {
    cartDetails.style.display = "none";
    cartDetails.classList.remove("shown");
  } else {
    cartDetails.style.display = "block";
    cartDetails.classList.toggle("shown");
  }
});
