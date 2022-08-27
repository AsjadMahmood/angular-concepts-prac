import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentComponent } from './experiment/experiment.component';



const routes: Routes = [
    { path: 'module2', component: ExperimentComponent},
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EagerlyLoadedRoutingModule { }
