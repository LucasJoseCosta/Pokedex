import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, from, map, mergeMap, switchMap } from 'rxjs';
import { Pokemon } from 'src/models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100'

    this.httpClient.get<any>(allPokemonsUrl).pipe(
      map(value => value.results),
      map(value => {
        console.log(value);
        return from(value).pipe(
          mergeMap((v:any) => this.httpClient.get(v.url))
        );
      }),
      mergeMap(value => value)
    ).subscribe((result:any) =>{
      console.log(result)
      const pokemon: Pokemon = {
        image: result.sprites.front_default,
        number: result.id,
        name: result.name,
        type: result.types.map((t:any)=> t.type.name),
      }
      this.pokemons.push(pokemon);
    });
  }
}
