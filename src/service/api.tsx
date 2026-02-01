import { CONFIG } from "@config/config";

export const ApiService = async (url: string, config = { headers: {} }) => {
  const configDefault = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("X-Mainflow-Token")}`,
      "X-Mainflow-Version": `${localStorage.getItem("mainflow-dataVersion")}`,
    },
  };

  const configFinal = {
    ...config,
    ...configDefault,
  };

  try {
    const response = await fetch(`${CONFIG.urlApi}${url}`, configFinal);
    const responseJson = await response.json();

    if (
      responseJson.codStatus &&+
      (responseJson.codStatus == 201 || responseJson.codStatus == 200)
    ) {
      return responseJson;
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
      throw {
        codStatus: error.codStatus,
        message: `${error.message}`,
        error: error,
        data: null,
      };
    }
  }
};
