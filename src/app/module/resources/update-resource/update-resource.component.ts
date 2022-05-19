import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Resource } from 'src/app/entities/resource';
import { ResourcesService } from '../service/resources.service';

@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.scss']
})
export class UpdateResourceComponent implements OnInit {
  id: number;
  public resource : Resource;
  constructor(private route: ActivatedRoute,
    private resourceService: ResourcesService ,
    private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.resourceService.GetResource(this.id).subscribe((resourceOriginale : Resource) => {
      
      this.resource = new Resource();
      Object.assign(this.resource, resourceOriginale);
    });
    
  }

  public updateResource() : void {
    
    this.resourceService.UpdateResource(this.resource).subscribe(succes => {
      if(succes){
        this.router.navigate(['ressource']);
      }
    }) 
  }

}
