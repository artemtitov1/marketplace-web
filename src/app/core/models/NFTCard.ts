export interface NFTCard {
  id: number;
  collectionTitle?: string;
  title?: string;
  owner?: string;
  price?: number;
  quantity?: number;
  from?: number;
  to?: number;
  time?: Date;
}