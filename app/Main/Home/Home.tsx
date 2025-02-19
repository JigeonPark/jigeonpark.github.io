import { useTheme } from "../../theme/ThemeProvider";
import * as S from "./Home.style";

const Home = () => {
  const [ThemeMode] = useTheme();

  return (
    <S.Home mode={ThemeMode}>
      <S.Container>
        <S.Title>Jigeon Park</S.Title>
      </S.Container>

      <S.Container>
        <S.Title>A Junior Developer</S.Title>
        <S.IntroduceText>
          A passionate junior developer focussing on creating and maximising efficiency.
        </S.IntroduceText>
      </S.Container>
    </S.Home>
  );
};

export default Home;
