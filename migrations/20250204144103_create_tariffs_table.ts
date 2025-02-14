import { Knex } from "knex";

/**
 * Создает таблицу tariffs для хранения тарифов коробов.
 */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tariffs", (table) => {
    table.increments("id").primary();
    table.integer("warehouse_id").notNullable();
    table.decimal("coefficient", 10, 5).notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.unique(["warehouse_id", "updated_at"]);
  });
}

/**
 * Удаляет таблицу tariffs.
 */
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("tariffs");
}
