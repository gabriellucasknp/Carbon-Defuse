// Em produção, frontend e backend rodam no mesmo servidor — usa URL relativa.
// Em desenvolvimento, usa localhost:3000.
const rawApiUrl: string | undefined = import.meta.env.VITE_API_URL;
export const API_URL = rawApiUrl
    ? rawApiUrl.startsWith("http") ? rawApiUrl : `https://${rawApiUrl}`
    : "";

// Cabeçalho de autenticação com o token salvo (se houver).
export function authHeaders(): Record<string, string> {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Busca as simulações do usuário. SEMPRE retorna um array — assim as páginas
// podem usar .map/.filter/.reduce com segurança, mesmo se a API falhar ou
// devolver um objeto de erro (era o que causava a tela branca em produção).
export async function fetchSimulations(): Promise<any[]> {
  try {
    const res = await fetch(`${API_URL}/simulation`, {
      headers: authHeaders(),
    });

    // Token ausente/expirado: limpa a sessão e volta para o login.
    if (res.status === 401) {
      localStorage.clear();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Erro ao buscar simulações:", err);
    return [];
  }
}