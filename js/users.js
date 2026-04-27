// ─── BASE DE USUARIOS ────────────────────────────────────────
// Cada usuario tiene: email, contraseña, rol y nombre completo

const users = [
  // ROL: usuario (2 cuentas)
  { user: "user1@sportclub.cl",  password: "1234", role: "user",  name: "Juan Martínez" },
  { user: "user2@sportclub.cl",  password: "5678", role: "user",  name: "Valeria Soto" },

  // ROL: coach (2 cuentas)
  { user: "coach1@sportclub.cl", password: "1234", role: "coach", name: "Roberto Silva" },
  { user: "coach2@sportclub.cl", password: "5678", role: "coach", name: "Ana López" },

  // ROL: admin (2 cuentas)
  { user: "admin1@sportclub.cl", password: "1234", role: "admin", name: "Andrea García" },
  { user: "admin2@sportclub.cl", password: "5678", role: "admin", name: "Carlos Rojas" }
];
