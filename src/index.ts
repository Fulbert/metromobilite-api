import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { MAPIParams, MAPIFeature, MAPIURLParams } from './types'

import API_ENDS from './api_end'

/**
 * Class to request data from Métromobilité API
 * See https://www.metromobilite.fr/pages/opendata/OpenDataApi.html for API details
 * See README for usage example
 */
export default class MAPI {
  public baseURL = 'https://data.metromobilite.fr/api/'
  private api: AxiosInstance

  /**
   * MAPI Class constructor
   * @param params MAPIParams can contain custom baseURL if you want to use a different API
   */
  public constructor(params?: MAPIParams) {
    // overhide params if given
    if (params) {
      this.baseURL = params.API_END
    }

    // Create an Axios instance for shorter call
    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: 1000,
    })
  }

  /**
   * Get datas for a specific resource with specific params
   * @param resource string Resource to get
   * @param params MAPIURLParams Parameters for the request
   */
  public async getData(
    resource: string,
    params: MAPIURLParams = {},
  ): Promise<MAPIFeature[]> {
    try {
      const response: AxiosResponse = await this.getRawData(resource, params)
      return response.data.features
    } catch (e) {
      throw e
    }
  }

  /**
   * Create GET request on Métromobilité API for a resource with params
   * Check if an API End exist for the requested resource first
   * Return a Promise<AxiosResponse>
   * @param resource string Resource to get
   * @param params MAPIURLParams Parameters for the request
   */
  async getRawData(
    resource: string,
    params: MAPIURLParams = {},
  ): Promise<AxiosResponse> {
    if (API_ENDS[resource]) {
      try {
        const response: AxiosResponse = await this.api.get(API_ENDS[resource], {
          params: params,
        })
        if (response.status !== 200)
          throw 'Failed to get datas : HTTP GET request status is not 200'
        return response
      } catch (e) {
        throw e
      }
    } else {
      throw 'No API end match this resource ' + resource
    }
  }
}
