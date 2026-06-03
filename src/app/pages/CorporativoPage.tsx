import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useEffect, useMemo, useState } from "react";

import PageLayout from "../components/PageLayout";
import { CorporativoReport } from "../components/CorporativoReport";

export default function CorporativoPage() {
  const [simulacoes, setSimulacoes] = useState<any[]>([]);

  useEffect(() => {
    const fetchSimulacoes = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:3000/simulation",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        const corporativas = data.filter(
          (s: any) => s.tipo === "corporativa"
        );

        setSimulacoes(corporativas);
      } catch (error) {
        console.error("Erro ao buscar simulações:", error);
      }
    };

    fetchSimulacoes();
  }, []);

  const reportData = useMemo(() => {
    const totalVeiculos = simulacoes.reduce(
      (acc, item) => acc + (item.quantidadeVeiculos || 1),
      0
    );
  
    const totalCo2 = simulacoes.reduce(
      (acc, item) => acc + (item.co2 || 0),
      0
    );
  
    const totalCombustivel = simulacoes.reduce(
      (acc, item) => acc + (item.combustivel || 0),
      0
    );
  
    const totalDistancia = simulacoes.reduce(
      (acc, item) => acc + (item.distancia || 0),
      0
    );
  
    const totalTempo = simulacoes.reduce(
      (acc, item) => acc + (item.tempo || 0),
      0
    );
    const meses = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    
    const evolucaoMensal = meses.map(
      (mes, index) => ({
        mes,
        valor: simulacoes
          .filter(
            (s: any) =>
              new Date(
                s.createdAt || s.data
              ).getMonth() === index
          )
          .reduce(
            (acc, item) =>
              acc + (item.co2 || 0),
            0
          ),
      })
    );
    const economiaFinanceira =
      totalCombustivel * 6.25;
  
    const passagens = simulacoes.length;
  
    const getQuantidadePorTipo = (
      tipo: string
    ) =>
      simulacoes
        .filter((s) => s.veiculo === tipo)
        .reduce(
          (acc, item) =>
            acc + (item.quantidadeVeiculos || 1),
          0
        );
  
    return {
        totalVeiculos,
        totalCo2,
        totalCombustivel,
        totalDistancia,
        totalTempo,
        economiaFinanceira,
        passagens,
        evolucaoMensal,
  
      distribuicao: {
        sedan: getQuantidadePorTipo("sedan"),
        suv: getQuantidadePorTipo("suv"),
        pickup: getQuantidadePorTipo("pickup"),
        compact: getQuantidadePorTipo("compact"),
      },
    };
  }, [simulacoes]);

  const handleDownloadPdf = async () => {
    try {
      const blob = await pdf(
        <CorporativoReport data={reportData} />
      ).toBlob();

      saveAs(blob, "relatorio-corporativo.pdf");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    }
  };

  return (
    <PageLayout>
      <div className="flex-1 w-full overflow-y-auto bg-[#f8fafc]">
        <div className="px-8 py-8 max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-[32px] font-bold text-[#101828]">
              Relatório Corporativo
            </h1>

            <p className="text-[#667085] mt-2 text-[15px]">
              Indicadores ESG e métricas ambientais da sua frota
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

<div className="bg-white rounded-3xl p-6 shadow-sm border">
  <p className="text-sm text-gray-500">
    Veículos Monitorados
  </p>

  <h2 className="text-4xl font-bold mt-2">
    {reportData.totalVeiculos}
  </h2>

  <p className="text-green-600 mt-2">
    Frota ativa
  </p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border">
  <p className="text-sm text-gray-500">
    Emissões CO₂
  </p>

  <h2 className="text-4xl font-bold mt-2">
    {reportData.totalCo2.toFixed(1)} kg
  </h2>

  <p className="text-green-600 mt-2">
    Indicador ESG
  </p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border">
  <p className="text-sm text-gray-500">
    Combustível
  </p>

  <h2 className="text-4xl font-bold mt-2">
    {reportData.totalCombustivel.toFixed(1)} L
  </h2>

  <p className="text-blue-600 mt-2">
    Consumo total
  </p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border">
  <p className="text-sm text-gray-500">
    Economia Financeira
  </p>

  <h2 className="text-4xl font-bold mt-2">
    R$ {reportData.economiaFinanceira.toFixed(0)}
  </h2>

  <p className="text-purple-600 mt-2">
    Estimativa
  </p>
</div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"></div>
<div className="bg-white rounded-3xl p-6 shadow-sm border">
  <h2 className="text-xl font-bold mb-5">
    Resumo Executivo
  </h2>

  <div className="space-y-4">

    <div className="flex justify-between">
      <span>Simulações</span>

      <strong>
        {reportData.passagens}
      </strong>
    </div>

    <div className="flex justify-between">
      <span>Distância percorrida</span>

      <strong>
        {reportData.totalDistancia.toFixed(0)} km
      </strong>
    </div>

    <div className="flex justify-between">
      <span>Tempo total</span>

      <strong>
        {(reportData.totalTempo / 60).toFixed(1)} h
      </strong>
    </div>

    <div className="flex justify-between">
      <span>Economia estimada</span>

      <strong className="text-green-600">
        R$ {reportData.economiaFinanceira.toFixed(2)}
      </strong>
    </div>

  </div>
</div>
<div className="bg-white rounded-3xl p-6 shadow-sm border">
  <h2 className="text-xl font-bold mb-5">
    Distribuição da Frota
  </h2>

  <div className="space-y-4">

    <div className="flex justify-between">
      <span>🚗 Sedan</span>
      <strong>{reportData.distribuicao.sedan}</strong>
    </div>

    <div className="flex justify-between">
      <span>🚙 SUV</span>
      <strong>{reportData.distribuicao.suv}</strong>
    </div>

    <div className="flex justify-between">
      <span>🛻 Pickup</span>
      <strong>{reportData.distribuicao.pickup}</strong>
    </div>

    <div className="flex justify-between">
      <span>🚘 Compacto</span>
      <strong>{reportData.distribuicao.compact}</strong>
    </div>

  </div>
</div> 
        <div className="bg-white rounded-3xl p-6 shadow-sm border mb-8">
  <h2 className="text-xl font-bold mb-5">
    Indicadores ESG
  </h2>

  <div className="grid md:grid-cols-3 gap-5">

    <div className="bg-green-50 rounded-2xl p-5">
      <p className="text-sm text-green-700">
        Sustentabilidade
      </p>

      <h3 className="text-3xl font-bold mt-2">
        87%
      </h3>
    </div>

    <div className="bg-blue-50 rounded-2xl p-5">
      <p className="text-sm text-blue-700">
        Eficiência Operacional
      </p>

      <h3 className="text-3xl font-bold mt-2">
        92%
      </h3>
    </div>

    <div className="bg-purple-50 rounded-2xl p-5">
      <p className="text-sm text-purple-700">
        Meta ESG
      </p>

      <h3 className="text-3xl font-bold mt-2">
        74%
      </h3>
    </div>

  </div>
</div>
          {/* BOTÃO PDF */}
          <div className="flex justify-center mt-10">
            <button
              onClick={handleDownloadPdf}
              className="bg-[#00a63e] hover:bg-[#008236] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all hover:scale-105"
            >
              Baixar Relatório Completo (PDF)
            </button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}