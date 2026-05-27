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

    const passagens = simulacoes.length;

    const getQuantidadePorTipo = (tipo: string) => {
      return simulacoes
        .filter((s) => s.veiculo === tipo)
        .reduce(
          (acc, item) =>
            acc + (item.quantidadeVeiculos || 1),
          0
        );
    };

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

    const evolucaoMensal = meses.map((mes, index) => ({
      mes,
      valor: simulacoes
        .filter(
          (s: any) =>
            new Date(s.data).getMonth() === index
        )
        .reduce(
          (acc, item) => acc + (item.co2 || 0),
          0
        ),
    }));

    const mediaMensal =
      simulacoes.length > 0
        ? totalCo2 / simulacoes.length
        : 0;

    return {
      totalVeiculos,

      co2: `${totalCo2.toFixed(1)} kg`,

      combustivel: `${totalCombustivel.toFixed(1)} L`,

      mediaMensal: `${mediaMensal.toFixed(1)} kg`,

      crescimento: "+12%",

      tempoReduzido: `${(
        passagens * 12
      ).toFixed(0)} min/mês`,

      passagens,

      distribuicao: {
        sedan: getQuantidadePorTipo("sedan"),
        suv: getQuantidadePorTipo("suv"),
        pickup: getQuantidadePorTipo("pickup"),
        compact: getQuantidadePorTipo("compact"),
      },

      evolucaoMensal,
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

            <div className="rounded-3xl p-6 border border-purple-100 bg-gradient-to-br from-[#faf5ff] to-[#fdf2f8] shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 mb-4 flex items-center justify-center">
                🚘
              </div>

              <p className="text-sm text-[#667085]">
                Total de Veículos
              </p>

              <h2 className="text-4xl font-bold text-[#101828] mt-2">
                {reportData.totalVeiculos}
              </h2>

              <p className="text-sm text-[#9810fa] mt-2">
                Frota ativa
              </p>
            </div>

            <div className="rounded-3xl p-6 border border-green-100 bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-green-100 mb-4 flex items-center justify-center">
                🌱
              </div>

              <p className="text-sm text-[#667085]">
                CO₂ evitado no mês
              </p>

              <h2 className="text-4xl font-bold text-[#101828] mt-2">
                {reportData.co2}
              </h2>

              <p className="text-sm text-[#00a63e] mt-2">
                ↑ 15% vs mês anterior
              </p>
            </div>

            <div className="rounded-3xl p-6 border border-blue-100 bg-gradient-to-br from-[#eff6ff] to-[#ecfeff] shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 mb-4 flex items-center justify-center">
                ⛽
              </div>

              <p className="text-sm text-[#667085]">
                Combustível economizado
              </p>

              <h2 className="text-4xl font-bold text-[#101828] mt-2">
                {reportData.combustivel}
              </h2>

              <p className="text-sm text-[#2563eb] mt-2">
                Economia total
              </p>
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