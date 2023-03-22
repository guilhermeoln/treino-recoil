import { useAdicionarNoCarrinho } from "../../state/hooks/useAdicionarNoCarrinho";
import IProduto from "../../types/IProduto";
import {
  ContainerCard,
  ConteudoCard,
  Imagem,
  Categoria,
  Titulo,
  Valor,
  Botao,
  Favorito,
} from "./styles";

export default function CardProduto({
  id,
  nome,
  imagem,
  categoria,
  destaque,
  valor,
}: IProduto) {
  const adicionarNoCarrinho = useAdicionarNoCarrinho();

  return (
    <ContainerCard>
      <Imagem src={imagem} alt={nome} />
      <ConteudoCard>
        {destaque ? (
          <Favorito>Favorito</Favorito>
        ) : (
          <Favorito>Não favorito</Favorito>
        )}
        <Titulo>{nome}</Titulo>
        <Categoria>{categoria}</Categoria>
        <Valor>
          {valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Valor>
        <Botao
          onClick={() =>
            adicionarNoCarrinho({
              id,
              nome,
              imagem,
              categoria,
              destaque,
              valor,
            })
          }
        >
          Adicionar ao carrinho
        </Botao>
      </ConteudoCard>
    </ContainerCard>
  );
}
