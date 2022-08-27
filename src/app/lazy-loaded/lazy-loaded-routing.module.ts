import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Experiment1Component } from './experiment1/experiment1.component';


const routes: Routes = [
  { path: 'module1', component: Experiment1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }
