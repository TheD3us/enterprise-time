import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/entities/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  public project : Project;
  constructor(private projectService : ProjectService,
    private router : Router) { }

  ngOnInit(): void {
    this.project = new Project();
  }

  public addProject() : void {
    this.projectService.AddProject(this.project).subscribe(succes => {
      if(succes){
        this.router.navigate(['projet']);
      }
    })
  }
}
