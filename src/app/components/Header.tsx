import svgPaths from "../../imports/svg-hfd06lx9tq";
import { useNavigate } from "react-router";

function Icon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="absolute inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g>
          <path
            d={svgPaths.p1e821000}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />

          <path
            d={svgPaths.p32206a80}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
        </g>
      </svg>
    </div>
  );
}

export default function Header() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const nomeUsuario = user?.nome || "Usuário";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="w-full bg-gradient-to-r from-[#00a63e] to-[#009966] border-b border-[#008236] shadow-sm">

      <div className="h-20 px-6 md:px-8 flex items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <Icon />

          <div>
            <h1 className="text-white font-bold text-[22px] leading-none">
              Carbon Defuse
            </h1>

            <p className="text-[#dcfce7] text-sm mt-1">
              by Taggy
            </p>
          </div>

        </div>

        {/* USUÁRIO */}
        <div className="ml-auto flex items-center gap-4 bg-white/10 px-5 py-2 rounded-2xl backdrop-blur-sm">

          {/* FOTO */}
          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg shrink-0">
            {nomeUsuario.charAt(0).toUpperCase()}
          </div>

          {/* INFO */}
          <div className="flex flex-col leading-tight min-w-max">

            <span className="text-white font-semibold text-sm whitespace-nowrap">
              {nomeUsuario}
            </span>

            <span className="text-[#dcfce7] text-xs whitespace-nowrap">
              Usuário logado
            </span>

          </div>

          {/* SAIR */}
          <button
            onClick={handleLogout}
            className="text-white text-sm font-medium hover:text-red-200 transition-colors"
          >
            Sair
          </button>

        </div>

      </div>

    </header>
  );
}