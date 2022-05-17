import { ResourceLoader } from "@angular/compiler";
import { BaseEntity } from "./base-entity";
import { Project } from "./project";

export class Cost extends BaseEntity{
    
        public project: Project;
        public resource: ResourceLoader;
        public dailyCost: number;
        public hourlyCost: number;

}