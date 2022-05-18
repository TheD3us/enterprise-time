import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from '../service/resources.service';

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resource.component.html',
  styleUrls: ['./delete-resource.component.scss']
})
export class DeleteResourceComponent implements OnInit {
  id : number;
  constructor(private route: ActivatedRoute,
    private resourceService: ResourcesService ,
    private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.resourceService.DeleteResource(this.id)){
      this.router.navigate(['ressource']);
    }
  }
}
