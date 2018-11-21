export class CollectionsListItem
{
    id: string;
    name: string;
}

export class CollectionView
{
    id: string;
    name: string;
    gridDisplay: boolean;
    collectionViewItems: Array<CollectionViewItem>;
}

export class CollectionViewItem
{
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