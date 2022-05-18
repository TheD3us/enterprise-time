import { Injectable } from '@angular/core';
import { Resource } from '../../../entities/resource';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private _resources : Resource[] = [];
  /**
   * AddResource
   */ 
  public AddResource( resource : Resource) : boolean {
    
    
    if(_.maxBy(this._resources, r => r.id) == undefined){
      resource.id = 1;
    }else{
      const maxResource: Resource = _.maxBy(this._resources, r => r.id);
      resource.id = maxResource.id + 1;
    }
    this._resources.push(resource);
      return true;
  }

  public GetAllResources() : Resource[] {
      return this._resources;
  }

  public UpdateResource(resource : Resource) : boolean {
    
  
    
    return true;
  }

  public GetResource(id : number) : Resource {
    return this._resources.find(r => r.id == id);
  }

  public DeleteResource(id: Resource | number) : boolean{
    _.remove(this._resources, r => r.id == id);
    return true;
  }


  constructor() { }
}
