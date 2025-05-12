// Event: Click
document.getElementById("changeBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Event: Hover
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => hoverBox.style.background = "lightblue");
hoverBox.addEventListener("mouseleave", () => hoverBox.style.background = "lightgray");

// Event: Keypress
document.getElementById("keyInput").addEventListener("keyup", (e) => {
  console.log(`You typed: ${e.key}`);
});

// Event: Double click or long press
const secretBox = document.getElementById("secretBox");
secretBox.addEventListener("dblclick", () => {
  secretBox.textContent = "🎉 Secret unlocked!";
});
let pressTimer;
secretBox.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    secretBox.textContent = "🕵️ Long press detected!";
  }, 1000);
});
secretBox.addEventListener("mouseup", () => clearTimeout(pressTimer));

// Interactive: Change button color
document.getElementById("colorBtn").addEventListener("click", function () {
  this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// Interactive: Tabs
const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("tab-content");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    content.textContent = `You selected Tab ${tab.dataset.tab}`;
  });
});

// Gallery: Slideshow
const images = [
  "https://via.placeholder.com/300x200/ff7f7f",
  "https://via.placeholder.com/300x200/7fbfff",
  "https://via.placeholder.com/300x200/7fff7f"
];
let current = 0;
document.getElementById("nextImage").addEventListener("click", () => {
  current = (current + 1) % images.length;
  document.getElementById("slideshow").src = images[current];
});

// Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!email.value.includes("@")) {
    feedback.textContent = "❌ Invalid email format!";
    feedback.style.color = "red";
  } else if (password.value.length < 8) {
    feedback.textContent = "❌ Password must be at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";
  }
});

// Bonus: Real-time feedback
document.getElementById("password").addEventListener("input", (e) => {
  if (e.target.value.length < 8) {
    feedback.textContent = "Password too short!";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Looks good!";
    feedback.style.color = "blue";
  }
});
