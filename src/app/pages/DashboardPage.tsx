import PageLayout from "../components/PageLayout";
import svgPaths from "../../imports/svg-hfd06lx9tq";

function Icon6() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p23446d60} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_8.33%_29.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p363b7770} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <PageLayout>
      <div className="flex-1 relative w-full overflow-y-auto">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[32px] pb-[32px] relative">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-7xl mx-auto">
              <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-w-px not-italic relative text-[#101828] text-[24px]">Resumo do Impacto</p>
              </div>
              <div className="h-[20px] relative shrink-0 w-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">Seu impacto ambiental positivo usando Taggy</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                <div className="border-[#b9f8cf] border-[0.571px] border-solid rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4" style={{ backgroundImage: "linear-gradient(159.875deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 100%)" }}>
                  <div className="bg-[#dcfce7] relative rounded-[10px] shrink-0 size-[36px] mb-3">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
                      <Icon6 />
                    </div>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">CO₂ Evitado</p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#101828] text-[24px] mb-1">2.3 kg</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#00a63e] text-[12px]">↑ 12% vs mês anterior</p>
                </div>
                <div className="border-[#bedbff] border-[0.571px] border-solid rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4" style={{ backgroundImage: "linear-gradient(159.875deg, rgb(239, 246, 255) 0%, rgb(236, 254, 255) 100%)" }}>
                  <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[36px] mb-3"></div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Combustível Economizado</p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#101828] text-[24px] mb-1">1.5 L</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#6a7282] text-[12px]">Gasolina equivalente</p>
                </div>
                <div className="border-[#e9d4ff] border-[0.571px] border-solid rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4" style={{ backgroundImage: "linear-gradient(159.875deg, rgb(250, 245, 255) 0%, rgb(253, 242, 248) 100%)" }}>
                  <div className="bg-[#f3e8ff] relative rounded-[10px] shrink-0 size-[36px] mb-3"></div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Uso no mês</p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#101828] text-[24px] mb-1">15</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#6a7282] text-[12px]">Passagens realizadas</p>
                </div>
                <div className="border-[#fee685] border-[0.571px] border-solid rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4" style={{ backgroundImage: "linear-gradient(159.875deg, rgb(255, 251, 235) 0%, rgb(255, 247, 237) 100%)" }}>
                  <div className="bg-[#fef3c6] relative rounded-[10px] shrink-0 size-[36px] mb-3"></div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Equivalente Ambiental</p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#101828] text-[24px] mb-1">0.1</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#6a7282] text-[12px]">Árvores plantadas</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                <div className="bg-white border-[#e5e7eb] border-[0.571px] rounded-[14px] shadow-lg p-6">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#101828] text-[18px] mb-6">Distribuição de Emissões</p>
                  <div className="relative h-[200px] flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <svg className="transform -rotate-90" width="160" height="160">
                          <circle cx="80" cy="80" r="60" fill="none" stroke="#E5E7EB" strokeWidth="24"/>
                          <circle cx="80" cy="80" r="60" fill="none" stroke="#10B981" strokeWidth="24" strokeDasharray="283" strokeDashoffset="85" strokeLinecap="round"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <p className="font-['Inter:Bold',sans-serif] font-bold text-[28px] text-[#101828]">70%</p>
                          <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#4a5565]">Evitado</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">CO₂ Evitado</p>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828]">2.3 kg</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#E5E7EB]"></div>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">Emissões Restantes</p>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828]">1.0 kg</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-[#e5e7eb] border-[0.571px] rounded-[14px] shadow-lg p-6">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#101828] text-[18px] mb-6">Evolução Semanal</p>
                  <div className="h-[200px] flex items-end justify-between gap-2 px-4">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gradient-to-t from-[#00a63e] to-[#10B981] rounded-t-lg transition-all hover:opacity-80" style={{ height: `${height}%` }}></div>
                        <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#6a7282]">
                          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][index]}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-6">
                    <div className="text-center">
                      <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#101828]">12.5 kg</p>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#4a5565]">Total Semanal</p>
                    </div>
                    <div className="h-10 w-px bg-[#e5e7eb]"></div>
                    <div className="text-center">
                      <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#00a63e]">↑ 8%</p>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#4a5565]">vs. Semana Anterior</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#00a63e] to-[#096] rounded-[14px] p-6 w-full shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 rounded-lg p-2">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24">
                      <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-white text-[18px]">CO₂ evitado sem filas e paradas</p>
                    <p className="font-['Inter:Regular',sans-serif] text-[#dcfce7] text-[13px]">Impacto positivo no meio ambiente</p>
                  </div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#dcfce7] text-[14px] mb-6">
                  Ao usar o Taggy, você economiza tempo em pedágios e estacionamentos, reduzindo o tempo de motor ligado e, consequentemente, as emissões de CO₂. Continue fazendo a diferença! 🌱
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-3">
                        <svg className="size-5" fill="none" viewBox="0 0 20 20">
                          <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 6v4l3 3"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[16px]">45 min</p>
                        <p className="font-['Inter:Regular',sans-serif] text-[#dcfce7] text-[12px]">Tempo economizado este mês</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[24px]">2.3 kg</p>
                      <p className="font-['Inter:Regular',sans-serif] text-[#dcfce7] text-[12px]">CO₂ evitado</p>
                    </div>
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
