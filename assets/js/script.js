 /* document.addEventListener("DOMContentLoaded", () => {
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
  
}); */

document.addEventListener("DOMContentLoaded", () => {
  const btnTopo = document.getElementById("btn-topo");
  const toggle = document.getElementById("toggle-dark");
  const icon = toggle.querySelector("span");

  // Função para atualizar o ícone
  function atualizarIconeTema() {
    if (document.body.classList.contains("dark")) {
      icon.textContent = "light_mode"; // ☀️
    } else {
      icon.textContent = "dark_mode"; // 🌙
    }
  }

  // Aplica tema salvo
  if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
  }

  atualizarIconeTema();

  // Botão voltar ao topo
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Alternar tema e salvar no localStorage
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("tema", "dark");
    } else {
      localStorage.setItem("tema", "light");
    }

    atualizarIconeTema(); // ← atualiza o ícone
  });
});

