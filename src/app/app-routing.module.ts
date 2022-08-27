import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentalComponent } from './shared/components/experimental/experimental.component';
import { LazyLoadedModule } from './lazy-loaded/lazy-loaded.module';

const routes: Routes = [
  { path: '', component: ExperimentalComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazy-loaded/lazy-loaded.module').then((m) => m.LazyLoadedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }