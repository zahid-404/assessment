// Get the element for user's name
const userNameElement = document.getElementById("name");

// Get the element for the current date
const dateElement = document.getElementById("date");

// Set the user's name
const userName = "Zahid Mohammad";
userNameElement.innerText = userName;

// Set the current date
const currentDate = new Date();
const formattedDate = formatDate(currentDate);
dateElement.innerText = formattedDate;

/**
 * Format a date as DD/MM/YYYY
 * @param {Date} date - The date to format
 * @returns {string} - The formatted date string
 */
function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

// Function to open the modal
function openModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "none";
}

// Add an event listener to the "Contact" link
const contactLink = document.querySelector("#menu .links li:nth-child(3) a");
contactLink.addEventListener("click", openModal);
