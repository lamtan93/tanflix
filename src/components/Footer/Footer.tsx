import React from 'react';
import { Brand } from '../UI';
import '../../styles/_layouts/_footer.scss';
import Dico from '../../utils/dico';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <h3>{Dico.FOOTER.LIST_FOLLOW.TITLE}</h3>
          <span className="footer__url"><a href="/">{Dico.FOOTER.LIST_FOLLOW.FB}</a></span>
          <span className="footer__url"><a href="/">{Dico.FOOTER.LIST_FOLLOW.INSTAGRAM}</a></span>
          <span className="footer__url"><a href="/">{Dico.FOOTER.LIST_FOLLOW.TIKTOK}</a></span>
        </div>
        <div className="footer__brand">
          <Brand size="small" />
          <h4>
            Made with
            <span>LOVE</span>
          </h4>
        </div>
        <div className="footer__general">
          <h3>{Dico.FOOTER.LIST_GENERAL.TITLE}</h3>
          <span className="footer__url"><a href="/">{Dico.FOOTER.LIST_GENERAL.ABOUT}</a></span>
          <span className="footer__url"><a href="/">{Dico.FOOTER.LIST_GENERAL.CONTACT_US}</a></span>
          <span className="footer__url"><a href="/">{Dico.FOOTER.LIST_GENERAL.FAQ}</a></span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
