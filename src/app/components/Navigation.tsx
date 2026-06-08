import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/svg-hfd06lx9tq";

function NavLink({
  to,
  icon,
  label,
  isActive
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}) {
  const textColor = isActive
    ? "text-[#008236]"
    : "text-[#4a5565]";

  const fontWeight = isActive
    ? "font-medium"
    : "font-normal";

  const borderColor = isActive
    ? "border-[#00a63e]"
    : "border-[rgba(0,0,0,0)]";

  return (
    <Link to={to} className="h-[45.714px] relative shrink-0">
      <div
        aria-hidden="true"
        className={`absolute ${borderColor} border-b-[1.714px] border-solid inset-0 pointer-events-none`}
      />

      <div className="flex gap-[8px] items-center h-full pl-[12px] md:pl-[16px]">
        <div className="relative shrink-0 size-[18px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            viewBox="0 0 18 18"
          >
            {icon}
          </svg>
        </div>

        <p
          className={`${fontWeight} ${textColor} text-[14px] whitespace-nowrap`}
        >
          {label}
        </p>
      </div>
    </Link>
  );
}

export default function Navigation() {
  const location = useLocation();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const tipo = user?.tipo || "fisica";

  return (
    <div className="bg-white h-[46.286px] w-full">
      <div className="flex gap-[8px] md:gap-[106px] overflow-x-auto">

        <NavLink
          to="/"
          label="Dashboard"
          isActive={location.pathname === "/"}
          icon={<g><path d={svgPaths.p2f7c3ff0} /></g>}
        />

        <NavLink
          to="/historico"
          label="Histórico"
          isActive={location.pathname === "/historico"}
          icon={<g><path d={svgPaths.p1722c40} /></g>}
        />

        <NavLink
          to="/comparacao"
          label="Comparação"
          isActive={location.pathname === "/comparacao"}
          icon={<g><path d={svgPaths.p18547e80} /></g>}
        />

        <NavLink
          to="/simulacao"
          label="Simulação"
          isActive={location.pathname === "/simulacao"}
          icon={<g><path d={svgPaths.p368b5000} /></g>}
        />

        {tipo === "corporativa" && (
          <NavLink
            to="/corporativo"
            label="Corporativo"
            isActive={location.pathname === "/corporativo"}
            icon={
              <g>
                <path d={svgPaths.p3cb50b00} />
              </g>
            }
          />
        )}

      </div>
    </div>
  );
}