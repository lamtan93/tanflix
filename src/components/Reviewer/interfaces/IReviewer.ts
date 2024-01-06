interface IReview {
    reviewerId: number,
    reviewerName: string,
    reviewerImg: string,
    reviewerStars: number,
    reviewerMessage: string,
}

export interface IReviewerList {
    reviewerList: IReview[];
};