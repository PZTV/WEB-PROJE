document.addEventListener('DOMContentLoaded', () => {
  const apiKey = 'bb045611bb719974d774a06a5a0b9699' // TMDb API anahtarınızı buraya ekleyin
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500' // TMDb'nin görüntü tabanı URL'si

  // İstediğiniz dizilerin TMDb ID'lerini buraya ekleyin
  const tvShowIds = [76331, 76479, 79410] // Örneğin: Game of Thrones, Fear the Walking Dead, Stranger Things

  const tvShowsElement = document.getElementById('tv-shows')

  tvShowIds.forEach((id) => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=tr-TR`
    )
      .then((response) => response.json())
      .then((show) => {
        const listItem = document.createElement('li')
        listItem.className = 'media-item'
        listItem.innerHTML = `
                  <img class="media-poster" src="${imageBaseUrl}${show.poster_path}" alt="${show.name} Poster">
                  <h3 class="text-center">${show.name}</h3>

              `
        tvShowsElement.appendChild(listItem)
      })
      .catch((error) => console.error('Error fetching TV show:', error))
  })
})
