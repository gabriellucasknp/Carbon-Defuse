import PageLayout from "../components/PageLayout";
import { useImpact } from "../context/ImpactContext";

export default function DashboardPage() {
  const { history } = useImpact();

  // 🔥 cálculos reais
  const totalCO2 = history.reduce((acc, item) => acc + item.co2, 0);
  const totalCombustivel = history.reduce((acc, item) => acc + item.combustivel, 0);
  const totalViagens = history.length;

  const co2Evitado = totalCO2 * 0.2; // 20% de economia simulada
  const arvores = totalCO2 / 21; // média: 1 árvore absorve ~21kg CO2/ano

  return (
    <PageLayout>
      <div className="flex-1 w-full overflow-y-auto px-8 py-6">
        <div className="max-w-7xl mx-auto space-y-6">

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Resumo do Impacto
            </h1>
            <p className="text-sm text-gray-500">
              Dados baseados nas suas simulações
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Card title="CO₂ Evitado" value={`${co2Evitado.toFixed(2)} kg`} />

            <Card title="Combustível Economizado" value={`${totalCombustivel.toFixed(2)} L`} />

            <Card title="Uso no mês" value={`${totalViagens}`} />

            <Card title="Equivalente Ambiental" value={`${arvores.toFixed(2)} árvores`} />

          </div>

          {/* GRÁFICOS SIMPLES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* DISTRIBUIÇÃO */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="font-bold mb-4">Distribuição de Emissões</h2>

              <div className="flex justify-between text-sm">
                <span>CO₂ Total:</span>
                <strong>{totalCO2.toFixed(2)} kg</strong>
              </div>

              <div className="flex justify-between text-sm">
                <span>CO₂ Evitado:</span>
                <strong>{co2Evitado.toFixed(2)} kg</strong>
              </div>
            </div>

            {/* EVOLUÇÃO */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="font-bold mb-4">Últimas Viagens</h2>

              {history.length === 0 && (
                <p className="text-sm text-gray-500">
                  Nenhuma simulação ainda
                </p>
              )}

              {history.slice(0, 5).map((item, index) => (
                <div key={index} className="flex justify-between text-sm border-b py-2">
                  <span>
                    {item.origem} → {item.destino}
                  </span>
                  <strong>{item.co2.toFixed(2)} kg</strong>
                </div>
              ))}
            </div>

          </div>

          {/* RESUMO FINAL */}
          <div className="bg-green-600 text-white rounded-xl p-6">
            <h2 className="font-bold text-lg mb-2">
              Impacto Positivo 🌱
            </h2>

            <p className="text-sm mb-4">
              Você já evitou aproximadamente{" "}
              <strong>{co2Evitado.toFixed(2)} kg de CO₂</strong>
            </p>

            <p className="text-sm">
              Continue simulando rotas para aumentar seu impacto ambiental positivo.
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white border rounded-xl shadow p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}