export const useApi = (name: string) => {
  const api = {
    "admin": {
      url: '',
      method: 'GET',
      options: {
        headers: {

        }
      }
    },
    "nuxt_beers": {
      url: '/beers',
      method: 'GET',
      headers: {
      }
    }
  }
  return api[name as keyof typeof api];
}
