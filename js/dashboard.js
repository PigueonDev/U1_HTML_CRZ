// ─── LÓGICA DE DASHBOARDS ────────────────────────────────────

// Recuperar el usuario guardado al iniciar sesión
const user = JSON.parse(localStorage.getItem("user"));

// Protección: si no hay sesión activa, volver al login
if (!user) {
  window.location.href = "login.html";
}

// Mostrar el nombre del usuario donde exista el elemento #user-name
const nameEl = document.getElementById("user-name");
if (nameEl) nameEl.textContent = user.name;

// Mostrar el email donde exista el elemento #user-email
const emailEl = document.getElementById("user-email");
if (emailEl) emailEl.textContent = user.user;

// Mostrar el rol donde exista el elemento #user-role-label
const roleEl = document.getElementById("user-role-label");
if (roleEl) roleEl.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
