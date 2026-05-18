import PageLayout from "../components/PageLayout";
import { useState } from "react";
import { useImpact } from "../context/ImpactContext";

const locais: any = [
  { nome: "Acre", lat: -9.0238, lng: -70.812 },
  { nome: "Alagoas", lat: -9.5713, lng: -36.782 },
  { nome: "Amapá", lat: 1.41, lng: -51.77 },
  { nome: "Amazonas", lat: -3.4168, lng: -65.8561 },
  { nome: "Bahia", lat: -12.5797, lng: -41.7007 },
  { nome: "Ceará", lat: -5.4984, lng: -39.3206 },
  { nome: "Distrito Federal", lat: -15.7998, lng: -47.8645 },
  { nome: "Espírito Santo", lat: -19.1834, lng: -40.3089 },
  { nome: "Goiás", lat: -15.827, lng: -49.8362 },
  { nome: "Maranhão", lat: -4.9609, lng: -45.2744 },
  { nome: "Mato Grosso", lat: -12.6819, lng: -56.9211 },
  { nome: "Mato Grosso do Sul", lat: -20.7722, lng: -54.7852 },
  { nome: "Minas Gerais", lat: -18.5122, lng: -44.555 },
  { nome: "Pará", lat: -3.4168, lng: -52.3346 },
  { nome: "Paraíba", lat: -7.2399, lng: -36.7819 },
  { nome: "Paraná", lat: -24.89, lng: -51.55 },
  { nome: "Pernambuco", lat: -8.8137, lng: -36.9541 },
  { nome: "Piauí", lat: -7.7183, lng: -42.7289 },
  { nome: "Rio de Janeiro", lat: -22.25, lng: -42.66 },
  { nome: "Rio Grande do Norte", lat: -5.4026, lng: -36.9541 },
  { nome: "Rio Grande do Sul", lat: -30.0346, lng: -53.25 },
  { nome: "Rondônia", lat: -10.83, lng: -63.34 },
  { nome: "Roraima", lat: 1.99, lng: -61.33 },
  { nome: "Santa Catarina", lat: -27.2423, lng: -50.2189 },
  { nome: "São Paulo", lat: -22.19, lng: -48.79 },
  { nome: "Sergipe", lat: -10.5741, lng: -37.3857 },
  { nome: "Tocantins", lat: -10.1753, lng: -48.2982 }
];

const calcularDistancia = (origem: any, destino: any) => {
  const R = 6371;
  const dLat = ((destino.lat - origem.lat) * Math.PI) / 180;
  const dLng = ((destino.lng - origem.lng) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((origem.lat * Math.PI) / 180) *
      Math.cos((destino.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function SimulacaoPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [result, setResult] = useState<any>(null);

  const [showOriginList, setShowOriginList] = useState(false);
  const [showDestinationList, setShowDestinationList] = useState(false);

  const { addSimulation } = useImpact();

  const filtrar = (texto: string) =>
    locais.filter((l: any) =>
      l.nome.toLowerCase().includes(texto.toLowerCase())
    );

  const handleCalcular = () => {
    const origemObj = locais.find((l: any) => l.nome === origin);
    const destinoObj = locais.find((l: any) => l.nome === destination);

    if (!origemObj || !destinoObj || !vehicleType) {
      alert("Selecione opções válidas");
      return;
    }

    const distancia = calcularDistancia(origemObj, destinoObj);
    const tempo = (distancia / 80) * 60;

    const consumoPorKm: any = {
      sedan: 0.06,
      suv: 0.08,
      pickup: 0.1,
      compact: 0.05
    };

    const combustivel = distancia * consumoPorKm[vehicleType];
    const co2 = combustivel * 2.3;

    const resultado = {
      origem: origin,
      destino: destination,
      distancia: Math.round(distancia),
      co2,
      combustivel,
      tempo,
      data: new Date().toISOString()
    };

    setResult(resultado);
    addSimulation(resultado);
  };

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 space-y-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Simulação de Rota
            </h1>
            <p className="text-gray-500 mt-1">
              Calcule distância, consumo e emissão de CO₂
            </p>
          </div>

          {/* ORIGEM */}
          <div className="relative">
            <input
              value={origin}
              onChange={(e) => {
                setOrigin(e.target.value);
                setShowOriginList(true);
              }}
              onBlur={() =>
                setTimeout(() => setShowOriginList(false), 100)
              }
              placeholder="Cidade de origem"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            {showOriginList && origin && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded-xl shadow-lg max-h-44 overflow-auto">
                {filtrar(origin).map((l: any) => (
                  <div
                    key={l.nome}
                    onClick={() => {
                      setOrigin(l.nome);
                      setShowOriginList(false);
                    }}
                    className="px-4 py-3 hover:bg-green-50 cursor-pointer transition"
                  >
                    {l.nome}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DESTINO */}
          <div className="relative">
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setShowDestinationList(true);
              }}
              onBlur={() =>
                setTimeout(() => setShowDestinationList(false), 100)
              }
              placeholder="Cidade de destino"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            {showDestinationList && destination && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded-xl shadow-lg max-h-44 overflow-auto">
                {filtrar(destination).map((l: any) => (
                  <div
                    key={l.nome}
                    onClick={() => {
                      setDestination(l.nome);
                      setShowDestinationList(false);
                    }}
                    className="px-4 py-3 hover:bg-green-50 cursor-pointer transition"
                  >
                    {l.nome}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* VEÍCULO */}
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Tipo de veículo</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="pickup">Caminhonete</option>
            <option value="compact">Compacto</option>
          </select>

          {/* BOTÃO */}
          <button
            onClick={handleCalcular}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold p-4 rounded-xl shadow-md transition duration-300"
          >
            Calcular Impacto
          </button>

          {/* RESULTADO */}
          {result && (
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl p-6 shadow-lg grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-sm opacity-80">Distância</p>
                <p className="text-2xl font-bold">
                  {result.distancia} km
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-sm opacity-80">CO₂ Emitido</p>
                <p className="text-2xl font-bold">
                  {result.co2.toFixed(2)} kg
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-sm opacity-80">Combustível</p>
                <p className="text-2xl font-bold">
                  {result.combustivel.toFixed(2)} L
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-sm opacity-80">Tempo</p>
                <p className="text-2xl font-bold">
                  {result.tempo.toFixed(0)} min
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}