import { FC } from "react";
import "../../styles/_components/_brand.scss";
import { IBrand } from "./interfaces/IBrand";

const Brand: FC<IBrand> = ({ size }) => {
        console.log({size});
    return(
            <a className={`brand brand--${size}`} href="/">
                    <span>T</span>
                    <span>A</span>
                    <span>N</span>
                    <span>F</span>
                    <span>L</span>
                    <span>I</span>
                    <span>X</span>
            </a>
    )
}

export default Brand;