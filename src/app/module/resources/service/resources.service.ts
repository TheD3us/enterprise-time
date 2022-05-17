import { Injectable } from '@angular/core';
import { Resource } from '../../../entities/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private _resources : Resource[] = [];
  /**
   * AddResource
   */ 
  public AddResource( resource : Resource) : boolean {
      this._resources.push(resource);
      return true;
  }

  public GetAllResources() : Resource[] {
      return this._resources;
  }


  constructor() { }
}
