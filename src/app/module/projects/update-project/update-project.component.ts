import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/entities/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  id: number;
  public project : Project;
  constructor(private route: ActivatedRoute,
    private projectService: ProjectService ,
    private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.projectService.GetProject(this.id).subscribe((projectOriginal : Project) => {
      
      this.project = new Project();
      Object.assign(this.project, projectOriginal);
    });
  }

  public updateProject() : void {
    this.projectService.UpdateProject(this.project).subscribe(succes => {
      if(succes){
        this.router.navigate(['projet']);
      }
    })
  }

}
