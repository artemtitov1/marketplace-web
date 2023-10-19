export interface ProductCard {
    id: number,
    owner: Promise<string | undefined> | undefined,
    title: Promise<string  | undefined> | undefined,
    expire_date: Date,
    highest_bid: Promise<number> | undefined,
    likes: Promise<number> | undefined,
}