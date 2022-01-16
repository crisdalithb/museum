let museum = new Museum("Bird Museum", "El museo de las aves web muestra las imágenes de las aves más exóticas con una breve descripción sobre ellas para que usted las conozca");
museum.initializeGallery();

const artPieces = museum.getPieces();

document.getElementById("piece0").addEventListener("click", displayInfo);
document.getElementById("piece1").addEventListener("mouseover", displayInfo);
document.getElementById("piece2").addEventListener("dblclick", displayInfo);
document.getElementById("piece3").addEventListener("mouseup", displayInfo);
document.getElementById("piece4").addEventListener("mousedown", displayInfo);

function displayInfo(){
  let position = this.id.replace("piece", "");
  let overlay = document.getElementById("overlay");
  overlay.style.opacity = 1;
  overlay.innerHTML = artPieces[position].getDescription();
}
