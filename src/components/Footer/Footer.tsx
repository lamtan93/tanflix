import { FC } from "react";
import "../../styles/_layouts/_footer.scss";

const Footer: FC = () => {
    return (
        <footer className="footer">
        <div className="footer__container">
            <span>About</span>
            <span>Contact: FB | Instagram | X</span>
            <span>Made with love</span>
        </div>
        </footer>
    )
}

export default Footer;