export const useApi = (name: string) => {
  const api = {
    "admin": {
      url: '',
      method: 'GET',
      headers: {
      }
    },
    "nuxt_beers": {
      url: '/beers',
      method: 'GET',
      headers: {
      }
    },
    "ntkong": {
      url: '/huybeo',
      method: 'POST',
      headers: {
        hehe: "nguthe"
      }
    }
  }
  return api[name as keyof typeof api];
}
