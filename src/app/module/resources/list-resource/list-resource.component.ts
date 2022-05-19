import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from 'src/app/entities/resource';
import { ResourcesService } from '../service/resources.service';


@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.scss']
})
export class ListResourceComponent implements OnInit {
  public resources$: Observable<Resource[]>;

  constructor(private ResourceService : ResourcesService) {  }

  ngOnInit(): void {
    this.resources$= this.ResourceService.GetAllResources();
    
  }



}
