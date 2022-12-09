class Card{
    render(imageURL, title, population, region, capital){
        return(
            
            `
            <div class="card-overlay">
            <div class="card">
            <img src="${imageURL}" alt="" class="country">
            <div class="card-content">
            <div class="card-title"><strong>${title}</strong></div>
            <div class="population"><strong>Population:</strong> ${population}</div>
            <div class="region"><strong>Region:</strong> ${region}</div>
            <div class="capital"><strong>Capital:</strong> ${capital}</div>
            </div>
        </div>
            </div>

            `
        )
    }
}