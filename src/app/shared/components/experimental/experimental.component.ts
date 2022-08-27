import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.scss']
})
export class ExperimentalComponent implements OnInit {
  counter:number;

  constructor(private starWarsService:StarWarsService) { }

  ngOnInit(): void {
    
    this.starWarsService.counter$.subscribe((counter:number)=>{
      this.counter = counter;
    })
  }

  increment(){
    this.counter+=1;
    this.starWarsService.updateCounter(this.counter);
  }

}
