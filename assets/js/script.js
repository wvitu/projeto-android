document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-dark");

  // Aplica o tema salvo (se houver)
  if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
  }

  // Alternar e salvar preferência
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("tema", "dark");
    } else {
      localStorage.setItem("tema", "light");
    }
  });
  
});

