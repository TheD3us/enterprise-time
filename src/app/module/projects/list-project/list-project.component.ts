import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/entities/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
  public project$ : Observable<Project[]>;
  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
  this.project$ = this.projectService.GetAllProjects();
  
  }

}
