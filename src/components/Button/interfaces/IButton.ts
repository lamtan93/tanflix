export interface IButton {
    animated: boolean,
    color: 'white' | 'orange',
    title: string,
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}