export function createPokemonInformation(info){
  const nodeName = document.querySelector('h4')
  const nodePokedex= document.querySelector('h5')
  nodeName.textContent = `${info.name}`
  nodePokedex.textContent = `${info.id}`
  const nodeImg = document.querySelector('.card-container__img img')
  nodeImg.src = `${info.sprites.front_default}`
}
