import PageLayout from "../components/PageLayout";

export default function CorporativoPage() {
  return (
    <PageLayout>
      <div className="flex-1 relative w-full overflow-y-auto">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[32px] pb-[32px] relative">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-7xl mx-auto">
              <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-w-px not-italic relative text-[#101828] text-[24px]">Relatório Corporativo</p>
              </div>
              <div className="h-[20px] relative shrink-0 w-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">Indicadores ESG e métricas ambientais da sua frota</p>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full mt-6">
                <div className="border-[#e9d4ff] border-[0.571px] border-solid rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4" style={{ backgroundImage: "linear-gradient(164.74deg, rgb(250, 245, 255) 0%, rgb(253, 242, 248) 100%)" }}>
                  <div className="bg-[#f3e8ff] relative rounded-[10px] shrink-0 size-[36px] mb-3"></div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Total de Veículos</p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#101828] text-[24px] mb-1">29</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#9810fa] text-[12px]">Frota ativa</p>
                </div>
                <div className="border-[#b9f8cf] border-[0.571px] border-solid rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4" style={{ backgroundImage: "linear-gradient(164.74deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 100%)" }}>
                  <div className="bg-[#dcfce7] relative rounded-[10px] shrink-0 size-[36px] mb-3"></div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">CO₂ evitado no mês</p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#101828] text-[24px] mb-1">45 kg</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#00a63e] text-[12px]">↑ 15% vs mês anterior</p>
                </div>
                <div className="border-[#bedbff] border-[0.571px] border-solid rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4" style={{ backgroundImage: "linear-gradient(164.74deg, rgb(239, 246, 255) 0%, rgb(236, 254, 255) 100%)" }}>
                  <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[36px] mb-3"></div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Combustível economizado</p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#101828] text-[24px] mb-1">30 L</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#155dfc] text-[12px]">Economia total</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                <div className="bg-white border-[#e5e7eb] border-[0.571px] rounded-[14px] shadow-lg p-6">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#101828] text-[18px] mb-6">Evolução Mensal da Frota</p>
                  <div className="h-[280px] flex items-end justify-between gap-3 px-2">
                    {[
                      { month: 'Jan', value: 30 },
                      { month: 'Fev', value: 38 },
                      { month: 'Mar', value: 45 }
                    ].map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-3">
                        <div className="w-full flex flex-col items-center gap-1">
                          <span className="text-[13px] font-semibold text-[#00a63e]">{data.value} kg</span>
                          <div
                            className="w-full bg-gradient-to-t from-[#00a63e] to-[#10B981] rounded-t-lg transition-all hover:opacity-80 shadow-lg"
                            style={{ height: `${(data.value / 60) * 200}px` }}
                          ></div>
                        </div>
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[#4a5565]">{data.month}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#e5e7eb] grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#6a7282] mb-1">Média Mensal</p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#101828]">37.7 kg</p>
                    </div>
                    <div>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#6a7282] mb-1">Crescimento</p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#00a63e]">+50%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-[#e5e7eb] border-[0.571px] rounded-[14px] shadow-lg p-6">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#101828] text-[18px] mb-6">Distribuição de Veículos</p>
                  <div className="h-[280px] flex items-center justify-center">
                    <div className="relative">
                      <svg className="transform -rotate-90" width="200" height="200">
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#E5E7EB" strokeWidth="28"/>
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#10B981" strokeWidth="28" strokeDasharray="502" strokeDashoffset="188" strokeLinecap="round"/>
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#3B82F6" strokeWidth="28" strokeDasharray="502" strokeDashoffset="313" strokeLinecap="round"/>
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#F59E0B" strokeWidth="28" strokeDasharray="502" strokeDashoffset="439" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <p className="font-['Inter:Bold',sans-serif] font-bold text-[32px] text-[#101828]">29</p>
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#6a7282]">Total</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="text-center p-3 bg-[#f0fdf4] rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828]">15</p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#4a5565]">Sedan</p>
                    </div>
                    <div className="text-center p-3 bg-[#eff6ff] rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828]">10</p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#4a5565]">SUV</p>
                    </div>
                    <div className="text-center p-3 bg-[#fffbeb] rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828]">4</p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#4a5565]">Pickup</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#e5e7eb] border-[0.571px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6 w-full">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#101828] text-[16px] mb-4">Métricas Adicionais</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] border-[#b9f8cf] border-[0.571px] rounded-[10px] p-3 flex items-center justify-between">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#364153] text-[14px]">Tempo total reduzido</p>
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#008236] text-[20px]">2 h/mês</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#eff6ff] to-[#ecfeff] border-[#bedbff] border-[0.571px] rounded-[10px] p-3 flex items-center justify-between">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#364153] text-[14px]">Passagens totais</p>
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#1447e6] text-[20px]">145</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#00a63e] to-[#096] rounded-[14px] p-6 w-full mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" d="M10 18.333A8.333 8.333 0 1010 1.667a8.333 8.333 0 000 16.666z"/>
                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" d="M10 10V5.833M10 10l3.333 3.334"/>
                  </svg>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-white text-[18px]">Impacto ESG</p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#dcfce7] text-[14px] mb-4">
                  Sua empresa está contribuindo ativamente para a redução de emissões de carbono. O CO₂ evitado pela frota neste mês equivale a <span className="font-bold">2.1 árvores</span> absorvendo carbono durante 1 ano.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-white text-[20px]">45 kg</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">CO₂ Evitado</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-white text-[20px]">30 L</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">Combustível</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-white text-[20px]">2 h</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">Tempo</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full mt-6">
                <button className="bg-white border-[#00a63e] border-2 rounded-[10px] shadow-lg px-6 py-2 flex items-center gap-2">
                  <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                    <path stroke="#008236" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 12.75v2.25a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-2.25"/>
                    <path stroke="#008236" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.25 7.5L9 11.25 12.75 7.5"/>
                    <path stroke="#008236" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 11.25V2.25"/>
                  </svg>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#008236] text-[14px]">Baixar Relatório Completo (PDF)</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
