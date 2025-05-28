const renderCard = require("./renderCard");

$.get("https://students-api.up.railway.app/movies").done((data) => {
    renderCard(data);
  }).fail(() => {
     alert("Fallo al cargar las imágenes.");
   })
   .always(() => {
     console.log("La solicitud ha terminado (éxito o error).");
//     // Aquí podrías ocultar un spinner o volver a habilitar un botón
   });

