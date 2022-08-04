import { pokemonInfoByName } from './calls.js'
import { pokemonInfoById } from './calls.js'

const randomPokemon = Math.ceil(Math.random() * 900)
document.addEventListener('DOMContentLoaded', () => {
  pokemonInfoById(randomPokemon)
})

document.addEventListener('click', (e) => {
  const inputPokemon = document.querySelector('.search-container input')
  if (e.target.matches('.search-container button')) {
    pokemonInfoByName(inputPokemon.value.toLowerCase())
  }
  const pokeId = document.querySelector('h5')
  if (e.target.matches('.card-container__next')) {
    console.log(Number(pokeId.textContent))
    const num = Number(pokeId.textContent) + 1
    pokemonInfoById(num)
  }
  if (e.target.matches('.card-container__prev')) {
    console.log(Number(pokeId.textContent))
    const num = Number(pokeId.textContent) - 1
    pokemonInfoById(num)
  }
})