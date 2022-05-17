import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListResourceComponent,
    CreateResourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
