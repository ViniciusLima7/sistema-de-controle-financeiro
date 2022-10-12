import { Button } from "../../components/Button";
import {
  ContainerBG,
  FormLogin,
  Input,
  Line,
  Registration,
  Rodape,
  SubTitle,
  Text,
  TextLine,
  Title,
} from "./styles";

export function Login() {
  return (
    <>
      <ContainerBG>
        <Registration>Cadastre-se Agora</Registration>
        <Title>SISTEMA DE CONTROLE FINANCEIRO</Title>
        <SubTitle>Faça login para continuar</SubTitle>
        <FormLogin>
          <Input placeholder="Digite seu email"></Input>
          <Input placeholder="Digite sua senha"></Input>
          <Text>Esqueceu a senha?</Text>
          <Button text="Entrar"></Button>
          <Line>
            <TextLine>ou</TextLine>
          </Line>
          <Button
            background="var(--red-500)"
            hoverBg="var(--red-800)"
            text="Entrar com Google"
          ></Button>
        </FormLogin>
        <footer>
          <Rodape>© 2022 - V7-WEB - Todos os direitos reservados</Rodape>
        </footer>
      </ContainerBG>
    </>
  );
}
