const scrollButton = document.getElementById("downloadButton");
scrollButton.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

function closeMessage() {
  let successMessage = document.getElementById("successMessage");
  successMessage.style.display = "none";
}
