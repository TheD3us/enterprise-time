import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAppComponent } from './component/base-app/base-app.component';
import { Resource } from './entities/resource';

const routes: Routes = [
  {path: 'ressource',
  loadChildren: () => import('./module/resources/resources.module').then(m => m.ResourcesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
