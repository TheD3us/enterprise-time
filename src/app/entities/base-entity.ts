export class BaseEntity{

    public id: number;
}

export class BaseEntityWithLabel extends BaseEntity{
    public code: string;
    public label: string;
}