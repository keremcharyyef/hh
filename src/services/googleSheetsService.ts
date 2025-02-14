import { google } from "googleapis";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

/**
 * Запись данных в Google Sheets
 * @param spreadsheetId ID таблицы
 * @param sheetName Название листа
 * @param data Массив данных для записи
 */
export async function updateGoogleSheet(spreadsheetId: string, sheetName: string, data: any[]) {
  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: data },
    });

    console.log(`✅ Данные успешно загружены в таблицу ${spreadsheetId}!`);
  } catch (error) {
    console.error("❌ Ошибка при загрузке данных в Google Sheets:", error);
  }
}
