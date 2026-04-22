// 🔧 Para trocar as imagens do carrossel, basta editar este arquivo.
// Adicione/remova itens ou troque o caminho de "image" e os textos.

import instalacao1 from "@/assets/instalacao-1.jpg";
import instalacao2 from "@/assets/instalacao-2.jpg";
import instalacao3 from "@/assets/instalacao-3.jpg";
import instalacao4 from "@/assets/instalacao-4.jpg";

export type Instalacao = {
  image: string;
  local: string;
  tipo: string;
  potencia: string;
};

export const instalacoes: Instalacao[] = [
  {
    image: instalacao1,
    local: "São Paulo, SP",
    tipo: "Residencial",
    potencia: "8,4 kWp",
  },
  {
    image: instalacao2,
    local: "Campinas, SP",
    tipo: "Comercial",
    potencia: "120 kWp",
  },
  {
    image: instalacao3,
    local: "Ribeirão Preto, SP",
    tipo: "Rural",
    potencia: "45 kWp",
  },
  {
    image: instalacao4,
    local: "Belo Horizonte, MG",
    tipo: "Residencial",
    potencia: "6,2 kWp",
  },
];

export const parceiros: { name: string; description: string }[] = [
  { name: "Canadian Solar", description: "Painéis fotovoltaicos" },
  { name: "Growatt", description: "Inversores solares" },
  { name: "BYD", description: "Baterias e armazenamento" },
  { name: "WEG", description: "Equipamentos elétricos" },
  { name: "Fronius", description: "Inversores premium" },
  { name: "Trina Solar", description: "Módulos solares" },
];
