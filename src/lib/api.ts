// Em produção, frontend e backend rodam no mesmo servidor — usa URL relativa.
// Em desenvolvimento, usa localhost:3000.
const rawApiUrl: string | undefined = import.meta.env.VITE_API_URL;
export const API_URL = rawApiUrl
    ? rawApiUrl.startsWith("http") ? rawApiUrl : `https://${rawApiUrl}`
    : "";
