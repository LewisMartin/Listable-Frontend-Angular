export class CollectionListItem
{
    id: string;
    Name: string;
}

export class Collection 
{
    id: string;
    Owner: string;
    Name: string;
    ImageEnabled: boolean;
    DisplayFormat: number;
    CollectionItems: Array<CollectionItem>;
}

export class CollectionItem
{
    Id: string;
    Name: string;
    Description: string;
    ImageId: string;
}