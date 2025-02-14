import db from "../db.js";
import { fetchTariffs } from "./wbApi.js";

interface Tariff {
  warehouseId: number;
  coefficient: number;
}

export async function saveTariffs(): Promise<void> {
  try {
    const data: Tariff[] = await fetchTariffs();

    for (const tariff of data) {
      await db("tariffs")
        .insert({
          warehouse_id: tariff.warehouseId,
          coefficient: tariff.coefficient,
          updated_at: new Date(),
        })
        .onConflict(["warehouse_id"])
        .merge();
    }

    console.log("Тарифы успешно сохранены!");
  } catch (error) {
    console.error("Ошибка при сохранении тарифов:", error);
  }
}
