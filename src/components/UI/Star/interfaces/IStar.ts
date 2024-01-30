export interface IStar {
    id: number;
    isLiked: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void;
}
