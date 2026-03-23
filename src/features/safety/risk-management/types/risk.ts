// Gerenciamento de Riscos Ocupacionais
export type RiskIdentification = {
  id: number;
  job_id: number; // Função que se aplica a esse GRO.
  action: string; // Tarefa ou ação que possa ocasionar o risco.
  agent_type: string; // Agente ["Físico","Químico", "Biológico", "Ergonômetro", "Acidente"]
  danger: string; // Perigo que pode causar esse risco.
  risk: string; // Risco o que pode acontecer.
  probability: string; // Probabilidade ["Rara 1", "Pouco Provável 2", "Possível 3", "Provável 4", "Muito Provável Certo 5"]
  severity: string; // Impacto ["Leve 1", "Baixa 2", "Moderada 3", "Alta 4", "Extrema 5"]
  homogeneous_exposure_group: number; // GHE - Grupo Homogêneo de Exposição
};

export type RiskAvaliation = {
  id: number;
  risk_id: number;
  matriz: { probability: number; severity: number };

};

export type RiskControl = {};

export type ActionPlan = {
  id: number;
  name: string;
  date_start: string;
  date_end: string;
  date_real_start: string;
  date_real_end: string;

  status: string;
  active: boolean;
};
