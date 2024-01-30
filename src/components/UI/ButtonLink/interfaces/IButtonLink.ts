import { ComponentPropsWithoutRef } from 'react';
import { IComponentUIColor, IComponentUISize } from '../../interfacesUI';

export interface IButtonLink extends ComponentPropsWithoutRef<'a'>{
    animated: boolean,
    color: IComponentUIColor,
    name: string,
    size: IComponentUISize,
    loading?: boolean,
    disabled?: boolean,
    // onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}
