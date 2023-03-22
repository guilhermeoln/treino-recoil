import { Carrinho, ContadorCarrinho, StyledHeader, Titulo } from "./styles";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCarrinho } from "../../state/hooks/useCarrinho";

export default function Header() {
  const carrinho = useCarrinho();

  return (
    <StyledHeader>
      <Titulo>TreinoRecoil</Titulo>
      <Carrinho>
        <AiOutlineShoppingCart color="white" fontSize="35px" cursor="pointer" />
        <ContadorCarrinho>{carrinho.length}</ContadorCarrinho>
      </Carrinho>
    </StyledHeader>
  );
}
