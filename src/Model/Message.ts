export default interface Message {
    id: number;
    texto: string;
    hora: string;
    estado: "visto" | "entregado" | "no_entregado";
    autor: string;
    dia: string;
  }