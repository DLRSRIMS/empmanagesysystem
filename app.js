document.getElementById("loginForm").onsubmit = function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "dlrsr2025") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginError").textContent = "Invalid credentials!";
  }
};
