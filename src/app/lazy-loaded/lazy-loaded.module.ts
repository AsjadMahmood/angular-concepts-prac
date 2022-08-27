import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experiment1Component } from './experiment1/experiment1.component';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';



@NgModule({
  declarations: [Experiment1Component],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ]
})
export class LazyLoadedModule { }
