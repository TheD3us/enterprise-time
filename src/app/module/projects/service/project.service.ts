import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { catchError, map, Observable, of } from 'rxjs';
import { Project } from 'src/app/entities/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projet : Project[] = [];

  public AddProject(project : Project): Observable<boolean>{
    return of(null).pipe(
      map(() => {
        if(_.maxBy(this._projet, r => r.id) == undefined){
        project.id = 1;
      }else{
        const maxResource: Project = _.maxBy(this._projet, r => r.id);
        project.id = maxResource.id + 1;
      }
      this._projet.push(project);
        return true;
      }),
        catchError(e =>{
          console.error(e);
          return of(false);
        })
    )}
  

  public GetAllProjects(): Observable<Project[]>{
    return of(this._projet);
  }

  constructor() { }
}
