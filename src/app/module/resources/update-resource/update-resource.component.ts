import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.resource = this.resourceService.GetResource(this.id);
    
  }

  public updateResource() : void {
    if (this.resourceService.UpdateResource(this.resource)) {
      // On navigue vers la liste des ressources
      this.router.navigate(['ressource']);
    } 
  }

}
