const header = document.querySelector('.header')
const darkModeBtn = document.querySelector('.dark-mode')
const searchBox = document.querySelector('.search')
const select = document.querySelector('.filter-region')
const cards = document.querySelector('.cards')
const miniCards = document.querySelector('.card')
const dataURL = 'https://restcountries.com/v3.1/all'
const selector  = document.querySelector('select')

selector.addEventListener('change', ()=>{
   
    searchCountry(searchBox .value, dataURL, cardGenerator, cards)
    !searchBox.value && (fillCards(dataURL, cardGenerator, cards))
    
})




searchBox.addEventListener('input', (event) => {
    searchCountry(event.target.value, dataURL, cardGenerator, cards)
    !event.target.value && (fillCards(dataURL, cardGenerator, cards))
})

const cardGenerator = (imageURL, title, population, region, capital) => {
    
    return (
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

// const getCard = async(dataURL, render, mount, target)=>{
//     const response =  await fetch(dataURL)
//     const data = await response.json()
//     targetCard = data.filter(item => {
//         return item.name.common = target
//     })
// }






const fillCards = async (dataURL, render, mount) => {

    const response = await fetch(dataURL)
    const data = await response.json()
    data.forEach(item => {

        mount.innerHTML += render(item.flags.svg, item.name.common, item.population, item.continents, item.capital[0])
        
        // document.querySelectorAll('.card').forEach(card=>{
        //     card.addEventListener('click', (event)=>{
        //      
        //      console.log(keyValue)
        //       document.getElementById('root').innerHTML+=new Card().render(item.flags.svg, item.name.common, item.population, item.continents, item.capital[0])
        //     })
        // })


        document.querySelectorAll('.card').forEach(card=>{
            card.addEventListener('click', (event)=>{
                let keyValue = event.target.querySelector('.card-title').textContent
                console.log(keyValue)
                let thatCountry = data.filter(item => item.name.common === keyValue)[0]
            
                console.log(thatCountry)
                console.log(document.getElementById('details'))
                document.getElementById('details').innerHTML+=new Card().render(thatCountry.flags.svg, thatCountry.name.common, thatCountry.population, thatCountry.continents, thatCountry.capital[0])

            })
        })
        

    })

   


}


const searchCountry = async (targetCountry, dataURL, render, mount) => {
    const response = await fetch(dataURL)
    const data = await response.json()
    const country = data.filter(item => {
        // if(selector.value==='all') selector.value = true
        console.log(selector.value)
       return item.name.common.toUpperCase() === targetCountry.toUpperCase() && selector.value === "all" ? true : item.continents[0].toUpperCase() === selector.value
})
    console.log(country)
    mount.innerHTML = render(country[0].flags.svg, country[0].name.common, country[0].population, country[0].continents, country[0].capital[0])
}


// const searchByRegions = async (region, dataURL, render, mount) => {
//     const response = await fetch(`${dataURL}/${region}`)
//     const data = await response.json()
//     data.forEach(item => {

//         mount.innerHTML += render(item.flags.svg, item.name.common, item.population, item.continents, item.capital[0])

//     })
// }




!state.search && fillCards(dataURL, cardGenerator, cards)
