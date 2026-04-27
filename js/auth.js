// ─── LÓGICA DE AUTENTICACIÓN ─────────────────────────────────

function handleLogin() {
  const email    = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  // Limpiar mensaje anterior
  errorMsg.textContent = "";

  // Validar que los campos no estén vacíos
  if (!email || !password) {
    errorMsg.textContent = "Por favor completa todos los campos.";
    return;
  }

  // Buscar el usuario en el array
  const foundUser = users.find(u => u.user === email && u.password === password);

  // Si no se encontró → error
  if (!foundUser) {
    errorMsg.textContent = "Credenciales incorrectas. Intenta de nuevo.";
    return;
  }

  // Guardar usuario en localStorage
  localStorage.setItem("user", JSON.stringify(foundUser));

  // Redirigir según el rol
  if (foundUser.role === "user")       window.location.href = "dashboard-usuario.html";
  else if (foundUser.role === "coach") window.location.href = "dashboard-coach.html";
  else if (foundUser.role === "admin") window.location.href = "dashboard-admin.html";
}

function cerrarSesion() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

// Permitir login con tecla Enter
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".form-input");
  inputs.forEach(input => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") handleLogin();
    });
  });
});
