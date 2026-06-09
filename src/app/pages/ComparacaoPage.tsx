import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";
import { API_URL } from "../../lib/api";
import { Check, X } from "lucide-react";
export default function ComparacaoPage() {


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


  // SOMA TOTAL
  const totalCO2 = history.reduce((acc, item) => acc + item.co2, 0);

  const totalCombustivel = history.reduce(
    (acc, item) => acc + item.combustivel,
    0
  );

  // SIMULAÇÃO:
  // Com Taggy = 25% menos emissão
  // Sem Taggy = emissão total normal

  const co2ComTaggy = totalCO2 * 0.75;
  const co2SemTaggy = totalCO2;

  const combustivelComTaggy = totalCombustivel * 0.5;
  const combustivelSemTaggy = totalCombustivel;

  // TEMPO ESTIMADO
  const tempoComTaggy = history.length * 2;
  const tempoSemTaggy = history.length * 8;

  // ECONOMIAS
  const co2Economizado = co2SemTaggy - co2ComTaggy;

  const combustivelEconomizado =
    combustivelSemTaggy - combustivelComTaggy;

  const tempoEconomizado =
    tempoSemTaggy - tempoComTaggy;

  return (
    <PageLayout>
      <div className="flex-1 relative w-full overflow-auto">
        <div className="overflow-clip rounded-[inherit] size-full">

          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] md:px-[32px] pt-[24px] pb-[32px] relative min-h-full">

            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-7xl mx-auto">

              {/* HEADER */}
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-bold leading-[32px] text-[#101828] text-[24px]">
                  Comparação: Com vs Sem Taggy
                </p>
              </div>

              <div className="relative shrink-0 w-full">
                <p className="text-[#4a5565] text-[14px]">
                  Veja o impacto real do Taggy nas suas viagens
                </p>
              </div>

              {/* CARDS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full mt-4 md:mt-6">

                {/* COM TAGGY */}
                <div
                  className="border-[#7bf1a8] border-2 rounded-[14px] shadow-lg p-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(155.194deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 100%)",
                  }}
                >

                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-[#00a63e] rounded-[10px] size-[36px]"></div>

                    <p className="font-bold text-[#101828] text-[18px]">
                      Com Taggy
                    </p>
                  </div>

                  <div className="space-y-3">

                    <div className="bg-white border-[#b9f8cf] border rounded-[10px] p-3">
                      <p className="text-[#4a5565] text-[12px] mb-1">
                        CO₂ Emitido
                      </p>

                      <p className="font-bold text-[#008236] text-[20px] mb-1">
                        {co2ComTaggy.toFixed(1)} kg
                      </p>

                      <p className="text-[#00a63e] text-[12px] flex items-center gap-1">
                        <Check className="w-3 h-3" /> Menor emissão
                      </p>
                    </div>

                    <div className="bg-white border-[#b9f8cf] border rounded-[10px] p-3">
                      <p className="text-[#4a5565] text-[12px] mb-1">
                        Tempo em Fila
                      </p>

                      <p className="font-bold text-[#008236] text-[20px] mb-1">
                        {tempoComTaggy} min
                      </p>

                      <p className="text-[#00a63e] text-[12px] flex items-center gap-1">
                        <Check className="w-3 h-3" /> Mais rápido
                      </p>
                    </div>

                    <div className="bg-white border-[#b9f8cf] border rounded-[10px] p-3">
                      <p className="text-[#4a5565] text-[12px] mb-1">
                        Combustível
                      </p>

                      <p className="font-bold text-[#008236] text-[20px] mb-1">
                        {combustivelComTaggy.toFixed(1)} L
                      </p>

                      <p className="text-[#00a63e] text-[12px] flex items-center gap-1">
                        <Check className="w-3 h-3" /> Economia de combustível
                      </p>
                    </div>

                  </div>
                </div>

                {/* SEM TAGGY */}
                <div
                  className="border-[#ffa2a2] border-2 rounded-[14px] shadow-lg p-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(155.194deg, rgb(254, 242, 242) 0%, rgb(255, 247, 237) 100%)",
                  }}
                >

                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-[#e7000b] rounded-[10px] size-[36px]"></div>

                    <p className="font-bold text-[#101828] text-[18px]">
                      Sem Taggy
                    </p>
                  </div>

                  <div className="space-y-3">

                    <div className="bg-white border-[#ffc9c9] border rounded-[10px] p-3">
                      <p className="text-[#4a5565] text-[12px] mb-1">
                        CO₂ Emitido
                      </p>

                      <p className="font-bold text-[#c10007] text-[20px] mb-1">
                        {co2SemTaggy.toFixed(1)} kg
                      </p>

                      <p className="text-[#e7000b] text-[12px] flex items-center gap-1">
                        <X className="w-3 h-3" /> Maior emissão
                      </p>
                    </div>

                    <div className="bg-white border-[#ffc9c9] border rounded-[10px] p-3">
                      <p className="text-[#4a5565] text-[12px] mb-1">
                        Tempo em Fila
                      </p>

                      <p className="font-bold text-[#c10007] text-[20px] mb-1">
                        {tempoSemTaggy} min
                      </p>

                      <p className="text-[#e7000b] text-[12px] flex items-center gap-1">
                        <X className="w-3 h-3" /> Tempo perdido
                      </p>
                    </div>

                    <div className="bg-white border-[#ffc9c9] border rounded-[10px] p-3">
                      <p className="text-[#4a5565] text-[12px] mb-1">
                        Combustível
                      </p>

                      <p className="font-bold text-[#c10007] text-[20px] mb-1">
                        {combustivelSemTaggy.toFixed(1)} L
                      </p>

                      <p className="text-[#e7000b] text-[12px] flex items-center gap-1">
                        <X className="w-3 h-3" /> Maior consumo
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* IMPACTO TOTAL */}
              <div className="bg-gradient-to-r from-[#00a63e] to-[#009966] rounded-[14px] shadow-lg p-6 w-full mt-6">

                <p className="font-bold text-white text-[18px] mb-4">
                  Impacto Total
                </p>

                <p className="text-[#dcfce7] text-[14px] mb-4">
                  Usando Taggy nas suas viagens, você evitou:
                </p>

                <div className="grid grid-cols-3 gap-4">

                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-bold text-white text-[24px]">
                      {co2Economizado.toFixed(1)} kg
                    </p>

                    <p className="text-[#dcfce7] text-[12px]">
                      CO₂
                    </p>
                  </div>

                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-bold text-white text-[24px]">
                      {tempoEconomizado} min
                    </p>

                    <p className="text-[#dcfce7] text-[12px]">
                      Tempo
                    </p>
                  </div>

                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-bold text-white text-[24px]">
                      {combustivelEconomizado.toFixed(1)} L
                    </p>

                    <p className="text-[#dcfce7] text-[12px]">
                      Combustível
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}