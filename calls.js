import {createPokemonInformation} from './exports.js'

export async function pokemonInfoByName(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const json = await res.json()
    console.log(res)
    console.log(json)

    console.log(`El id de ${json.name} es ${json.id}`)

    createPokemonInformation(json)
  } catch (error) {
    console.log('Ha habido un error al hacer el fetch', error)
  }
}

export async function pokemonInfoById(name){
  try{
    console.log('name',name)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const json = await res.json()
    console.log('json',json)
    createPokemonInformation(json)
    console.log()

  }catch(e){}
}