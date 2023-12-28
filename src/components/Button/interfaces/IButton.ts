type IButtonColor = 'white' | 'orange';
type IButtonSize = 'big' | 'med' | 'small' | 'extra-small';
export interface IButton {
    animated: boolean,
    color: IButtonColor,
    title: string,
    size: IButtonSize,
    loading?: boolean,
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}