import CardProduto from "../../components/CardProduto";
import { useProdutos } from "../../state/hooks/useProdutos";
import { Container } from "./styles";

export default function Home() {
  const produtos = useProdutos();

  return (
    <Container>
      {produtos.map((produto) => (
        <CardProduto key={produto.id} {...produto} />
      ))}
    </Container>
  );
}
