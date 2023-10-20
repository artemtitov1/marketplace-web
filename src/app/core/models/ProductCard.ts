export interface ProductCard {
    id: number,
    owner: string | undefined,
    title: string | undefined,
    expire_date: string,
    highest_bid: number | undefined,
    likes: number | undefined,
}