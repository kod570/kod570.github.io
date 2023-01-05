const rickandmorthy = fetch('https://rickandmortyapi.com/api/character')
.then(Response => Response.json())
.then(ResponseData => getdata(ResponseData.results))

function getdata(characterArray){
    const getdatconstainer = document.getElementById("article")
    characterArray.forEach(character => {
        getdatconstainer.innerHTML = article.innerHTML + 
        `<div id=character-${character.id}>
        <a href=https://rickandmorty.fandom.com/wiki/${character.name}><img id=${character.name} src=${character.image}></img></a>
        <h2>${character.name}</h2>
        <p>${character.species}</p>
        </div>` 
    });
}