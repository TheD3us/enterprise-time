import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { ResourcesRoutingModule } from './project-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';



@NgModule({
  declarations: [
    ListProjectComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResourcesRoutingModule,
    CoreModule
  ]
})
export class ProjectsModule { }
