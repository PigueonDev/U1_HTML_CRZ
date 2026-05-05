// ─── LÓGICA DE DASHBOARDS ────────────────────────────────────

// Recuperar el usuario guardado al iniciar sesión
const user = JSON.parse(localStorage.getItem("user"));

// Protección: si no hay sesión activa, volver al login
if (!user) {
  window.location.href = "login.html";
}

// La API devuelve "full_name", no "name"
const displayName = user.full_name || user.name || user.email;

// Mostrar nombre en #user-name
const nameEl = document.getElementById("user-name");
if (nameEl) nameEl.textContent = displayName;

// Mostrar nombre en #user-name-card (dashboard usuario)
const nameCardEl = document.getElementById("user-name-card");
if (nameCardEl) nameCardEl.textContent = displayName;

// Mostrar email en #user-email
const emailEl = document.getElementById("user-email");
if (emailEl) emailEl.textContent = user.email;

// Mostrar rol en #user-role-label
const roleEl = document.getElementById("user-role-label");
if (roleEl) roleEl.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
