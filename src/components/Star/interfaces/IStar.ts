export interface IStar {
    id: number;
    isLiked: boolean;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>,id: number) => void;
}