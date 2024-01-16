import { ComponentPropsWithoutRef } from "react"

export interface IInput extends ComponentPropsWithoutRef<'input'>{
    labelName: string,
}