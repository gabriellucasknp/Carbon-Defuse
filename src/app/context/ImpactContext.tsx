import { createContext, useContext, useEffect, useState } from "react";

type Simulation = {
  origem: string;
  destino: string;
  distancia: number;
  co2: number;
  combustivel: number;
  tempo: number;
  data: string;
};

type ImpactContextType = {
  history: Simulation[];
  addSimulation: (sim: Simulation) => void;
};

const ImpactContext = createContext({} as ImpactContextType);

export const ImpactProvider = ({ children }: any) => {
  const [history, setHistory] = useState<Simulation[]>([]);

  // carregar do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("impact_history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  // salvar no localStorage
  useEffect(() => {
    localStorage.setItem("impact_history", JSON.stringify(history));
  }, [history]);

  const addSimulation = (sim: Simulation) => {
    setHistory((prev) => [sim, ...prev]);
  };

  return (
    <ImpactContext.Provider value={{ history, addSimulation }}>
      {children}
    </ImpactContext.Provider>
  );
};

export const useImpact = () => useContext(ImpactContext);