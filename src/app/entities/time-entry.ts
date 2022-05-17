import { BaseEntity } from "./base-entity";
import { Cost } from "./cost";

export class TimeEntry extends BaseEntity{
    
        public quantity: number;
        public cost: Cost;
        public period?: Period;
        public date: Date;
}

export declare type Period = 'day' | 'hour';