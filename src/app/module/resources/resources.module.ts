import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { FormsModule } from '@angular/forms';
import { UpdateResourceComponent } from './update-resource/update-resource.component';
import { DeleteResourceComponent } from './delete-resource/delete-resource.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ListResourceComponent,
    CreateResourceComponent,
    UpdateResourceComponent,
    DeleteResourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResourcesRoutingModule,
    CoreModule
  ]
})
export class ResourcesModule { }
