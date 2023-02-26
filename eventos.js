function miFuncion(nombre_ID) {
  var x = document.getElementById(nombre_ID);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}