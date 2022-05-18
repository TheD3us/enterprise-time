import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { DeleteResourceComponent } from './delete-resource/delete-resource.component';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { UpdateResourceComponent } from './update-resource/update-resource.component';

const routes: Routes = [
  { path: 'delete/:id', component: DeleteResourceComponent},
  { path: 'update/:id', component: UpdateResourceComponent},
  { path: 'create', component: CreateResourceComponent},
  { path: '**', component: ListResourceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
