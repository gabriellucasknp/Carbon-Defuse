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

const calcularDistancia = (
  origem: any,
  destino: any
) => {
  const R = 6371;

  const dLat =
    ((destino.lat - origem.lat) *
      Math.PI) /
    180;

  const dLng =
    ((destino.lng - origem.lng) *
      Math.PI) /
    180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(
      (origem.lat * Math.PI) /
        180
    ) *
      Math.cos(
        (destino.lat *
          Math.PI) /
          180
      ) *
      Math.sin(dLng / 2) ** 2;

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return R * c;
};

export default function SimulacaoPage() {
  const [origin, setOrigin] =
    useState("");

  const [
    destination,
    setDestination
  ] = useState("");

  const [
    vehicleType,
    setVehicleType
  ] = useState("");


  const [
    fleetQuantity,
    setFleetQuantity
  ] = useState(1);

  const [result, setResult] =
    useState<any>(null);

  const [
    showOriginList,
    setShowOriginList
  ] = useState(false);

  const [
    showDestinationList,
    setShowDestinationList
  ] = useState(false);

  const { addSimulation } =
    useImpact();

const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

const tipoUsuario = user?.tipo || "fisica";

const [simulationType, setSimulationType] =
  useState(
    tipoUsuario === "corporativa"
      ? "corporativa"
      : "fisica"
  );
  const filtrar = (
    texto: string
  ) =>
    locais.filter((l: any) =>
      l.nome
        .toLowerCase()
        .includes(
          texto.toLowerCase()
        )
    );

  const handleCalcular =
    async () => {
      const origemObj =
        locais.find(
          (l: any) =>
            l.nome === origin
        );

      const destinoObj =
        locais.find(
          (l: any) =>
            l.nome ===
            destination
        );

      if (
        !origemObj ||
        !destinoObj ||
        !vehicleType
      ) {
        alert(
          "Selecione opções válidas"
        );
        return;
      }

      const distancia =
        calcularDistancia(
          origemObj,
          destinoObj
        );

      const tempo =
        (distancia / 80) * 60;

      const consumoPorKm: any =
        {
          sedan: 0.06,
          suv: 0.08,
          pickup: 0.1,
          compact: 0.05
        };

      const combustivelBase =
        distancia *
        consumoPorKm[
          vehicleType
        ];

      const co2Base =
        combustivelBase * 2.3;

      const multiplicador =
        simulationType ===
        "corporativa"
          ? fleetQuantity
          : 1;

      const combustivel =
        combustivelBase *
        multiplicador;

      const co2 =
        co2Base *
        multiplicador;

      const resultado = {
        origem: origin,
        destino: destination,
        distancia:
          Math.round(
            distancia
          ),

        co2,
        combustivel,
        tempo,

        tipo:
          simulationType,

        quantidadeVeiculos:
          simulationType ===
          "corporativa"
            ? fleetQuantity
            : 1,

        veiculo:
          vehicleType,

        data:
          new Date().toISOString()
      };

      setResult(resultado);

      const token =
        localStorage.getItem(
          "token"
        );

      try {
        const response =
          await fetch(
            "http://localhost:3000/simulation",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(
                resultado
              )
            }
          );

        const data =
          await response.json();

        console.log(
          "Salvo no banco:",
          data
        );

        addSimulation(
          resultado
        );
      } catch (err) {
        console.error(err);
      }
    };
