const root = document.getElementById('root')

class RenderDOM {

    static render = (mount) => {
        mount.innerHTML =
            `
        <header class="header">
        <div class="title">Where in the world?</div>
        <div class="dark-mode">Dark Mode</div>
    </header>
    <main class="main-container">
        <div class="controllers">
            <div class="search-box">
            <input type="text" class="search">
            </div>
            <div style="display: inline-flex; justify-content: center; align-items: center;" class="filter-by-region">
                <span>Filter by Region:</span>
                <select name="" id="" class="filter-region">
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
        <div class="cards">
    
    
        </div>
    </main>
                  `
    }


}


const state = {
    search: false
}

const setState = (callback) => {
    callback()
    RenderDOM.render(root)
}

RenderDOM.render(root)