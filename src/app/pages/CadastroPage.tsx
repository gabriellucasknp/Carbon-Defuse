import { useState } from "react";
import { useNavigate } from "react-router";

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    senha: "",
    confirmarSenha: ""
  });
  const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.senha !== formData.confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Erro ao cadastrar");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(data));

    alert("Conta criada com sucesso!");

    
  } catch (error) {
    console.error(error);
    alert("Erro ao conectar com servidor");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00a63e] to-[#096] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 my-8">
        <div className="flex flex-col items-center mb-8">
          <div className="size-16 bg-gradient-to-r from-[#00a63e] to-[#096] rounded-full flex items-center justify-center mb-4">
            <svg className="size-8" fill="none" viewBox="0 0 32 32">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"/>
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" d="M16 10.667v8L20 22"/>
            </svg>
          </div>
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] text-[#101828] mb-2">Criar Conta</h1>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">Junte-se ao Carbon Defuse</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="João Silva"
                className="w-full h-[44px] border-[#d1d5dc] border-[1.5px] rounded-lg px-4 font-['Inter:Regular',sans-serif] text-[14px] focus:border-[#00a63e] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                Empresa
              </label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Nome da empresa"
                className="w-full h-[44px] border-[#d1d5dc] border-[1.5px] rounded-lg px-4 font-['Inter:Regular',sans-serif] text-[14px] focus:border-[#00a63e] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full h-[44px] border-[#d1d5dc] border-[1.5px] rounded-lg px-4 font-['Inter:Regular',sans-serif] text-[14px] focus:border-[#00a63e] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="w-full h-[44px] border-[#d1d5dc] border-[1.5px] rounded-lg px-4 font-['Inter:Regular',sans-serif] text-[14px] focus:border-[#00a63e] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full h-[44px] border-[#d1d5dc] border-[1.5px] rounded-lg px-4 font-['Inter:Regular',sans-serif] text-[14px] focus:border-[#00a63e] focus:outline-none transition-colors"
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] mb-2">
                Confirmar Senha
              </label>
              <input
                type="password"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full h-[44px] border-[#d1d5dc] border-[1.5px] rounded-lg px-4 font-['Inter:Regular',sans-serif] text-[14px] focus:border-[#00a63e] focus:outline-none transition-colors"
                required
                minLength={6}
              />
            </div>
          </div>

          <div className="flex items-start gap-2 pt-2">
            <input type="checkbox" className="w-4 h-4 mt-1 border-[#d1d5dc] rounded text-[#00a63e] focus:ring-[#00a63e]" required />
            <label className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">
              Aceito os termos de uso e política de privacidade do Carbon Defuse
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00a63e] to-[#096] h-[48px] rounded-lg shadow-lg font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white hover:shadow-xl transition-shadow"
          >
            Criar Conta
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">
            Já tem uma conta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#00a63e] hover:text-[#008236]"
            >
              Entrar
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
