import { useRecoilValue } from "recoil";
import { produtosState } from "../atom";

export const useProdutos = () => {
  return useRecoilValue(produtosState);
};
