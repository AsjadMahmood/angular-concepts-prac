import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentComponent } from './experiment/experiment.component';
import { EagerlyLoadedRoutingModule } from './eagerly-loaded-routing.module';

@NgModule({
  declarations: [ExperimentComponent],
  imports: [
    CommonModule,
    EagerlyLoadedRoutingModule
  ]
})
export class EagerlyLoadedModule { }