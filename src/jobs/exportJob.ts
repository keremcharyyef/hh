import cron from "node-cron";
import { exportDataToGoogleSheets } from "../services/exportService";

cron.schedule("0 */2 * * *", async () => {
  console.log("🔄 Экспорт данных в Google Sheets...");
  await exportDataToGoogleSheets();
  console.log("✅ Экспорт завершен!");
});

console.log("⏳ Планировщик экспорта запущен...");
