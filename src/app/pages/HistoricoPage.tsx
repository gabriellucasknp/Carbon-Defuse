import PageLayout from "../components/PageLayout";

export default function HistoricoPage() {
  return (
    <PageLayout>
      <div className="flex-1 relative w-full overflow-y-auto">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[32px] pb-[32px] relative">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-7xl mx-auto">
              <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-w-px not-italic relative text-[#101828] text-[24px]">Histórico de Impacto</p>
              </div>
              <div className="h-[20px] relative shrink-0 w-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">Acompanhe sua evolução ambiental ao longo do tempo</p>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="bg-white h-[37.143px] border-[#d1d5dc] border-[0.571px] rounded-[10px] px-4">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#364153] text-[14px]">Semanal</p>
                </button>
                <button className="bg-[#00a63e] h-[37.143px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] px-4">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-white text-[14px]">Mensal</p>
                </button>
              </div>
              <div className="bg-white border-[#e5e7eb] border-[0.571px] rounded-[14px] shadow-lg p-6 w-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#101828] text-[18px] mb-1">Evolução do CO₂ Evitado</p>
                    <p className="font-['Inter:Regular',sans-serif] text-[#6a7282] text-[13px]">Últimos 7 dias</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-right">
                      <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#00a63e]">2.8 kg</p>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#6a7282]">Média diária</p>
                    </div>
                  </div>
                </div>
                <div className="h-[280px] relative">
                  <div className="absolute inset-0 flex flex-col justify-between text-[11px] text-[#6a7282] pr-2">
                    {['4.0', '3.0', '2.0', '1.0', '0.0'].map((label, i) => (
                      <div key={i} className="flex items-center justify-end">
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 pl-12">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.05"/>
                        </linearGradient>
                      </defs>
                      <polyline
                        fill="url(#lineGradient)"
                        stroke="#10B981"
                        strokeWidth="3"
                        points="0,180 80,120 160,140 240,80 320,100 400,60 480,90 560,40"
                      />
                      <polyline
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,180 80,120 160,140 240,80 320,100 400,60 480,90 560,40"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-12 right-0 flex justify-between text-[11px] text-[#6a7282] pt-2">
                    {['01/03', '02/03', '03/03', '04/03', '05/03', '06/03', '07/03'].map((date, i) => (
                      <span key={i}>{date}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#e5e7eb] border-[0.571px] rounded-[14px] shadow-lg w-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] border-b border-[#e5e7eb] p-4">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#101828] text-[16px]">Registros Detalhados</p>
                  <p className="font-['Inter:Regular',sans-serif] text-[#6a7282] text-[13px] mt-1">Histórico completo de viagens</p>
                </div>
                <div className="divide-y divide-[#e5e7eb]">
                  {[
                    { date: '07/03', time: '14:30', co2: 0.35, fuel: 0.25, timeSaved: 3, route: 'São Paulo → Santos' },
                    { date: '06/03', time: '09:15', co2: 0.28, fuel: 0.18, timeSaved: 2.5, route: 'Campinas → São Paulo' },
                    { date: '05/03', time: '16:45', co2: 0.42, fuel: 0.3, timeSaved: 4, route: 'São Paulo → Guarulhos' },
                    { date: '04/03', time: '11:20', co2: 0.31, fuel: 0.22, timeSaved: 2, route: 'São Paulo → ABC' },
                    { date: '03/03', time: '08:00', co2: 0.25, fuel: 0.15, timeSaved: 1.5, route: 'Centro → Zona Sul' },
                    { date: '02/03', time: '17:30', co2: 0.38, fuel: 0.27, timeSaved: 3.5, route: 'São Paulo → Sorocaba' },
                    { date: '01/03', time: '10:45', co2: 0.22, fuel: 0.14, timeSaved: 1, route: 'Local → Centro' },
                  ].map((record, index) => (
                    <div key={index} className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#101828] text-[15px]">{record.date}</p>
                            <span className="text-[#6a7282] text-[13px]">{record.time}</span>
                            <span className="bg-[#dcfce7] text-[#00a63e] px-2 py-0.5 rounded-full text-[11px] font-medium">Concluída</span>
                          </div>
                          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[13px] mb-3">{record.route}</p>
                          <div className="flex gap-6 text-[13px]">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                              <span className="text-[#4a5565]">CO₂: <span className="font-semibold text-[#101828]">{record.co2} kg</span></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                              <span className="text-[#4a5565]">Combustível: <span className="font-semibold text-[#101828]">{record.fuel} L</span></span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#00a63e] text-[18px]">{record.timeSaved} min</p>
                          <p className="font-['Inter:Regular',sans-serif] text-[#6a7282] text-[11px]">economizados</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
