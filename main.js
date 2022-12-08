const header = document.querySelector('.header')
const darkModeBtn = document.querySelector('.dark-mode')
const searchBox  = document.querySelector('.search-box')
const select = document.querySelector('.filter-region')
const cards = document.querySelector('.cards')
const dataURL = 'https://restcountries.com/v3.1/all'

const cardGenerator = (imageURL, title, population, region, capital) =>{
    return(
        `
        <div class="card">
        <img src="${imageURL}" alt="" class="country">
        <div class="card-content">
        <div class="card-title"><strong>${title}</strong></div>
        <div class="population"><strong>Population:</strong> ${population}</div>
        <div class="region"><strong>Region:</strong> ${region}</div>
        <div class="capital"><strong>Capital:</strong> ${capital}</div>
        </div>
    </div>
        `
    )
}

const fillCards = async (dataURL, render, mount)=>{

    const response = await fetch(dataURL)
    const data = await response.json()
    data.forEach(item => {
        console.log(item)
        mount.innerHTML += render(item.flags.svg, item.name.common, item.population, item.continents, item.capital[0])

    })
    
}


fillCards(dataURL, cardGenerator, cards)
