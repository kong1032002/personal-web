export const useApi = (name: string) => {
  const api = {
    "admin": {
      method: 'GET',
      url: ''
    },
    "nuxt_beers": {
      method: 'GET',
      url: '/beers'
    }
  }
  return api[name as keyof typeof api];
}
