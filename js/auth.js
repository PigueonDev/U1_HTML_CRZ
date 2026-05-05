// ─── LÓGICA DE AUTENTICACIÓN ─────────────────────────────────

async function handleLogin() {
  const email    = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  errorMsg.textContent = "";

  if (!email || !password) {
    errorMsg.textContent = "Por favor completa todos los campos.";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      errorMsg.textContent = data.message || "Credenciales incorrectas.";
      return;
    }

    // Estructura de la API:
    // data.data.token       → JWT
    // data.data.user        → objeto con id, full_name, email, role, etc.
    // data.data.user.role   → "user" | "coach" | "admin"
    const token      = data.data.token;
    const loggedUser = data.data.user;

    // Guardar token y usuario en localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(loggedUser));

    // Redirigir según el rol
    const role = loggedUser.role;
    if (role === "user")       window.location.href = "dashboard-usuario.html";
    else if (role === "coach") window.location.href = "dashboard-coach.html";
    else if (role === "admin") window.location.href = "dashboard-admin.html";
    else {
      errorMsg.textContent = "Rol no reconocido: " + role;
    }

  } catch (error) {
    console.error("Error:", error);
    errorMsg.textContent = "No se pudo conectar con el servidor. ¿Está corriendo en el puerto 3000?";
  }
}

// ─── CERRAR SESIÓN ────────────────────────────────────────────
function cerrarSesion() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

// ─── LOGIN CON TECLA ENTER ────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".form-input");
  inputs.forEach(input => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") handleLogin();
    });
  });
});