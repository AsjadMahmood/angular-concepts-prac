import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/shared/services/star-wars.service';

@Component({
  selector: 'app-experiment1',
  templateUrl: './experiment1.component.html',
  styleUrls: ['./experiment1.component.scss']
})
export class Experiment1Component implements OnInit {

  counter:number;

  constructor(private starWarsService:StarWarsService) { }

  ngOnInit(): void {
    
    this.starWarsService.counter$.subscribe((counter:number)=>{
      this.counter = counter;
    })
  }

  decrement(){
    this.counter-=1;
    this.starWarsService.updateCounter(this.counter);
  }

}