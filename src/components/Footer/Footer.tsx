import { MakeContactIconList } from "@src/function/MakeContactIconList";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.Footer>
      <div>
        Designed & Developed by
        <br />
        Jigeon Park 2024
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
