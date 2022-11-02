import Header from "../../components/Header";
import { Box, Image, Text, TextColor } from "./styles";
import money from "../../assets/money57.svg";
import educacaoFinanceira from "../../assets/educacao-financeira-capa.svg";
import { Rodape } from "../Login/styles";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* Content */}
      <div>
        <Box>
          <Text
            color="var(--black)"
            size="28px"
            lineHeight="37px"
            paddingTop="90px"
          >
            Olá, <TextColor color="var(--red-500)">Vinicius Lima</TextColor>,
            Seja bem-vindo !
          </Text>
          <Text size="48px" lineHeight="63px" width="408px" marginLeft="100px">
            Aqui você sabe para onde seu{" "}
            <img src={money} alt="Saco de Dinheiro"></img> está indo.
          </Text>
          <Text paddingTop="120px" size="17px" lineHeight="22px">
            Cuide do seu dinheiro{" "}
            <TextColor color="var(--red-500)">hoje</TextColor> que ele irá
            cuidar de você <TextColor color="var(--red-500)">amanhã!</TextColor>
          </Text>
        </Box>
        <Image
          src={educacaoFinanceira}
          alt="Mulher estudando sobre Educação Financeira"
        />
      </div>
      {/* Content */}

      <Footer />
    </>
  );
}