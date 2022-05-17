import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { ListResourceComponent } from './list-resource/list-resource.component';

const routes: Routes = [
  { path: 'create', component: CreateResourceComponent},
  { path: '**', component: ListResourceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
