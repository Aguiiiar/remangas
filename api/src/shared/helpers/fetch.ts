import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

export class FetchHelper {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
  }

  setHeaders(headers: Record<string, string>): void {
    this.axiosInstance.defaults.headers = {
      ...this.axiosInstance.defaults.headers,
      ...headers,
    };
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        url,
        config,
      );
      return response.data;
    } catch (error: any) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(
        url,
        data,
        config,
      );
      return response.data;
    } catch (error: any) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(
        url,
        data,
        config,
      );
      return response.data;
    } catch (error: any) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(
        url,
        config,
      );
      return response.data;
    } catch (error: any) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  private handleAxiosError(error: AxiosError): void {
    if (error.response) {
      console.error('Axios Response Error:', error.response.data);
    } else if (error.request) {
      console.error('Axios Request Error:', error.request);
    } else {
      console.error('Axios Error:', error.message);
    }
  }
}
