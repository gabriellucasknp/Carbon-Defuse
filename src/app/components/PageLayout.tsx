import Header from "./Header";
import Navigation from "./Navigation";
import { useNavigate } from "react-router";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative min-h-screen min-w-full h-screen">
      <div className="relative w-full">
        <Header />
        <button
          onClick={handleLogout}
          className="absolute right-8 top-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-['Inter:Medium',sans-serif] text-[14px] transition-colors flex items-center gap-2"
        >
          <svg className="size-4" fill="none" viewBox="0 0 16 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 14H3.333A1.333 1.333 0 012 12.667V3.333A1.333 1.333 0 013.333 2H6"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.667 11.333L14 8l-3.333-3.333"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 8H6"/>
          </svg>
          Sair
        </button>
      </div>
      <Navigation />
      <div className="flex-1 w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
