import PageLayout from "../components/PageLayout";

export default function ComparacaoPage() {
  return (
    <PageLayout>
      <div className="flex-1 relative w-full overflow-auto">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] md:px-[32px] pt-[24px] pb-[32px] relative min-h-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-7xl mx-auto">
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] md:leading-[32px] min-w-px not-italic relative text-[#101828] text-[20px] md:text-[24px]">Comparação: Com vs Sem Taggy</p>
              </div>
              <div className="relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#4a5565] text-[14px]">Veja o impacto real do Taggy nas suas viagens</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full mt-4 md:mt-6">
                <div className="border-[#7bf1a8] border-2 rounded-[14px] shadow-lg p-6" style={{ backgroundImage: "linear-gradient(155.194deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 100%)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-[#00a63e] rounded-[10px] size-[36px]"></div>
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#101828] text-[18px]">Com Taggy</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white border-[#b9f8cf] border-[0.571px] rounded-[10px] p-3">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">CO₂ Emitido</p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#008236] text-[20px] mb-1">1.8 kg</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#00a63e] text-[12px]">✓ Menor emissão</p>
                    </div>
                    <div className="bg-white border-[#b9f8cf] border-[0.571px] rounded-[10px] p-3">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Tempo em Fila</p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#008236] text-[20px] mb-1">2 min</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#00a63e] text-[12px]">✓ 75% mais rápido</p>
                    </div>
                    <div className="bg-white border-[#b9f8cf] border-[0.571px] rounded-[10px] p-3">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Combustível</p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#008236] text-[20px] mb-1">0.2 L</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#00a63e] text-[12px]">✓ 50% economia</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#ffa2a2] border-2 rounded-[14px] shadow-lg p-6" style={{ backgroundImage: "linear-gradient(155.194deg, rgb(254, 242, 242) 0%, rgb(255, 247, 237) 100%)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-[#e7000b] rounded-[10px] size-[36px]"></div>
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#101828] text-[18px]">Sem Taggy</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white border-[#ffc9c9] border-[0.571px] rounded-[10px] p-3">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">CO₂ Emitido</p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#c10007] text-[20px] mb-1">2.4 kg</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#e7000b] text-[12px]">✗ Maior emissão</p>
                    </div>
                    <div className="bg-white border-[#ffc9c9] border-[0.571px] rounded-[10px] p-3">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Tempo em Fila</p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#c10007] text-[20px] mb-1">8 min</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#e7000b] text-[12px]">✗ Tempo perdido</p>
                    </div>
                    <div className="bg-white border-[#ffc9c9] border-[0.571px] rounded-[10px] p-3">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#4a5565] text-[12px] mb-1">Combustível</p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] text-[#c10007] text-[20px] mb-1">0.4 L</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#e7000b] text-[12px]">✗ Maior consumo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#00a63e] to-[#096] rounded-[14px] shadow-lg p-4 md:p-6 w-full mt-4 md:mt-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] md:leading-[28px] text-white text-[16px] md:text-[18px]">Impacto Total</p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#dcfce7] text-[13px] md:text-[14px] mb-4">Usando Taggy nesta viagem, você evitou:</p>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-white text-[24px]">0.6 kg</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">CO₂</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-white text-[24px]">6 min</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">Tempo</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.2)] rounded-[10px] p-3 text-center">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-white text-[24px]">0.2 L</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#dcfce7] text-[12px]">Combustível</p>
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
