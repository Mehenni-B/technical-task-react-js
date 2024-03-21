import axios, { AxiosError, AxiosResponse } from 'axios';

class HttpClient {

    public static version = 'api/v1';
    public static host = process.env.REACT_APP_HOST!;

    public get getConfig() {
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
    }

    public static defaultError = {
        status: 500,
        message: "Une erreur s'est produite. Veuillez réessayer",
        data: {}
    }

    public static get = async (apiUrl: string, host = HttpClient.host + HttpClient.version, config?: {}) => {
        const httpClient = new HttpClient();
        const getConfig = config ? config : httpClient.getConfig;
        return await axios.get(host + apiUrl, getConfig)
            .then((response: AxiosResponse) => response)
            .catch((error: AxiosError) => {
                if (!error.response)
                    return HttpClient.defaultError;

                return error.response;
            });
    }
}

export default HttpClient;