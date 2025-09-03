document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleTheme");

  if (!btn) {
    console.error('No se encontró el botón con id="toggleTheme"');
    return;
  }

  let light = false;

  function setTheme() {
    document.documentElement.style.setProperty("--bg", light ? "#f3f6ff" : "#0f172a");
    document.documentElement.style.setProperty("--panel", light ? "#ffffff" : "#0b1226");
    document.documentElement.style.setProperty("--card", light ? "#ffffff" : "#111b36");
    document.documentElement.style.setProperty("--soft", light ? "#eef2ff" : "#1b2647");
    document.documentElement.style.setProperty("--text", light ? "#0b1226" : "#eaeefc");
    document.documentElement.style.setProperty("--muted", light ? "#475569" : "#a7b0ce");
    document.documentElement.style.setProperty("--chip", light ? "#eef2ff" : "#1e293b");
    btn.textContent = light ? "Modo oscuro" : "Modo claro";
  }

  // Inicializar
  setTheme();

  // Al hacer click
  btn.addEventListener("click", () => {
    light = !light;
    setTheme();
  });
});