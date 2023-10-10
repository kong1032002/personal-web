import defu from "defu"
import { stringifyQuery } from "vue-router"

export const useFetchClient = () => {
    const userAuth = useCookie('token')
    const config = useRuntimeConfig()

    const defaults = {
        baseURL: config.baseUrl ?? 'https://api.nuxtjs.dev',
        // cache request
        headers: {
            Authorization: userAuth.value ? `Bearer ${userAuth.value}` : null,
            "Content-Type": "application/json"
        },
    }

    /**
     * Sends a request to the server.
     *
     * @param url The URL of the resource to request.
     * @param params The query parameters to include in the request.
     * @param body The body of the request.
     * @param options Additional options for the request.
     * @returns A promise that resolves to the response from the server.
     */
    const FETCH = (url: string, params?: {} | null, body?: {} | null, options?: {}) => {
        options = body ? { ...options, body } : options
        options = defu(options, defaults);
        url = params ? `${url}?${stringifyQuery(params)}` : url;
        return useFetch(url, options)
    }

    /**
     * Sends a GET request to the server.
     *
     * @param url The URL of the resource to request.
     * @param params The query parameters to include in the request.
     * @param options Additional options for the GET request.
     * @returns A promise that resolves to the response from the server.
     */
    const GET = (url: string, params?: {} | null, options?: {}) => {
        options = defu({ ...options, method: 'GET' }, defaults)
        return FETCH(url, params, null, options)
    }

    /**
     * Sends a POST request to the server.
    *
     * @param url The URL of the resource to create.
     * @param body The body of the POST request.
     * @param options Additional options for the POST request.
     * @returns A promise that resolves to the response from the server.
    */
    const POST = (url: string, body?: {} | null, options?: {}) => {
        options = defu({ ...options, method: 'POST' }, defaults)
        return FETCH(url, null, body, options)
    }

    /**
     * Sends a PUT request to the server to update a resource with the given ID.
     *
     * @param url The URL of the resource to update.
     * @param id The ID of the resource to update.
     * @param body The body of the PUT request.
     * @param options Additional options for the PUT request.
     * @returns A promise that resolves to the response from the server.
     */
    const PUT = (url: string, id: number, body?: {} | null, options?: {}) => {
        options = defu({ ...options, method: 'PUT' }, defaults)
        url = `${url}/${id}`
        return FETCH(url, null, body, options)
    }

    /**
     * Sends a PATCH request to the server to update a resource with the given ID.
     *
     * @param url The URL of the resource to update.
     * @param id The ID of the resource to update.
     * @param body The body of the PATCH request.
     * @param options Additional options for the PATCH request.
     * @returns A promise that resolves to the response from the server.
     */
    const PATCH = (url: string, id?: number | null, body?: {} | null, options?: {}) => {
        options = defu({ ...options, method: 'PATCH' }, defaults)
        url = `${url}/${id}`
        return FETCH(url, null, body, options)
    }

    /**
     * Sends a DELETE request to the server to delete a resource with the given ID.
     *
     * @param url The URL of the resource to delete.
     * @param id The ID of the resource to delete.
     * @param options Additional options for the DELETE request.
     * @returns A promise that resolves to the response from the server.
     */
    const DELETE = (url: string, id?: number | null, options?: {}) => {
        options = defu({ ...options, method: 'DELETE' }, defaults)
        url = `${url}/${id}`
        return FETCH(url, null, null, options)
    }

    const API = (apiName: string, params?: {} | null, body?: {} | null, options?: {}) => {
        var api = useApi(apiName)
        options = {
            ...options,
            method: api.method,
            body: body,
        }
        return FETCH(api.url, params, null, options)
    }

    /**
     * Factory method
     */
    const fetchClientFactory = {
        FETCH: FETCH,
        DELETE: DELETE,
        POST: POST,
        GET: GET,
        PATCH: PATCH,
        PUT: PUT,
        API: API
    }

    return {
        fetchClientFactory,
    }
}