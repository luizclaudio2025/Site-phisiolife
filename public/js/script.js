function initMap() {
  const placeId = "ChIJR4-g7iqFWZMRGbXZgSdvQ5Q";
  const track = document.getElementById("reviews-track");

  const service = new google.maps.places.PlacesService(
    document.createElement("div")
  );

  service.getDetails(
    {
      placeId,
      fields: ["reviews"]
    },
    (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && place.reviews) {

        track.innerHTML = "";

        //  Aleatoriza
        let reviews = place.reviews.sort(() => Math.random() - 0.5);

        // Google retorna no máximo 5
        reviews = reviews.slice(0, 5);

        // cria cards
        reviews.forEach(r => track.innerHTML += criarCard(r));

        // duplica para carrossel infinito
        reviews.forEach(r => track.innerHTML += criarCard(r));

      } else {
        track.innerHTML = "<p>Não foi possível carregar avaliações.</p>";
      }
    }
  );
}

function criarCard(review) {
  return `
    <div class="review-card">
      <div class="review-header">
        <img src="${review.profile_photo_url || 'https://via.placeholder.com/50'}"
             class="review-photo">
        <div>
          <div class="review-name">${review.author_name}</div>
          <div class="stars">★★★★★</div>
        </div>
      </div>
      <p class="review-text">"${review.text}"</p>
    </div>
  `;
}