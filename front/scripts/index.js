 $.get("https://students-api.up.railway.app/movies").done((data) => {
 const contenedor = document.getElementById("peliculas");

data.forEach(pelicula =>{
    console.log(pelicula);
    const card = `
    <div class="col-xl-4 col-md-6 col-xs-10">
    <h6 class="titulo">${pelicula.title}</h6>
    <img src="${pelicula.poster}" alt="${pelicula.title}">}
      <p class="card-text">
            <strong>Año:</strong> ${pelicula.year}<br>
            <strong>Director:</strong> ${pelicula.director}<br>
            <strong>Duración:</strong> ${pelicula.duration}<br>
            <strong>Géneros:</strong> ${pelicula.genre.join(", ")}<br>
            <strong>Calificación:</strong> ${pelicula.rate}
          </p> 
    </div>
    `;
    contenedor.innerHTML += card;
});
 }).fail(() => {
    alert("Fallo al cargar las imágenes.");
  })
  .always(() => {
    console.log("La solicitud ha terminado (éxito o error).");
    // Aquí podrías ocultar un spinner o volver a habilitar un botón
  });



