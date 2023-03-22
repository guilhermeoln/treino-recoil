export default interface IProduto {
  id: string;
  nome: string;
  imagem: string;
  categoria: string;
  destaque: boolean;
  valor: number;
  quantidade?: number;
}
