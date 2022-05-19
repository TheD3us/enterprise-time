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

  public DeleteResource(id : Project | number) : Observable<boolean>{
    if(id instanceof Project){
      _.remove(this._projet, p => p == id);
    }else{
      _.remove(this._projet, p => p.id == id);
    }
    
    return of(true);
  }

  public GetProject(id : number) : Observable<Project> {
    return of(this._projet.find(r => r.id == id));
  }

  public UpdateProject(project: Project) : Observable<boolean> {
    const projectToUpdate$: Observable<Project> =
      this.GetProject(project.id);

    return projectToUpdate$.pipe(
      // Map permets de transformer un résultat d'observable
      map((projectToUpdate: Project) => {

        if (projectToUpdate == null) {
          throw "Cannot update project";
        }

        // Mapping des valeurs des propriétés de la ressource reçue
        // dans la ressource du service
        Object.assign(projectToUpdate, project);

        // On ne fait pas de mapping manuel, on
        // profite du Object.assign() pour ça
        // resourceToUpdate.code = resource.code;
        // resourceToUpdate.label = resource.label;
        // resourceToUpdate.id = resource.id;

        return true;
      }),
      catchError(e => {
        console.error(e);
        return of(false);
      })
    );
  }

  constructor() { }
}
