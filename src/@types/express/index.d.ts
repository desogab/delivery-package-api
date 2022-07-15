// estou adicionando o id_client dentro dos tipos
// do Request do express para que seja possível 
// envia-lo nos requests sem erros de typagem
declare namespace Express {
  export interface Request {
    id_client: string;
    id_deliveryman: string;
  }
}