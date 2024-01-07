import { FC } from "react";
import "../../styles/_layouts/_footer.scss";
import Brand from "../Brand/Brand";

const Footer: FC = () => {
    return (
        <footer className="footer">
        <div className="footer__container">
            <div className="footer__social" >
                <h3>follow</h3>
                <span className="footer__url" ><a href="/">Fb</a></span>
                <span className="footer__url" ><a href="/">Instagram</a></span>
                <span className="footer__url" ><a href="/">Tiktok</a></span>
            </div>
            <div className="footer__brand">
                <Brand size="small" />
                <h3>Made with <span>LOVE</span></h3>
            </div>
            <div className="footer__faq">
                <h3>general</h3>
                <span className="footer__url" ><a href="/">About</a></span>
                <span className="footer__url" ><a href="/">Contact us</a></span>
                <span className="footer__url" ><a href="/">FAQ</a></span>
            </div>
            
        </div>
        </footer>
    )
}

export default Footer;