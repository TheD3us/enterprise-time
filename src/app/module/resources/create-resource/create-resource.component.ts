import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from 'src/app/entities/resource';
import { ResourcesService } from '../service/resources.service';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss']
})
export class CreateResourceComponent implements OnInit {
  
  public resource : Resource;
  constructor(private resourceService: ResourcesService ,
    private router: Router) { }

  ngOnInit(): void {
    this.resource = new Resource();
  }

  public addResource() : void {
    this.resourceService.AddResource(this.resource).subscribe(succes => {
      if(succes){
        this.router.navigate(['ressource']);
      }
    }) 
  }
}
