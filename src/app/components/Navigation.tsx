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
  const strokeColor = isActive ? "#008236" : "#4A5565";
  const textColor = isActive ? "text-[#008236]" : "text-[#4a5565]";
  const fontWeight = isActive ? "font-medium" : "font-normal";
  const borderColor = isActive ? "border-[#00a63e]" : "border-[rgba(0,0,0,0)]";

  return (
    <Link to={to} className="h-[45.714px] relative shrink-0">
      <div aria-hidden="true" className={`absolute ${borderColor} border-b-[1.714px] border-solid inset-0 pointer-events-none`} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[1.714px] pl-[12px] md:pl-[16px] pr-[12px] md:pr-0 h-full">
        <div className="relative shrink-0 size-[18px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            {icon}
          </svg>
        </div>
        <div className="h-[20px] relative shrink-0">
          <p className={`absolute font-['Inter:Regular',sans-serif] ${fontWeight} leading-[20px] left-0 not-italic ${textColor} text-[13px] md:text-[14px] top-[-0.43px] whitespace-nowrap`}>
            {label}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="bg-white h-[46.286px] relative shrink-0 w-full" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.571px] px-[16px] md:px-[32px] relative size-full">
        <div className="content-stretch flex gap-[8px] md:gap-[106px] h-[45.714px] items-start relative shrink-0 w-full overflow-x-auto">
          <NavLink
            to="/"
            label="Dashboard"
            isActive={location.pathname === "/"}
            icon={
              <g id="Icon">
                <path d={svgPaths.p2f7c3ff0} id="Vector" stroke={location.pathname === "/" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p772e900} id="Vector_2" stroke={location.pathname === "/" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p99ad200} id="Vector_3" stroke={location.pathname === "/" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p3fc0d440} id="Vector_4" stroke={location.pathname === "/" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            }
          />
          <NavLink
            to="/historico"
            label="Histórico"
            isActive={location.pathname === "/historico"}
            icon={
              <g id="Icon">
                <path d={svgPaths.p1722c40} id="Vector" stroke={location.pathname === "/historico" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M2.25 2.25V6H6" id="Vector_2" stroke={location.pathname === "/historico" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M9 5.25V9L12 10.5" id="Vector_3" stroke={location.pathname === "/historico" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            }
          />
          <NavLink
            to="/comparacao"
            label="Comparação"
            isActive={location.pathname === "/comparacao"}
            icon={
              <g id="Icon">
                <path d={svgPaths.p18547e80} id="Vector" stroke={location.pathname === "/comparacao" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p192ac80} id="Vector_2" stroke={location.pathname === "/comparacao" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p15c07700} id="Vector_3" stroke={location.pathname === "/comparacao" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.pbd9bb80} id="Vector_4" stroke={location.pathname === "/comparacao" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            }
          />
          <NavLink
            to="/simulacao"
            label="Simulação"
            isActive={location.pathname === "/simulacao"}
            icon={
              <g id="Icon">
                <path d={svgPaths.p368b5000} id="Vector" stroke={location.pathname === "/simulacao" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p12964f80} id="Vector_2" stroke={location.pathname === "/simulacao" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p2496bc40} id="Vector_3" stroke={location.pathname === "/simulacao" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            }
          />
          <NavLink
            to="/corporativo"
            label="Corporativo"
            isActive={location.pathname === "/corporativo"}
            icon={
              <g clipPath="url(#clip0_2_1076)" id="Icon">
                <path d={svgPaths.p3cb50b00} id="Vector" stroke={location.pathname === "/corporativo" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p3f23a000} id="Vector_2" stroke={location.pathname === "/corporativo" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p1f67c900} id="Vector_3" stroke={location.pathname === "/corporativo" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M7.5 4.5H10.5" id="Vector_4" stroke={location.pathname === "/corporativo" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M7.5 7.5H10.5" id="Vector_5" stroke={location.pathname === "/corporativo" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M7.5 10.5H10.5" id="Vector_6" stroke={location.pathname === "/corporativo" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M7.5 13.5H10.5" id="Vector_7" stroke={location.pathname === "/corporativo" ? "#008236" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            }
          />
        </div>
      </div>
    </div>
  );
}
