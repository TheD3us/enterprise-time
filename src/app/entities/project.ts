import { BaseEntityWithLabel } from "./base-entity";
import { Customer } from "./customer";

export class Project extends BaseEntityWithLabel{
    
        public budget?: number;
        public customer?: Customer;
        

        
}