export interface IPopup {
    name: string,
    children: React.ReactNode | React.ReactElement,
    open: boolean;
    close: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}