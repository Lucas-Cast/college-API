import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("course", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("code").notNullable().unique();
        table.string("syllabus").notNullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("course");
}

