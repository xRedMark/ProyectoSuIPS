let elementosAcordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i < elementosAcordeon.length; i++) {
  elementosAcordeon[i].addEventListener("click", function () {
    // Obtener todos los paneles
    let paneles = document.querySelectorAll(".panel");

    // Ocultar todos los paneles
    for (let j = 0; j < paneles.length; j++) {
      paneles[j].style.display = "none";
    }

    // Mostrar el panel correspondiente al elemento actual
    let panel = this.nextElementSibling;
    panel.style.display = "block";
    panel.classList.add("fade-in");
    // Alternar la clase "active" para el elemento actual
    this.classList.toggle("active");
  });
}
