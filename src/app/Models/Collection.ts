export class CollectionsListItem
{
    id: string;
    name: string;
}

export class CollectionView
{
    id: string;
    name: string;
    privateMode: boolean;
    gridDisplay: boolean;
    collectionViewItems: Array<CollectionViewItem>;
}

export class CollectionViewItem
{
    pos: number;
    id: string;
    name: string;
    thumbnailUri: string;
}

export class CollectionItemView
{
    collectionId: string;
    collectionName: string;
    id: string;
    name: string;
    description: string;
    showImage: boolean;
    imageUrl: string;
}

export class CollectionSettings
{
    id: string;
    name: string;
    privateMode: boolean;
    imageEnabled: boolean;
    gridDisplay: boolean;
}