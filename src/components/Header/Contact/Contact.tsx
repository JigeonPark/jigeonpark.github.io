import { MakeContactIconList } from "@src/function/MakeContactIconList";
import * as S from "./Contact.style";
import { Dispatch, SetStateAction } from "react";

interface ContactProps {
  isContactOpened: boolean;
  setIsContactOpened: Dispatch<SetStateAction<boolean>>;
}

const Contact = ({ isContactOpened, setIsContactOpened }: ContactProps) => {
  const handleSendMessage = () => {
    setIsContactOpened(false);
  };

  return (
    <S.Container isContactOpened={isContactOpened}>
      <S.ContactIconContainer>{MakeContactIconList()}</S.ContactIconContainer>
      <S.Question>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button onClick={handleSendMessage}>Send</button>
      </S.Question>
    </S.Container>
  );
};

export default Contact;
