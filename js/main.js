//leyendo contenido del JSON
const character = JSON.parse(file)
console.log(character.results)

let card = document.getElementById('characterCard')
let containAll = document.getElementById('containAll')

//obteniendo y añadiendo evento al botón
let searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', mostrar_personaje)

function mostrar_personaje(){
  let personaje = buscar_personaje()
  let setName = document.getElementById('name')
  let description = document.getElementById('description')

  containAll.style.display = 'none'
  
  if(personaje){
    setName.innerHTML = personaje.name
    description.innerHTML = `
    <p>Año de nacimiento<br> ${personaje.birth_year}</p>
    <p>Genero<br>${personaje.gender}</p>
    <p>Altura<br>${personaje.height} cm.</p>
    <p>Color de cabello<br>${personaje.hair_color}</p>
    <p>Color de ojos<br>${personaje.eye_color}</p>
    <p>Color de piel<br>${personaje.skin_color}</p>`
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

function crear_contenedores(){
  let containCharacter = document.getElementById('containCharacter')
  for(let i=0; i<character.results.length;i++){
    let newCard = document.createElement('div')
    newCard.className = 'card cardsAnimation'
    newCard.innerHTML = `
    <img class="sw-logo" src="img/sw_logo.svg">
    <p class="nameTitle">${character.results[i].name}</p>
    <p>Año de nacimiento: ${character.results[i].birth_year}</p>
    <p>Genero<br>${character.results[i].gender}</p>
    <p>Altura<br>${character.results[i].height} cm.</p>`
    containCharacter.appendChild(newCard)
  }
}
crear_contenedores()

function mostrar_todos(){
  card.style.display = 'none'
  containAll.style.display = 'block'
}

  
