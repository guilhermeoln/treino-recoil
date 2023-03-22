import { v4 as uuid } from "uuid";
import { atom } from "recoil";
import IProduto from "../types/IProduto";

export const produtosState = atom({
  key: "produtosState",
  default: [
    {
      id: uuid(),
      imagem:
        "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-mob-v3.png",
      nome: "WHEY PROTEIN CONCENTRADO (1KG)",
      categoria: "Proteina",
      destaque: false,
      valor: 99.99,
    },
    {
      id: uuid(),
      imagem:
        "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-mob-v3.png",
      nome: "WHEY PROTEIN CONCENTRADO (1KG)",
      categoria: "Proteina",
      destaque: true,
      valor: 99.99,
    },
    {
      id: uuid(),
      imagem:
        "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-mob-v3.png",
      nome: "WHEY PROTEIN CONCENTRADO (1KG)",
      categoria: "Proteina",
      destaque: false,
      valor: 99.99,
    },
    {
      id: uuid(),
      imagem:
        "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-mob-v3.png",
      nome: "WHEY PROTEIN CONCENTRADO (1KG)",
      categoria: "Proteina",
      destaque: false,
      valor: 99.99,
    },
    {
      id: uuid(),
      imagem:
        "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-mob-v3.png",
      nome: "WHEY PROTEIN CONCENTRADO (1KG)",
      categoria: "Proteina",
      destaque: true,
      valor: 99.99,
    },
    {
      id: uuid(),
      imagem:
        "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-mob-v3.png",
      nome: "WHEY PROTEIN CONCENTRADO (1KG)",
      categoria: "Proteina",
      destaque: false,
      valor: 99.99,
    },
    {
      id: uuid(),
      imagem:
        "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-mob-v3.png",
      nome: "WHEY PROTEIN CONCENTRADO (1KG)",
      categoria: "Proteina",
      destaque: true,
      valor: 99.99,
    },
    {
      id: uuid(),
      imagem:
        "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-mob-v3.png",
      nome: "WHEY PROTEIN CONCENTRADO (1KG)",
      categoria: "Proteina",
      destaque: true,
      valor: 99.99,
    },
  ] as IProduto[],
});

export const carrinhoState = atom({
  key: "carrinhoState",
  default: [] as IProduto[] | [],
});
