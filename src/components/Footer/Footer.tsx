import { FC } from "react";
import "../../styles/_layouts/_footer.scss";

const Footer: FC = () => {
    return (
        <footer className="footer">
        <div className="footer__container">
            <span><a href="/">about</a></span>
            <span><a href="/">fb</a> | <a href="/">instagram</a> | <a href="/">x</a></span>
            <span>Made with <span>LOVE</span></span>
        </div>
        </footer>
    )
}

export default Footer;