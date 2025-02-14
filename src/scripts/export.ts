import { exportDataToGoogleSheets } from "../services/exportService";

async function run() {
  await exportDataToGoogleSheets();
  process.exit();
}

run();
