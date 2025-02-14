import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const WB_API_URL = "https://suppliers-api.wildberries.ru/api/v1/tariffs";

const wbApi = axios.create({
  baseURL: WB_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": process.env.WB_API_KEY as string, 
  },
});

export async function fetchTariffs(): Promise<any> {
  try {
    const response = await wbApi.get("/");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
}
