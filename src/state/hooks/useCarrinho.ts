import { carrinhoState } from "../atom";
import { useRecoilValue } from "recoil";

export const useCarrinho = () => {
  return useRecoilValue(carrinhoState);
};
