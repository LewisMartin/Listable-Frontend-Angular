
export class CollectionQueryResults 
{
    count: number;
    queryResults: Array<CollectionQueryResult>;
}

export class CollectionQueryResult 
{
    id: string;
    name: string;
    collectionSize: number;
    imageEnabled: Boolean;
    pos: number;
}