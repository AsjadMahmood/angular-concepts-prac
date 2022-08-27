import { Component } from '@angular/core';
import { StarWarsService } from './shared/services/star-wars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-essential-prac';

  constructor(private starWarsService:StarWarsService) {}
  
  ngOnInit() {
    this.starWarsService.getStarwarCharacter().subscribe(json => console.log(json));

    this.starWarsService.getWazir().subscribe(json => console.log(json));

    // let ala = this.starWarsService.getWazir()
    // .pipe(mergeMap(character => this.http.get(character.homeworld)));
  }

}