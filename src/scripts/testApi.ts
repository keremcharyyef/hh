import { fetchTariffs } from "../services/wbApi";

async function test() {
  try {
    const data = await fetchTariffs();
    console.log("Полученные данные:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

test();