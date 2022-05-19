import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'ressource',
  loadChildren: () => import('./module/resources/resources.module').then(m => m.ResourcesModule)
  },
  {path: 'projet',
  loadChildren: () => import('./module/projects/projects.module').then(m => m.ProjectsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
