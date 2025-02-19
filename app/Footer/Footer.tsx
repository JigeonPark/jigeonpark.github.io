import { MakeContactIconList } from "../function/MakeContactIconList";
import { isMobile } from "../layout";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.Footer>
      <div>
        Designed & Developed by
        {isMobile ? " " : <br />}
        Jigeon Park
      </div>

      <S.ScrollToTop
        onClick={() => {
          scrollTo(0, 0);
        }}
      >
        👆
      </S.ScrollToTop>

      <S.ContactIconContainer>{MakeContactIconList()}</S.ContactIconContainer>
    </S.Footer>
  );
};

export default Footer;
