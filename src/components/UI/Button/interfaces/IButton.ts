import { IComponentUIColor, IComponentUISize } from "../../interfacesUI";

export interface IButton {
    animated: boolean,
    color: IComponentUIColor,
    name: string,
    size: IComponentUISize,
    loading?: boolean,
    disabled?: boolean,
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}