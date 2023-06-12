export interface Imoveis {
  id: number;
  nome: String;
  tipo: [];
  valor: number;
  condominio: number;
  quartos: number;
  banheiros: number;
  mobiliado: boolean;
  area: number;
  venda: boolean;
  aluguel: boolean;
  dataAnuncio: Date;
  endereco: [
    {
        id: number;
        rua: string;
        numero: number;
        bairro: string;
        cidade: string;
        uf: string;
        cep: number;
    }
  ];
  proprietarioId: 1;
}
