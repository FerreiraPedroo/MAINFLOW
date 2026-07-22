import { useAppStore } from "@/app/store/store";
import { CONFIG } from "@/config/config";

interface ApiConfig {
  method: string;
  headers?: { [key: string]: string };
  body?: any;
}

/**
 *
 * @param url string
 * @param config Object { method: string, headers: { string: string } }
 */
export async function apiClient(
  url: string,
  config: ApiConfig = { method: "GET", headers: {} },
) {
  const configDefault = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${useAppStore.getState().token}`,
      "X-DiferencialFlow-Version": `${JSON.stringify(useAppStore.getState().appVersion)}`,
    },
  };

  const configFinal = {
    ...config,
    ...configDefault,
  };

  try {
    const response = await fetch(`${CONFIG.urlApi}${url}`, configFinal);
    const responseJson = await response.json();

    if (responseJson.codStatus == 200 || responseJson.codStatus == 200) {
      return responseJson;
    } else if (responseJson.codStatus == 401) {
      useAppStore.getState().setLogout();
    } else {
      throw responseJson;
    }
  } catch (error: any) {
    if (
      error.message?.includes("Failed to fetch") ||
      error.message?.includes("ERR_CONNECTION_REFUSED")
    ) {
      throw {
        codStatus: 404,
        message: "Servidor indisponível ou conexão recusada.",
        data: null,
      };
    } else {
      console.log("apiClient: codStatus não identificado !!");
      throw {
        codStatus: error.codStatus,
        message: `${error.message}`,
        error: error,
        data: null,
      };
    }
  }
}
