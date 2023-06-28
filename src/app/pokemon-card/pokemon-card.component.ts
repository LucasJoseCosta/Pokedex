import { Component, Input } from '@angular/core';
import { Pokemon, getPokemonImage, getPokemonNumber } from 'src/models/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;


  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;

}
