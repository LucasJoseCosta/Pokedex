import { Component } from '@angular/core';
import { Pokemon } from 'src/models/Pokemon';
import { Type } from 'src/models/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      type: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivysaur',
      type: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: 'Venusaur',
      type: [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      number: 4,
      name: 'Charmander',
      type: [
        Type.Fire
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      number: 5,
      name: 'Charmeleon',
      type: [
        Type.Fire
      ]
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      number: 6,
      name: 'Charizard',
      type: [
        Type.Fire,
        Type.Flying
      ]
    }
  ];


}
