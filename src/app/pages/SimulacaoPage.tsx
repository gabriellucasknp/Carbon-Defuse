import PageLayout from "../components/PageLayout";
import { useState } from "react";

export default function SimulacaoPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  return (
    <PageLayout>
      <div className="flex-1 relative w-full overflow-auto">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[16px] md:px-[32px] pb-[32px] relative min-h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-7xl mx-auto">
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] md:leading-[32px] min-w-px not-italic relative text-[#101828] text-[20px] md:text-[24px]">Simulação de Rota</p>
              </div>
              <div className="relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#4a5565] text-[14px]">Calcule o impacto ambiental de sua viagem antes de partir</p>
              </div>
              <div className="bg-white border-[#e5e7eb] border-[0.571px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4 md:p-6 w-full mt-4 md:mt-6 max-w-3xl">
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#101828] text-[14px] mb-2">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                        <path stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"/>
                        <path stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" d="M8 4.667V8l2.667 2.667"/>
                      </svg>
                      Origem
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="Ex: São Paulo, SP"
                      className="w-full h-[37.143px] border-[#d1d5dc] border-[0.571px] rounded-[10px] px-4 font-['Inter:Regular',sans-serif] text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#101828] text-[14px] mb-2">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                        <path stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"/>
                      </svg>
                      Destino
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Ex: Rio de Janeiro, RJ"
                      className="w-full h-[37.143px] border-[#d1d5dc] border-[0.571px] rounded-[10px] px-4 font-['Inter:Regular',sans-serif] text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#101828] text-[14px] mb-2">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                        <path stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" d="M13.333 5.333H2.667L5.333 2.667"/>
                        <path stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" d="M2.667 10.667h10.666L10.667 13.333"/>
                        <path stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" d="M6 11.333H10"/>
                        <path stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" d="M2.667 5.333v6A2 2 0 004.667 13.333h6.666a2 2 0 002-2v-6"/>
                      </svg>
                      Tipo de Veículo
                    </label>
                    <select
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="w-full h-[37.143px] border-[#d1d5dc] border-[0.571px] rounded-[10px] px-4 font-['Inter:Regular',sans-serif] text-[14px]"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="pickup">Caminhonete</option>
                      <option value="compact">Compacto</option>
                    </select>
                  </div>
                  <button className="bg-gradient-to-r from-[#00a63e] to-[#096] h-[36px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] w-full mt-4">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-white text-[14px] text-center">Calcular Impacto</p>
                  </button>
                </div>
              </div>
              {origin && destination && vehicleType && (
                <div className="bg-gradient-to-r from-[#00a63e] to-[#096] border-[#7bf1a8] border-2 rounded-[14px] shadow-lg p-4 md:p-6 w-full max-w-3xl mt-4">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] md:leading-[28px] text-white text-[16px] md:text-[18px] mb-4">Resultado da Simulação</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                    <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-4 text-center">
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-white text-[24px]">2.5 kg</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">CO₂ Estimado</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-4 text-center">
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-white text-[24px]">45 km</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">Distância</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-4 text-center">
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-white text-[24px]">3.2 L</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">Combustível</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-[rgba(255,255,255,0.1)] rounded-lg p-4">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#dcfce7] text-[14px]">
                      💡 Dica: Com Taggy, você pode economizar até 0.5 kg de CO₂ nesta rota evitando filas e paradas desnecessárias!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
