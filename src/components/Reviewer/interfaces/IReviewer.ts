interface IReviewItem {
    id: number,
    name: string,
    img: string,
    stars: number,
    message: string,
    date?: string,
}

export interface IReviewer {
    title: string,
    withVideoBackground?: boolean,
    reviewerList: IReviewItem[];
};