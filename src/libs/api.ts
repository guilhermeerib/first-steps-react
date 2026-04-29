const apiUrl = import.meta.env.VITE_API_URL

// Helper genérico para lidar com o fetch
async function fetchWrapper<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Erro na requisição para ${endpoint}: ${response.statusText}`)
  }

  // Lida com respostas vazias (como 204 No Content no DELETE)
  const text = await response.text()
  if (!text) {
    return {} as T
  }

  return JSON.parse(text)
}

export const api = {
  get: <T>(endpoint: string, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, body: unknown, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) }),

  patch: <T>(endpoint: string, body: unknown, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: 'PATCH', body: JSON.stringify(body) }),

  delete: <T = void>(endpoint: string, options?: RequestInit) =>
    fetchWrapper<T>(endpoint, { ...options, method: 'DELETE' }),
}
