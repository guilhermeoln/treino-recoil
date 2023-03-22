import { carrinhoState } from "../atom";
import { useSetRecoilState } from "recoil";
import IProduto from "../../types/IProduto";
import { useCarrinho } from "./useCarrinho";

export const useAdicionarNoCarrinho = () => {
  const setCarrinho = useSetRecoilState(carrinhoState);
  const carrinho = useCarrinho();

  return (produto: IProduto) => {
    setCarrinho((carrinhoAnterior) => [
      ...carrinhoAnterior,
      { ...produto, quantidade: 1 },
    ]);
  };
};
