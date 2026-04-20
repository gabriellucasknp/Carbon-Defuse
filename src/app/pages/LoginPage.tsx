import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00a63e] to-[#096] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="size-16 bg-gradient-to-r from-[#00a63e] to-[#096] rounded-full flex items-center justify-center mb-4">
            <svg className="size-8" fill="none" viewBox="0 0 32 32">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"/>
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" d="M16 10.667v8L20 22"/>
            </svg>
          </div>
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] text-[#101828] mb-2">Carbon Defuse</h1>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">Sistema de Gestão de Rotas</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full h-[44px] border-[#d1d5dc] border-[1.5px] rounded-lg px-4 font-['Inter:Regular',sans-serif] text-[14px] focus:border-[#00a63e] focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-[44px] border-[#d1d5dc] border-[1.5px] rounded-lg px-4 font-['Inter:Regular',sans-serif] text-[14px] focus:border-[#00a63e] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border-[#d1d5dc] rounded text-[#00a63e] focus:ring-[#00a63e]" />
              <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">Lembrar-me</span>
            </label>
            <a href="#" className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#00a63e] hover:text-[#008236]">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00a63e] to-[#096] h-[48px] rounded-lg shadow-lg font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white hover:shadow-xl transition-shadow"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">
            Não tem uma conta?{" "}
            <button
              onClick={() => navigate("/cadastro")}
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#00a63e] hover:text-[#008236]"
            >
              Cadastre-se
            </button>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e5e7eb]">
          <p className="text-center font-['Inter:Regular',sans-serif] text-[12px] text-[#6a7282]">
            by Taggy - Gestão Sustentável de Rotas
          </p>
        </div>
      </div>
    </div>
  );
}
