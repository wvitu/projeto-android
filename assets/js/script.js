document.addEventListener("DOMContentLoaded", () => {
  const btnTopo = document.getElementById("btn-topo");
  const toggle = document.getElementById("toggle-dark");

  // Botão "voltar ao topo"
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Dark mode (com persistência)
  if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("tema", "dark");
    } else {
      localStorage.setItem("tema", "light");
    }
  });
});
