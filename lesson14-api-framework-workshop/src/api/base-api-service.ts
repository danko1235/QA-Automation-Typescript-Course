import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export class BaseApiService {
    protected axiosInstance: AxiosInstance;

    public constructor(baseURL?: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURL || process.env.BASE_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        });
    }

    protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    return error.response.data as T;
                }
            }
            throw error;
        }
    }
}
