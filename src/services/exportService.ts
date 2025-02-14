import db from "../db";
import { updateGoogleSheet } from "./googleSheetsService";

const GOOGLE_SHEETS = process.env.GOOGLE_SHEETS?.split(",") || [];

export async function exportDataToGoogleSheets() {
  try {
    const data = await db("tariffs").select("warehouse_id", "coefficient").orderBy("coefficient");
    const formattedData = [["Warehouse ID", "Coefficient"], ...data.map((row) => [row.warehouse_id, row.coefficient])];
    for (const sheetId of GOOGLE_SHEETS) {
      await updateGoogleSheet(sheetId, "stocks_coefs", formattedData);
    }
    console.log("✅ Данные экспортированы во все Google Sheets!");
  } catch (error) {
    console.error("❌ Ошибка при экспорте данных:", error);
  }
}