return (
  <PageLayout>
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-8 items-start">

        {/* FORMULÁRIO */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 space-y-5">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Simulação de Rota
            </h1>

            <p className="text-gray-500 mt-1">
              Calcule distância, consumo e emissão de CO₂
            </p>
          </div>

{/* TIPO - APENAS PARA CORPORATIVO */}
{tipoUsuario === "corporativa" && (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-3">
      Tipo de simulação
    </label>

    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => setSimulationType("fisica")}
        className={`flex-1 p-4 rounded-xl font-semibold transition ${
          simulationType === "fisica"
            ? "bg-green-600 text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        Pessoa Física
      </button>

      <button
        type="button"
        onClick={() => setSimulationType("corporativa")}
        className={`flex-1 p-4 rounded-xl font-semibold transition ${
          simulationType === "corporativa"
            ? "bg-green-600 text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        Corporativa
      </button>
    </div>
  </div>
)}

          {/* ORIGEM */}
          <div className="relative">
            <input
              value={origin}
              onChange={(e) => {
                setOrigin(e.target.value);
                setShowOriginList(true);
              }}
              onBlur={() =>
                setTimeout(
                  () => setShowOriginList(false),
                  100
                )
              }
              placeholder="Cidade de origem"
              className="w-full border border-gray-300 rounded-xl p-4"
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
                    className="px-4 py-3 hover:bg-green-50 cursor-pointer"
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
                setTimeout(
                  () =>
                    setShowDestinationList(false),
                  100
                )
              }
              placeholder="Cidade de destino"
              className="w-full border border-gray-300 rounded-xl p-4"
            />

            {showDestinationList &&
              destination && (
                <div className="absolute z-10 w-full mt-2 bg-white border rounded-xl shadow-lg max-h-44 overflow-auto">
                  {filtrar(destination).map(
                    (l: any) => (
                      <div
                        key={l.nome}
                        onClick={() => {
                          setDestination(l.nome);
                          setShowDestinationList(
                            false
                          );
                        }}
                        className="px-4 py-3 hover:bg-green-50 cursor-pointer"
                      >
                        {l.nome}
                      </div>
                    )
                  )}
                </div>
              )}
          </div>

          {/* VEÍCULO */}
          <select
            value={vehicleType}
            onChange={(e) =>
              setVehicleType(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl p-4"
          >
            <option value="">
              Tipo de veículo
            </option>
            <option value="sedan">
              Sedan
            </option>
            <option value="suv">
              SUV
            </option>
            <option value="pickup">
              Caminhonete
            </option>
            <option value="compact">
              Compacto
            </option>
          </select>

          {simulationType ===
            "corporativa" && (
            <input
              type="number"
              min={1}
              value={fleetQuantity}
              onChange={(e) =>
                setFleetQuantity(
                  Number(e.target.value)
                )
              }
              placeholder="Quantidade de veículos"
              className="w-full border border-gray-300 rounded-xl p-4"
            />
          )}

          <button
            onClick={handleCalcular}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold p-4 rounded-xl"
          >
            Calcular Impacto
          </button>

          {result && (
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl p-6 grid md:grid-cols-2 gap-4">
              <div>
                Distância: {result.distancia} km
              </div>

              <div>
                CO₂: {result.co2.toFixed(2)}
                kg
              </div>

              <div>
                Combustível:{" "}
                {result.combustivel.toFixed(2)}
                L
              </div>

              <div>
                Tempo:{" "}
                {result.tempo.toFixed(0)}
                min
              </div>
            </div>
          )}
        </div>

        {/* EXPLICAÇÃO DO CÁLCULO */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 sticky top-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Como calculamos o impacto?
          </h2>

          <div className="space-y-5 text-gray-600">

            <div>
              <h3 className="font-semibold text-green-600 mb-2">
                📍 Distância
              </h3>

              <p>
                Utilizamos a fórmula de Haversine para
                calcular a distância entre os estados
                selecionados utilizando latitude e
                longitude.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-600 mb-2">
                ⛽ Consumo de combustível
              </h3>

              <ul className="space-y-1">
                <li>• Sedan: 0,10 L/km</li>
                <li>• SUV: 0,08 L/km</li>
                <li>• Caminhonete: 0,10 L/km</li>
                <li>• Compacto: 0,05 L/km</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-600 mb-2">
                🌱 Emissão de CO₂
              </h3>

              <p>
                Cada litro de combustível consumido
                gera aproximadamente 2,3 kg de CO₂.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-600 mb-2">
                🏢 Simulação corporativa
              </h3>

              <p>
                Os resultados são multiplicados pela
                quantidade de veículos da frota,
                permitindo visualizar o impacto total
                da operação.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-700 mb-2">
                Fórmulas utilizadas
              </h3>

              <p>
                Combustível = Distância × Consumo/km
              </p>

              <p>
                CO₂ = Combustível × 2,3
              </p>

              <p>
                Tempo = Distância ÷ 80 km/h
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </PageLayout>
)}
