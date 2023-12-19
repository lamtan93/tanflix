export interface IStar {
    id: number;
    isLiked: boolean;
    onClick: (id: number) => void;
}