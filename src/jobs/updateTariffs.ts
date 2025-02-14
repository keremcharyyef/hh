import cron from "node-cron";
import { saveTariffs } from "../services/tariffService";

cron.schedule("0 * * * *", async () => {
  console.log("🔄 Запуск обновления тарифов...");
  await saveTariffs();
  console.log("✅ Обновление завершено!");
});

console.log("⏳ Планировщик тарифов запущен...");
