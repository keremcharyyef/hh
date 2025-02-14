import { saveTariffs } from "../services/tariffService";

async function run() {
  await saveTariffs();
  process.exit();
}

run();