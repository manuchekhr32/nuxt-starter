import type { NitroFetchRequest } from 'nitropack'
import type { FetchOptions } from 'ofetch'

export const useApi = (apiUrl?: string) => {
  const baseURL = apiUrl || (import.meta.env.VITE_API_BASE_URL as string)

  function $service(options?: FetchOptions) {
    // You can add your global request headers
    // eslint-disable-next-line
    const headers: Record<string, any> = {}
    Object.assign(headers, options?.headers)
    return $fetch.create({
      ...options,
      baseURL,
      headers,
    })
  }

  function $get<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(options)(endpoint)
        // eslint-disable-next-line
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  }

  function $post<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'POST' })(endpoint)
        // eslint-disable-next-line
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
    })
  }

  function $put<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'PUT' })(endpoint)
        // eslint-disable-next-line
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
    })
  }

  function $patch<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'PATCH' })(endpoint)
        // eslint-disable-next-line
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
    })
  }

  function $delete<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'DELETE' })(endpoint)
        // eslint-disable-next-line
        .then((response: T | any) => {
          resolve(response)
        })
        .catch((error) => reject(error.response))
    })
  }

  return {
    baseURL,
    $get,
    $post,
    $put,
    $patch,
    $delete,
  }
}
