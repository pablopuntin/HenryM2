

 const contenedor = document.getElementById("peliculas");

function renderCard(data) {  data.forEach(pelicula =>{
    
     const card = `
     <div class="col-xl-4 col-md-6 col-xs-10">
     <h6 class="titulo">${pelicula.title}</h6>
     <img src="${pelicula.poster}" alt="${pelicula.title}">m
       <p class="card-text">
             <strong>Año:</strong> ${pelicula.year}<br>
             <strong>Director:</strong> ${pelicula.director}<br>
             <strong>Duración:</strong> ${pelicula.duration}<br>
             <strong>Géneros:</strong> ${pelicula.genre.join(", ")}<br>
             <strong>Calificación:</strong> ${pelicula.rate}
           </p> 
     </div>
     `
     contenedor.innerHTML += card;
 });}

 module.exports = renderCard;
