export interface ICard {
    type?: "trending" | "others",
    id: number,
    name: string,
    description: string,
    imgSrc: string,
}