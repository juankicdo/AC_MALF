
const modal = document.getElementById("modalImagen");
const imgGrande = document.getElementById("imgGrande");
const imagenes = document.querySelectorAll(".category-item img");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    imgGrande.src = img.src;
  });
});

document.querySelector(".cerrar").addEventListener("click", () => {
  modal.style.display = "none";
});