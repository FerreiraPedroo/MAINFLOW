import { useAppStore } from "@/app/store/store";
import { CONFIG } from "@/app/config/config";

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

    if (!response.ok) {
      throw response;
    }

    const responseJson = await response.json();
    return responseJson;
  } catch (error: any) {
    const errorJson = await error.json();
    throw errorJson;
  }
}
