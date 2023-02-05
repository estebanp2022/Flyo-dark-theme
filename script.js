const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // Show light icon
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

// Listen for toggle button click
themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  // Toggle icon
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // If is set in localstorage
  if (localStorage.getItem("color-theme")) {
    // If light, make dark and save in localstorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If not in localstorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}

// email validation
const email = document.querySelector(".email");
const submitBtn = document.querySelector(".btn");
const error = document.querySelector(".err-message");
const form = document.querySelector(".email-form");

// prevent browser from showing default validation error message
document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
    };
  })(),
  true
);

function clearMessage() {
  error.textContent = "";
}

// custom error message after form is incorrectly submitted
submitBtn.addEventListener("click", function () {
  if (email.validity.typeMismatch) {
    error.textContent = "Oops! Please check your email";
    error.style.color = "red";
  } else if (email.value.length === 0) {
    error.textContent = "Oops! Please add your email";
    error.style.color = "red";
  } else {
    error.style.color = "#62e0d9";
    error.textContent = "Thank you!";
  }
  form.reset();
  setTimeout(clearMessage, 3000);
});
