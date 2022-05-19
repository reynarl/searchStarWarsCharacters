const character = JSON.parse(file)

console.log(character)

let searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', mostrar_personaje)

function mostrar_personaje(){
  let personaje = buscar_personaje()
  let card = document.getElementById('characterCard')
  let setName = document.getElementById('name')
  let description = document.getElementById('description')
  
  if(personaje){
    setName.innerHTML = personaje.name
    description.innerHTML = `
    <p>Año de nacimiento<br> ${personaje.birth_year}</p>
    <p>Genero<br>${personaje.gender}</p>
    <p>Altura<br>${personaje.height} cm.</p>`
    card.style.display = 'block'
  }else{
    card.style.display = 'none'
  }
  
}

function buscar_personaje(){
  let searchInput = document.getElementById('searchInput').value

  for(let i=0; i<character.results.length;i++){
    if(character.results[i].name == searchInput){
      return character.results[i]
    }
  }
}

// Mostrar todos

let showBtn = document.getElementById('showBtn')
showBtn.addEventListener('click', mostrar_todos)

function mostrar_todos(){
  // let allCards = document.getElementById('allCards')
  let containCharacter = document.getElementById('containCharacter')
  // let charactersResults = ''

  for(let i=0; i<character.results.length;i++){
    let newCard = document.createElement('div')
    newCard.className = 'card'
    newCard.innerHTML = `
    <img class="sw-logo" src="img/sw_logo.svg">
    <p class="nameTitle">${character.results[i].name}</p>`
    containCharacter.appendChild(newCard)
  }
  // allCards.innerHTML = charactersResults
}

  
