import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { ListProjectComponent } from "./list-project/list-project.component";
import { UpdateProjectComponent } from "./update-project/update-project.component";

const routes: Routes = [
 //   { path: 'delete/:id', component: DeleteProjectComponent},
    { path: 'update/:id', component: UpdateProjectComponent},
    { path: 'create', component: CreateProjectComponent},
    { path: '**', component: ListProjectComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ResourcesRoutingModule { }