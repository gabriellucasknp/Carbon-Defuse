import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";
import { API_URL } from "../../lib/api";
import {
  Leaf,
  Fuel,
  BarChart3,
  Trees,
  TrendingUp,
  Clock3,
} from "lucide-react";

export default function DashboardPage() {
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

        const fisicas = data.filter(
          (s: any) => s.tipo === "fisica"
        );

        setHistory(fisicas);

      } catch (error) {
        console.log(error);
      }
    };

    carregarSimulacoes();

  }, []);
  const totalCO2 = history.reduce((acc, item) => acc + item.co2, 0);

  const totalCombustivel = history.reduce(
    (acc, item) => acc + item.combustivel,
    0
  );

  const totalViagens = history.length;

  const co2Evitado = totalCO2 * 0.2;

  const arvores = totalCO2 / 21;

  const restante = totalCO2 - co2Evitado;

  const porcentagem =
    totalCO2 > 0 ? (co2Evitado / totalCO2) * 100 : 0;

  return (
    <PageLayout>
      <div className="flex-1 w-full overflow-y-auto bg-gray-50 px-8 py-6">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Resumo do Impacto
            </h1>

            <p className="text-gray-500 mt-1">
              Seu impacto ambiental positivo usando Taggy
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <MetricCard
              title="CO₂ Evitado"
              value={`${co2Evitado.toFixed(1)} kg`}
              subtitle="↑ 12% vs mês anterior"
              icon={<Leaf size={22} />}
              color="green"
            />

            <MetricCard
              title="Combustível Economizado"
              value={`${totalCombustivel.toFixed(1)} L`}
              subtitle="Gasolina equivalente"
              icon={<Fuel size={22} />}
              color="blue"
            />

            <MetricCard
              title="Uso no mês"
              value={`${totalViagens}`}
              subtitle="Passagens realizadas"
              icon={<BarChart3 size={22} />}
              color="purple"
            />

            <MetricCard
              title="Equivalente Ambiental"
              value={`${arvores.toFixed(1)}`}
              subtitle="Árvores plantadas"
              icon={<Trees size={22} />}
              color="yellow"
            />

          </div>

          {/* GRÁFICOS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* DISTRIBUIÇÃO */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-2xl font-bold mb-8">
                Distribuição de Emissões
              </h2>

              <div className="flex flex-col items-center justify-center">

                {/* CÍRCULO */}
                <div className="relative w-44 h-44 rounded-full bg-gray-200 flex items-center justify-center">

                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(
                        #10b981 ${porcentagem}%,
                        #e5e7eb ${porcentagem}%
                      )`,
                      borderRadius: "999px",
                    }}
                  />

                  <div className="w-28 h-28 bg-white rounded-full z-10 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">
                      {porcentagem.toFixed(0)}%
                    </span>

                    <span className="text-sm text-gray-500">
                      Evitado
                    </span>
                  </div>
                </div>

                {/* LEGENDA */}
                <div className="w-full mt-10 space-y-4">

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500" />

                      <span className="text-gray-700">
                        CO₂ Evitado
                      </span>
                    </div>

                    <strong>
                      {co2Evitado.toFixed(1)} kg
                    </strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-300" />

                      <span className="text-gray-700">
                        Emissões Restantes
                      </span>
                    </div>

                    <strong>
                      {restante.toFixed(1)} kg
                    </strong>
                  </div>

                </div>

              </div>
            </div>

            {/* EVOLUÇÃO */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-2xl font-bold mb-8">
                Evolução Semanal
              </h2>

              <div className="flex items-end justify-between h-52 px-4">

                {[40, 70, 55, 90, 60, 80, 45].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className="w-10 rounded-xl bg-green-500"
                      style={{
                        height: `${item}%`,
                      }}
                    />

                    <span className="text-sm text-gray-500">
                      {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][index]}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-8 flex items-center justify-center gap-10">

                <div className="text-center">
                  <p className="text-3xl font-bold">
                    {co2Evitado.toFixed(1)} kg
                  </p>

                  <span className="text-gray-500 text-sm">
                    Total Semanal
                  </span>
                </div>

                <div className="flex items-center gap-2 text-green-600 font-bold text-2xl">
                  <TrendingUp />

                  <span>8%</span>
                </div>

              </div>
            </div>

          </div>

          {/* BANNER */}
          <div className="bg-green-600 rounded-2xl p-8 text-white shadow-lg">

            <div className="flex items-start gap-4">

              <div className="bg-white/20 p-4 rounded-2xl">
                <Leaf size={30} />
              </div>

              <div className="flex-1">

                <h2 className="text-3xl font-bold mb-2">
                  CO₂ evitado sem filas e paradas
                </h2>

                <p className="text-green-100 mb-8">
                  Ao usar o Taggy, você reduz tempo de motor ligado e
                  contribui diretamente para a redução das emissões de CO₂.
                </p>

                <div className="bg-white/10 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">

                  <div className="flex items-center gap-4">

                    <div className="bg-white/20 p-3 rounded-full">
                      <Clock3 />
                    </div>

                    <div>
                      <p className="text-3xl font-bold">
                        45 min
                      </p>

                      <span className="text-green-100 text-sm">
                        Tempo economizado este mês
                      </span>
                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-4xl font-bold">
                      {co2Evitado.toFixed(1)} kg
                    </p>

                    <span className="text-green-100">
                      CO₂ evitado
                    </span>

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

function MetricCard({
  title,
  value,
  subtitle,
  icon,
  color,
}: any) {

  const styles: any = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "bg-green-100 text-green-600",
    },

    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "bg-blue-100 text-blue-600",
    },

    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "bg-purple-100 text-purple-600",
    },

    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: "bg-yellow-100 text-yellow-600",
    },
  };

  return (
    <div
      className={`
        ${styles[color].bg}
        ${styles[color].border}
        border rounded-2xl p-5 shadow-sm
      `}
    >

      <div
        className={`
          w-12 h-12 rounded-xl flex items-center justify-center mb-4
          ${styles[color].icon}
        `}
      >
        {icon}
      </div>

      <p className="text-gray-600 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-gray-900 mt-2">
        {value}
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
}