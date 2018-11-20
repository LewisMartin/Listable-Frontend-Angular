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