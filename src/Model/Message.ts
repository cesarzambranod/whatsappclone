import { ReactNode } from "react";

export default interface Message {
    id: number;
    texto: string | ReactNode;
    hora: string;
    estado: "visto" | "entregado" | "no_entregado";
    autor: string;
    dia?: string;
  }