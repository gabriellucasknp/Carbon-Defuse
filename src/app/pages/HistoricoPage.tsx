import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";
import { API_URL } from "../../lib/api";
export default function HistoricoPage() {
  const [history, setHistory] = useState<any[]>([]);
  useEffect(() => {

    const carregarSimulacoes = async () => {
      try {

        const token = localStorage.getItem("token");

        const response = await fetch(
          `${API_URL}/simulation`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        setHistory(data);

      } catch (error) {
        console.log(error);
      }
    };

    carregarSimulacoes();

  }, []);
  return (
    <PageLayout>
      <div className="flex-1 relative w-full overflow-y-auto">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[32px] pb-[32px] relative">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-7xl mx-auto">

              {/* TÍTULO */}
              <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-bold text-[#101828] text-[24px]">
                  Histórico de Impacto
                </p>
              </div>

              <div className="h-[20px] relative shrink-0 w-full">
                <p className="text-[#4a5565] text-[14px]">
                  Acompanhe sua evolução ambiental ao longo do tempo
                </p>
              </div>

              {/* LISTA */}
              <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-lg w-full overflow-hidden">

                <div className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] border-b border-[#e5e7eb] p-4">
                  <p className="font-bold text-[#101828] text-[16px]">
                    Registros Detalhados
                  </p>
                  <p className="text-[#6a7282] text-[13px] mt-1">
                    Histórico completo de viagens
                  </p>
                </div>

                <div className="divide-y divide-[#e5e7eb]">

                  {history.length === 0 && (
                    <div className="p-6 text-center text-[#6a7282]">
                      Nenhuma simulação ainda
                    </div>
                  )}

                  {history
                    .slice()
                    .sort(
                      (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                    )
                    .map((item, index) => {

                      const date = new Date(item.createdAt);

                      return (
                        <div
                          key={index}
                          className="p-5 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">

                              {/* DATA */}
                              <div className="flex items-center gap-3 mb-2">
                                <p className="font-semibold text-[#101828] text-[15px]">
                                  {date.toLocaleDateString("pt-BR")}
                                </p>

                                <span className="text-[#6a7282] text-[13px]">
                                  {date.toLocaleTimeString("pt-BR", {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                  })}
                                </span>

                                <span className="bg-[#dcfce7] text-[#00a63e] px-2 py-0.5 rounded-full text-[11px] font-medium">
                                  Concluída
                                </span>
                              </div>

                              {/* ROTA */}
                              <p className="text-[#4a5565] text-[13px] mb-3">
                                {item.origem} → {item.destino}
                              </p>

                              {/* DADOS */}
                              <div className="flex gap-6 text-[13px]">

                                <div className="flex items-center gap-1.5">
                                  <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                                  <span className="text-[#4a5565]">
                                    CO₂:{" "}
                                    <span className="font-semibold text-[#101828]">
                                      {item.co2.toFixed(2)} kg
                                    </span>
                                  </span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                                  <span className="text-[#4a5565]">
                                    Combustível:{" "}
                                    <span className="font-semibold text-[#101828]">
                                      {item.combustivel.toFixed(2)} L
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* DIREITA */}
                            <div className="text-right">
                              <p className="font-bold text-[#00a63e] text-[18px]">
                                {(item.tempo * 0.2).toFixed(1)} min
                              </p>
                              <p className="text-[#6a7282] text-[11px]">
                                economizados
                              </p>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}