// Elements
const scrollButton = document.getElementById("downloadButton");
scrollButton.style.display = "none";

const successMessage = document.getElementById("successMessage");
successMessage.style.display = "none";

const closeButton = document.getElementById("closeButton");

const closeButtonNews = document.getElementById("closeButtonNews");

const sucessmessageNews = document.getElementById("sucessmessageNews");
sucessmessageNews.style.display = "none";

// Show/hide download button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

// Form submission handler contact
document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.style.display = "block";
});

// Close button handler success message
closeButton.addEventListener("click", () => {
  successMessage.style.display = "none"; // Hide the success message
});

document.getElementById("newsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  sucessmessageNews.style.display = "block";
});

// Close button handler success message
closeButtonNews.addEventListener("click", () => {
  sucessmessageNews.style.display = "none"; // Hide the success message
});

//Dropdown Assunto da Mensagem
document.querySelectorAll('.dropdown-item').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const selectedText = this.textContent;
    const dropdownButton = document.getElementById('dropdownMenuButton');
    dropdownButton.textContent = selectedText;
  });
});