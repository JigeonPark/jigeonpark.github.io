import { MakeContactIconList } from "../../function/MakeContactIconList";
import * as S from "./Contact.style";
import { Dispatch, SetStateAction } from "react";

interface ContactProps {
  contactFlag: boolean;
  setContactFlag: Dispatch<SetStateAction<boolean>>;
}

const Contact = ({ contactFlag, setContactFlag }: ContactProps) => {
  function SendMsg() {
    setContactFlag(false);
  }

  return (
    <S.Container contactFlag={contactFlag}>
      <S.ContactIconContainer>{MakeContactIconList()}</S.ContactIconContainer>
      <S.Question>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button onClick={SendMsg}>Not work</button>
        {/* <button onClick={SendMsg}>Send Message</button> */}
      </S.Question>
    </S.Container>
  );
};

export default Contact;
