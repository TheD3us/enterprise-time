import { Injectable } from '@angular/core';
import { Resource } from '../../../entities/resource';
import * as _ from 'lodash';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private _resources : Resource[] = [];
  /**
   * AddResource
   */ 
  public AddResource( resource : Resource) : Observable<boolean> {
    
    return of(null).pipe(
      map(() => {
        if(_.maxBy(this._resources, r => r.id) == undefined){
        resource.id = 1;
      }else{
        const maxResource: Resource = _.maxBy(this._resources, r => r.id);
        resource.id = maxResource.id + 1;
      }
      this._resources.push(resource);
        return true;
      }),
        catchError(e =>{
          console.error(e);
          return of(false);
        })
    )}
    
  

  public GetAllResources() : Observable<Resource[]> {
      return of(this._resources);
  }

  public UpdateResource(resource : Resource) : Observable<boolean> {
    const resourceToUpdate$: Observable<Resource> =
      this.GetResource(resource.id);

    return resourceToUpdate$.pipe(
      // Map permets de transformer un résultat d'observable
      map((resourceToUpdate: Resource) => {

        if (resourceToUpdate == null) {
          throw "Cannot update resource";
        }

        // Mapping des valeurs des propriétés de la ressource reçue
        // dans la ressource du service
        Object.assign(resourceToUpdate, resource);

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

  public GetResource(id : number) : Observable<Resource> {
    return of(this._resources.find(r => r.id == id));
  }

  public DeleteResource(id: Resource | number) : Observable<boolean>{
    if(id instanceof Resource){
      _.remove(this._resources, r => r == id);
    }else{
      _.remove(this._resources, r => r.id == id);
    }
    
    return of(true);
  }


  constructor() { }
}
