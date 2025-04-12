import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("student_courses", (table) => {
        table.increments("id").primary();
        table.integer("student_id").unsigned().references("id").inTable("student").onDelete('CASCADE');
        table.integer("course_id").unsigned().references("id").inTable("course").onDelete('CASCADE');
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("student_courses");
}

