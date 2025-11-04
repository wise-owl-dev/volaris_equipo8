document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".link-menu");
  const tabContents = document.querySelectorAll(".tab-seccion");

  function switchTab(event, tabName) {
    // Prevenir el comportamiento default del enlace
    if (event) {
      event.preventDefault();
    }

    // Remover 'activo' de todos los botones
    tabButtons.forEach((btn) => {
      btn.classList.remove("activo");
    });

    // Remover 'active' de todos los contenidos
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    // Agregar 'activo' al botón clickeado
    const clickedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (clickedButton) {
      clickedButton.classList.add("activo");
    }

    // Mostrar el contenido correspondiente
    const targetContent = document.getElementById(tabName);
    if (targetContent) {
      targetContent.classList.add("active");
    }

    // Guardar en localStorage
    localStorage.setItem("activeTab", tabName);

    console.log(`Pestaña cambiada a: ${tabName}`);
  }

  // Agregar evento click a cada botón
  tabButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const tabName = this.getAttribute("data-tab");
      switchTab(event, tabName);
    });
  });

  // Restaurar pestaña al cargar
  const savedTab = localStorage.getItem("activeTab");
  if (savedTab && document.getElementById(savedTab)) {
    switchTab(null, savedTab);
  }

  const vueloHotelLinks = document.querySelectorAll(
    'a[href*="vuelo-hotel"], .boton-borde'
  );

  vueloHotelLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "vuelo-hotel/index.html";
    });
  });
});
